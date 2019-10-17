// @flow
/* eslint-disable import/prefer-default-export */
export const SubscriptionContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {"name":"wallet","type":"uint256"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getWallet",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "getSubscription",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"}
                ],
                "outputs": [
                    {"components":[{"name":"pubkey","type":"uint256"},{"name":"to","type":"uint256"},{"name":"value","type":"uint64"},{"name":"period","type":"uint32"},{"name":"start","type":"uint32"},{"name":"status","type":"uint8"}],"name":"value0","type":"tuple"}
                ]
            },
            {
                "name": "subscribe",
                "inputs": [
                    {"name":"subscriptionId","type":"uint256"},
                    {"name":"pubkey","type":"uint256"},
                    {"name":"to","type":"uint256"},
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
            {"key":100,"name":"mywallet","type":"uint256"}
        ]
    },
    imageBase64: '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'
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
