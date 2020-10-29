
#import "TONSDKForReactNative.h"
#import "ton_client.h"

@interface Request: NSObject
@property RCTResponseSenderBlock onResult;
@end

@implementation Request
@end

@implementation TONSDKForReactNative

- (dispatch_queue_t)methodQueue
{
    return dispatch_queue_create("js.react-native.client.ton", DISPATCH_QUEUE_SERIAL);
}
RCT_EXPORT_MODULE()

static dispatch_once_t sharedContextToken = 0;
static int sharedContext = 0;
static int ensureSharedContext() {
    dispatch_once(&sharedContextToken, ^{
        sharedContext = tc_create_context();
    });
    return sharedContext;
};


static int nextRequestId = 1;
static dispatch_once_t activeRequestsToken = 0;
static NSMutableDictionary<NSNumber*, Request*>* activeRequests = NULL;

static int createRequest(RCTResponseSenderBlock onResult) {
    dispatch_once(&activeRequestsToken, ^{
        activeRequests = [NSMutableDictionary new];
    });
    Request* request = [[Request alloc] init];
    request.onResult = onResult;
    int requestId = nextRequestId++;
    activeRequests[@(requestId)] = request;
    return requestId;
};

static Request* requestById(int requestId) {
    dispatch_once(&activeRequestsToken, ^{
        activeRequests = [NSMutableDictionary new];
    });
    return activeRequests[@(requestId)];
};

static void releaseRequest(int requestId) {
    dispatch_once(&activeRequestsToken, ^{
        activeRequests = [NSMutableDictionary new];
    });
    [activeRequests removeObjectForKey:@(requestId)];
};

static NSString* stringFromTon(InteropString tonString) {
    if (tonString.len == 0 || tonString.content == NULL || *tonString.content == 0) {
        return @"";
    }
    return [[NSString alloc] initWithBytes:tonString.content length:tonString.len encoding:NSUTF8StringEncoding];
}

static InteropString interopString(NSString* string) {
    InteropString result = {
        (char*)string.UTF8String,
        [string lengthOfBytesUsingEncoding: NSUTF8StringEncoding]
    };
    return result;
}

static void handleRequest(int32_t requestId, InteropString tonResultJson, InteropString tonErrorJson, int32_t flags) {
    Request* request = requestById(requestId);
    if (request == nil) {
        return;
    }
    NSString* resultJson = stringFromTon(tonResultJson);
    NSString* errorJson = stringFromTon(tonErrorJson);
    request.onResult(@[resultJson, errorJson]);
    if (flags & 1) { // finished
        releaseRequest(requestId);
    }
}


RCT_EXPORT_METHOD(coreCreateContext: (RCTResponseSenderBlock)onResult) {
    if (onResult) {
        onResult(@[@(tc_create_context())]);
    }
}

RCT_EXPORT_METHOD(coreRequest: (int)context
                  method:(nonnull NSString *)method
                  paramsJson:(nonnull NSString *)paramsJson
                  onResult:(RCTResponseSenderBlock)onResult) {
    int requestId = createRequest(onResult);
    InteropString tonMethod = interopString(method);
    InteropString tonParamsJson = interopString(paramsJson);
    tc_json_request_async(context, tonMethod, tonParamsJson, requestId, handleRequest);
}

RCT_EXPORT_METHOD(coreDestroyContext: (int)context onComplete:(RCTResponseSenderBlock)onComplete) {
    tc_destroy_context(context);
    if (onComplete) {
        onComplete(@[]);
    }
}

RCT_EXPORT_METHOD(request:(nonnull NSString *)method
                  paramsJson:(nonnull NSString *)paramsJson
                  onResult:(RCTResponseSenderBlock)onResult) {
    int requestId = createRequest(onResult);
    InteropString tonMethod = interopString(method);
    InteropString tonParamsJson = interopString(paramsJson);
    tc_json_request_async(ensureSharedContext(), tonMethod, tonParamsJson, requestId, handleRequest);
}

@end

