// @flow
/* eslint-disable import/prefer-default-export */
export const WalletContractPackage = {
    abi: {
        "ABI version": 0,
        "functions": [{
            "name": "constructor",
            "inputs": [
            ],
            "outputs": [
            ]
        }, {
            "name": "sendTransaction",
            "inputs": [
                {"name":"dest","type":"uint256"},
                {"name":"value","type":"uint256"}
            ],
            "outputs": [
            ]
        }, {
            "name": "setSubscriptionAccount",
            "inputs": [
                {"name":"addr","type":"uint256"}
            ],
            "outputs": [
            ]
        }, {
            "name": "getSubscriptionAccount",
            "inputs": [
            ],
            "outputs": [
                {"name":"value0","type":"uint256"}
            ]
        }, {
            "name": "createOperationLimit",
            "inputs": [
                {"name":"value","type":"uint256"}
            ],
            "outputs": [
                {"name":"value0","type":"uint256"}
            ]
        }, {
            "name": "createArbitraryLimit",
            "inputs": [
                {"name":"value","type":"uint256"},
                {"name":"period","type":"uint32"}
            ],
            "outputs": [
                {"name":"value0","type":"uint64"}
            ]
        }, {
            "name": "changeLimit",
            "inputs": [
                {"name":"limitId","type":"uint64"},
                {"name":"value","type":"uint256"},
                {"name":"period","type":"uint32"}
            ],
            "outputs": [
            ]
        }, {
            "name": "deleteLimit",
            "inputs": [
                {"name":"limitId","type":"uint64"}
            ],
            "outputs": [
            ]
        }, {
            "name": "getLimit",
            "inputs": [
                {"name":"limitId","type":"uint64"}
            ],
            "outputs": [
                {"components":[{"name":"value","type":"uint256"},{"name":"period","type":"uint32"},{"name":"ltype","type":"uint8"},{"name":"spent","type":"uint256"},{"name":"start","type":"uint32"}],"name":"value0","type":"tuple"}
            ]
        }, {
            "name": "getLimitCount",
            "inputs": [
            ],
            "outputs": [
                {"name":"value0","type":"uint64"}
            ]
        }, {
            "name": "getLimits",
            "inputs": [
            ],
            "outputs": [
                {"name":"value0","type":"uint64[]"}
            ]
        }]
    },
    imageBase64: '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'

};

export type WalletContractConstructorParams = {
    wallet: string,
};
