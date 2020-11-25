export type ContractPackage = {
    abi: object,
    tvc: string,
}

const Hello: { 1: ContractPackage } = {
    1: {
        abi: {
            'ABI version': 1,
            'functions': [
                {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                },
                {
                    'name': 'touch',
                    'inputs': [],
                    'outputs': [],
                },
                {
                    'name': 'sayHello',
                    'inputs': [],
                    'outputs': [
                        {'name': 'value0', 'type': 'uint32'},
                    ],
                },
                {
                    'name': 'sendAllMoney',
                    'inputs': [
                        {'name': 'dest_addr', 'type': 'address'},
                    ],
                    'outputs': [],
                },
            ],
            'events': [],
        },
        tvc: '',
    },
};

export const contracts = {
    Hello,
};
