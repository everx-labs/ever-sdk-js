// @flow
/* eslint-disable import/prefer-default-export */
export const WalletContractPackage = {
    abi: {
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
    imageBase64: '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'

};

export type WalletContractConstructorParams = {
    wallet: string,
};
