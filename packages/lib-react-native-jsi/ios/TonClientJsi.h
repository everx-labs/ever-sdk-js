#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

#import "TonClientJsi.h"

@interface TonClientJsi : NSObject <RCTBridgeModule>

@property (nonatomic, assign) BOOL setBridgeOnMainQueue;

@end
