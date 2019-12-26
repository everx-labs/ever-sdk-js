// @flow
/* eslint-disable import/prefer-default-export */
export const DeployerPackage = {
    abi: {
        'ABI version': 1,
        'functions': [
            {
                'name': 'constructor',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'setContract',
                'inputs': [
                    {
                        'name': '_contract',
                        'type': 'cell'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'deploy',
                'inputs': [
                    {
                        'name': 'pubkey',
                        'type': 'uint256'
                    },
                    {
                        'name': 'gram',
                        'type': 'uint128'
                    },
                    {
                        'name': 'constuctor_id',
                        'type': 'uint32'
                    },
                    {
                        'name': 'constuctor_param0',
                        'type': 'uint32'
                    },
                    {
                        'name': 'constuctor_param1',
                        'type': 'uint256'
                    }
                ],
                'outputs': [
                    {
                        'name': 'value0',
                        'type': 'address'
                    }
                ]
            },
            {
                'name': 'setCode',
                'inputs': [
                    {
                        'name': '_code',
                        'type': 'cell'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'deploy2',
                'inputs': [
                    {
                        'name': 'data',
                        'type': 'cell'
                    },
                    {
                        'name': 'gram',
                        'type': 'uint128'
                    },
                    {
                        'name': 'constuctor_id',
                        'type': 'uint32'
                    },
                    {
                        'name': 'constuctor_param0',
                        'type': 'uint32'
                    },
                    {
                        'name': 'constuctor_param1',
                        'type': 'uint256'
                    }
                ],
                'outputs': [
                    {
                        'name': 'value0',
                        'type': 'address'
                    }
                ]
            },
            {
                'name': 'deploy3',
                'inputs': [
                    {
                        'name': 'contr',
                        'type': 'cell'
                    },
                    {
                        'name': 'addr',
                        'type': 'address'
                    },
                    {
                        'name': 'grams',
                        'type': 'uint128'
                    },
                    {
                        'name': 'payload',
                        'type': 'cell'
                    }
                ],
                'outputs': [
                    {
                        'name': 'value0',
                        'type': 'address'
                    }
                ]
            },
            {
                'name': 'sendAllMoney',
                'inputs': [
                    {
                        'name': 'dest_addr',
                        'type': 'address'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'fallback',
                'inputs': [],
                'outputs': []
            }
        ],
        'events': [],
        'data': []
    },
    imageBase64: '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',
};
