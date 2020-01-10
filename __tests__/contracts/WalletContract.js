// @flow
/* eslint-disable import/prefer-default-export */
export const WalletContractPackage = {
    abi:  {
        "ABI version": 1,
        "functions": [
            {
                "name": "sendTransaction",
                "inputs": [
                    {"name":"dest","type":"address"},
                    {"name":"value","type":"uint128"},
                    {"name":"bounce","type":"bool"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "setSubscriptionAccount",
                "inputs": [
                    {"name":"addr","type":"address"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getSubscriptionAccount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"address"}
                ]
            },
            {
                "name": "createOperationLimit",
                "inputs": [
                    {"name":"value","type":"uint256"}
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "createArbitraryLimit",
                "inputs": [
                    {"name":"value","type":"uint256"},
                    {"name":"period","type":"uint32"}
                ],
                "outputs": [
                    {"name":"value0","type":"uint64"}
                ]
            },
            {
                "name": "changeLimit",
                "inputs": [
                    {"name":"limitId","type":"uint64"},
                    {"name":"value","type":"uint256"},
                    {"name":"period","type":"uint32"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "deleteLimit",
                "inputs": [
                    {"name":"limitId","type":"uint64"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getLimit",
                "inputs": [
                    {"name":"limitId","type":"uint64"}
                ],
                "outputs": [
                    {"components":[{"name":"value","type":"uint256"},{"name":"period","type":"uint32"},{"name":"ltype","type":"uint8"},{"name":"spent","type":"uint256"},{"name":"start","type":"uint32"}],"name":"value0","type":"tuple"}
                ]
            },
            {
                "name": "getLimitCount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint64"}
                ]
            },
            {
                "name": "getLimits",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint64[]"}
                ]
            },
            {
                "name": "sendAllMoney",
                "inputs": [
                    {"name":"dest_addr","type":"address"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "fallback",
                "inputs": [
                ],
                "outputs": [
                ]
            },
            {
                "name": "constructor",
                "inputs": [
                ],
                "outputs": [
                ]
            }
        ],
        "events": [
        ],
        "data": [
            {"key":101,"name":"subscription","type":"address"},
            {"key":100,"name":"owner","type":"uint256"}
        ]
    },
    imageBase64: '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',
};

export type WalletContractConstructorParams = {
    wallet: string,
};
