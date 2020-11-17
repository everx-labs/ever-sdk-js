
#import "TonClientModule.h"
#import "tonclient.h"

@implementation TonClientModule

- (dispatch_queue_t)methodQueue
{
    return dispatch_queue_create("react-native.client.ton", DISPATCH_QUEUE_SERIAL);
}
RCT_EXPORT_MODULE()

static TonClientModule* module = NULL;

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

static void handleResponse(
    uint32_t requestId,
    tc_string_data_t paramsJson,
    uint32_t responseType,
    bool finished
) {
    auto mod = module;
    if (mod == NULL) {
        return;
    }
    [mod sendEventWithName:@"Response" body:@{
        @"requestId": @(requestId),
        @"paramsJson": stringFromData(paramsJson),
        @"responseType": @(responseType),
        @"finished": @(finished),
    }];}


RCT_EXPORT_METHOD(createContext: (NSString*)configJson callback: (RCTResponseSenderBlock)callback) {
    auto responseHandle = tc_create_context(dataFromString(configJson));
    auto responseString = stringFromData(tc_read_string(responseHandle));
    tc_destroy_string(responseHandle);
    callback(@[responseString]);
}

RCT_EXPORT_METHOD(destroyContext: (uint32_t)context) {
    tc_destroy_context(context);
}

RCT_EXPORT_METHOD(sendRequest: (uint32_t) context
    functionName:(nonnull NSString *)functionName
    functionParamsJson:(nonnull NSString *)functionParamsJson
    requestId: (uint32_t) requestId
) {
    if (module == NULL) {
        module = self;
    }
    tc_request(
        context,
        dataFromString(functionName),
        dataFromString(functionParamsJson),
        requestId,
        handleResponse
    );
}

@end

