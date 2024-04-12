#include "Share.h"
#import <Foundation/Foundation.h>
#import "AppController.h"
#import <AudioToolbox/AudioToolbox.h>
#import "CommonCrypto/CommonDigest.h"


@implementation Share


+ (void)Help {
    AppController *deleget = UIApplication.sharedApplication.delegate;
        UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
        UIViewController *One = [storyboard instantiateViewControllerWithIdentifier:@"help"];
        [deleget.viewController  presentViewController:One animated:YES completion:nil];
}

+ (void)clear {
    
}
+ (void)openShare {
    NSLog(@"-----openShare");
}

@end
