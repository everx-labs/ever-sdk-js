// @flow
/* eslint-disable import/prefer-default-export */
export const SubscriptionContractPackage = {
    abi: {
        "ABI version": 0,
        "functions": [{
            "name": "constructor",
            "inputs": [
                {"name":"wallet","type":"uint256"}
            ],
            "outputs": [
            ]
        }, {
            "name": "getWallet",
            "inputs": [
            ],
            "outputs": [
                {"name":"value0","type":"uint256"}
            ]
        }, {
            "name": "getSubscription",
            "inputs": [
                {"name":"subscriptionId","type":"uint256"}
            ],
            "outputs": [
                {"components":[{"name":"pubkey","type":"uint256"},{"name":"to","type":"uint256"},{"name":"value","type":"uint64"},{"name":"period","type":"uint32"},{"name":"start","type":"uint32"},{"name":"status","type":"uint8"}],"name":"value0","type":"tuple"}
            ]
        }, {
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
        }, {
            "name": "cancel",
            "inputs": [
                {"name":"subscriptionId","type":"uint256"}
            ],
            "outputs": [
            ]
        }, {
            "name": "executeSubscription",
            "inputs": [
                {"name":"subscriptionId","type":"uint256"}
            ],
            "outputs": [
            ]
        }]
    },
    imageBase64: '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'
};

export type SubscriptionContractConstructorParams = {
    wallet: string,
};
