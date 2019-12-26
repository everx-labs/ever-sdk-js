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
            },
            {
                "name": "sendAllMoney",
                "inputs": [
                    {"name":"dest_addr","type":"address"}
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
    imageBase64: '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',
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
