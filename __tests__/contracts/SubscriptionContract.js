// @flow
/* eslint-disable import/prefer-default-export */
export const SubscriptionContractPackage = {
    abi: {
        'ABI version': 0,
        functions: [{
            name: 'constructor',
            inputs: [{ name: 'wallet', type: 'bits256' }],
            outputs: [],
        }, {
            name: 'subscribe',
            signed: true,
            inputs: [
                { name: 'subscriptionId', type: 'bits256' },
                { name: 'pubkey', type: 'bits256' },
                { name: 'to', type: 'bits256' },
                { name: 'value', type: 'duint' },
                { name: 'period', type: 'duint' },
            ],
            outputs: [{ name: 'subscriptionHash', type: 'bits256' }],
        }, {
            name: 'cancel',
            signed: true,
            inputs: [{ name: 'subscriptionId', type: 'bits256' }],
            outputs: [],
        }, {
            name: 'executeSubscription',
            inputs: [
                { name: 'subscriptionId', type: 'bits256' },
                { name: 'signature', type: 'bits256' },
            ],
            outputs: [],
        }, {
            name: 'getSubscription',
            inputs: [{ name: 'subscriptionId', type: 'bits256' }],
            outputs: [
                { name: 'to', type: 'bits256' },
                { name: 'amount', type: 'duint' },
                { name: 'period', type: 'duint' },
                { name: 'status', type: 'uint8' },
            ],
        }],
    },
    imageBase64: 'te6ccgECKAEABGkAAgE0AgEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATL/AIn0BSHBAZN49KCbePQN8rSAIPSh8jPiAwEBwAQCASAGBQAp/+ABw8AEhcfABAdMHAfJr0x8B8AKAgHWGAcBAawIAgEgEgkCASALCgBdvBPJjSGMCAgEwAxYVrkwDrjGxo64X/9qJoa6ZAgIB6LflZZGZ2omhqGOeLZPaqQCAnUODAEJtJsMe0ANAfoxgQEAmAGLCtcmAdcY2NHXC//tRNDXTIEBAPQP8rJ1IXj0DvKx0wfRAXMhePQO8rHTH9EBciF49A7ysdN/0QFxIXj0DvKxMcjPlAK02GPaz4aAzgGVgwapDCGXgwagWMsHAegxzwsHAZWDBqkMIZeDBqBYywcB6DHPCwfLBxcBCbUQ68JADwH+MYEBAJgBiwrXJgHXGNgB1wv/AYECAJgBiwrXJgHXGNjRISDtRNDXTIEBAPQP8rJwIXj0DvKx1wv/E/kQ8uBmdCF49A7ysdMf0QFzIXj0DvKx0x/REqD4IyBYvJ91Inj0DvKx0wfRc7ry0GXfyMsfydB0WHj0FosQOHVYePQWcBABzO1E0NdMgQEA9A7ysgFyIXj0DvKxAXEhePQO8rEBJO1E0NdMgQEA9BfIzO1E0NQxzxbJ7VSCECT04VVwyMsHyx/PhoDOAdN/0ZWDBqkMIZeDBqBYywcB6DHPCwfJ0FgwAdcL/3BZcBEAgo4+/vkAU25kQmR5SW50Ae1HbxBvGPpCbxLIz4ZAygfL/8nQjhfIz4Ugz4oAQIEBAM9AzgH6AoBrz0DOydhw+wDYAgJwFBMAVbYbRXcMYEBAJgBiwrXJgHXGNjR7UTQINdKcbrcAXBtgQEA9BbIzM7J7VSABCbZr2EGgFQH+MYEBAJgBiwrXJgHXGNiBAQCYAYsK1yYB1xjYgQEAmAGLCtcmAdcY2NMA0wZYjhVxdwOSVSCc0wDTBgMgpgcFWayg6DHe0wDTBliOFXF3A5JVIJzTANMGAyCmBwVZrKDoMd7RXjAg10mBAQC68uBkIddJgQEAuvLgZCLXSYEBABYB5Lry4GQjwQHy0GQkwQHy0GRVMHBtePQWcQF49BYhyMt/ydAycgF49BYhyMsfydAycwF49Bb4I8jLH8nQdFh49BaLEAh1WHj0FiD5AALXC//tRNDXTIEBAPQXyMztRNDUMc8Wye1UyM+UAAa9hBrPhoDL/xcAaI4xjivIcs9Bcs9Acs9AcM8LP3DPCx9xz0BczzUBzzGkvpVxz0DPE5Vxz0HPEeLJ2HD7ANgCASAnGQEBMBoCA8/AHBsAGTQ1ygF+kD6QPoAbwSABbQg0wcB8muJ9AWAIPQK8qnXCwCOGSDHAvJt1SDHAPJtIfkBAe1E0NcL//kQ8qiXIMcCktQx3+KAdAQHAHgIBICQfAgEgISAACbwTyY0mAgJ1IyIACbSbDHsgAAm1EOvCIAICcCYlAAm2G0V3EAAJtmvYQbAABTbMIA=='
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
