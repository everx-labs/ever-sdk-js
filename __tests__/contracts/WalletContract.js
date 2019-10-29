// @flow
/* eslint-disable import/prefer-default-export */
export const WalletContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                ],
                "outputs": [
                ]
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {"name":"dest","type":"uint256"},
                    {"name":"value","type":"uint128"},
                    {"name":"bounce","type":"bool"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "setSubscriptionAccount",
                "inputs": [
                    {"name":"addr","type":"uint256"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getSubscriptionAccount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
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
            }
        ],
        "events": [
        ],
        "data": [
            {"key":101,"name":"subscription","type":"uint256"}
        ]
    },
    imageBase64: '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'

};

export type WalletContractConstructorParams = {
    wallet: string,
};
