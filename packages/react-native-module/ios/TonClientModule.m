
#import "TonClientModule.h"
#import "tonclient.h"

@implementation TonClientModule

- (dispatch_queue_t)methodQueue
{
    return dispatch_queue_create("react-native.client.ton", DISPATCH_QUEUE_SERIAL);
}
RCT_EXPORT_MODULE()

static NSString* stringFromTon(tc_string_data_t tonString) {
    if (tonString.len == 0 || tonString.content == NULL || *tonString.content == 0) {
        return @"";
    }
    return [[NSString alloc] initWithBytes:tonString.content length:tonString.len encoding:NSUTF8StringEncoding];
}

static tc_string_data_t interopString(NSString* string) {
    tc_string_data_t result = {
        (char*)string.UTF8String,
        [string lengthOfBytesUsingEncoding: NSUTF8StringEncoding]
    };
    return result;
}

static void handleRequest(uint32_t requestId, tc_string_data_t paramsJson, uint32_t responseType, bool finished) {
    NSString* paramsJsonString = stringFromTon(paramsJson);
}


RCT_EXPORT_METHOD(createContext: (NSString*)configJson) {
}

RCT_EXPORT_METHOD(request: (uint32_t) context
                  functionName:(nonnull NSString *)functionName
                  functionParamsJson:(nonnull NSString *)functionParamsJson
                  requestId: (uint32_t) requestId) {
}

RCT_EXPORT_METHOD(destroyContext: (uint32_t)context) {
    tc_destroy_context(context);
}

@end

