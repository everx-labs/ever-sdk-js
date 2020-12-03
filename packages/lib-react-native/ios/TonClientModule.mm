
#import "TonClientModule.h"
#import "tonclient.h"

@implementation TonClientModule
{
  bool hasListeners;
}
-(void)startObserving {
    hasListeners = YES;
}

-(void)stopObserving {
    hasListeners = NO;
}


- (dispatch_queue_t)methodQueue
{
    return dispatch_queue_create("react-native.client.ton", DISPATCH_QUEUE_SERIAL);
}
RCT_EXPORT_MODULE()

+(id)allocWithZone:(NSZone *)zone {
    static TonClientModule *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}

static NSString* stringFromData(tc_string_data_t stringData) {
    if (stringData.len == 0 || stringData.content == NULL || *stringData.content == 0) {
        return @"";
    }
    return [[NSString alloc] initWithBytes:stringData.content length:stringData.len encoding:NSUTF8StringEncoding];
}

static tc_string_data_t dataFromString(NSString* string) {
    tc_string_data_t result = {
        (char*)string.UTF8String,
        static_cast<uint32_t>([string lengthOfBytesUsingEncoding: NSUTF8StringEncoding])
    };
    return result;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"Response"];
}

-(void) handleResponseForRequestId:
    (uint32_t) requestId
    paramsJson: (tc_string_data_t) paramsJson
    responseType: (uint32_t) responseType
    finished: (bool) finished
{
    if (self->hasListeners) {
        [self sendEventWithName:@"Response" body:@{
            @"requestId": @(requestId),
            @"paramsJson": stringFromData(paramsJson),
            @"responseType": @(responseType),
            @"finished": @(finished),
        }];
    }
}

static void handleResponse(
    uint32_t requestId,
    tc_string_data_t paramsJson,
    uint32_t responseType,
    bool finished
) {
    TonClientModule* module = [[TonClientModule alloc] init];
    [module
        handleResponseForRequestId: requestId
        paramsJson: paramsJson
        responseType: responseType
        finished: finished
    ];
}


RCT_EXPORT_METHOD(createContext: (NSString*)configJson callback: (RCTResponseSenderBlock)callback) {
    auto responseHandle = tc_create_context(dataFromString(configJson));
    auto responseString = stringFromData(tc_read_string(responseHandle));
    tc_destroy_string(responseHandle);
    callback(@[responseString]);
}

RCT_EXPORT_METHOD(destroyContext: (uint32_t)context) {
    tc_destroy_context(context);
}

RCT_EXPORT_METHOD(sendRequest: (nonnull NSNumber*) context
    requestId: (nonnull NSNumber*) requestId
    functionName:(nonnull NSString *)functionName
    functionParamsJson:(nonnull NSString *)functionParamsJson
) {
    tc_request(
        context.intValue,
        dataFromString(functionName),
        dataFromString(functionParamsJson),
        requestId.intValue,
        handleResponse
    );
}

@end

