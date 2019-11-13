// @flow
/* eslint-disable import/prefer-default-export */
export const SubscriptionContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {"name":"wallet","type":"address"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getWallet",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"address"}
                ]
            },
            {
                "name": "getSubscription",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"}
                ],
                "outputs": [
                    {"components":[{"name":"pubkey","type":"uint256"},{"name":"to","type":"address"},{"name":"value","type":"uint64"},{"name":"period","type":"uint32"},{"name":"start","type":"uint32"},{"name":"status","type":"uint8"}],"name":"value0","type":"tuple"}
                ]
            },
            {
                "name": "subscribe",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"},
                    {"name":"pubkey","type":"uint256"},
                    {"name":"to","type":"address"},
                    {"name":"value","type":"uint64"},
                    {"name":"period","type":"uint32"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "cancel",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "executeSubscription",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"}
                ],
                "outputs": [
                ]
            }
        ],
        "events": [
        ],
        "data": [
            {"key":100,"name":"mywallet","type":"address"}
        ]
    },
    imageBase64: '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'
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
