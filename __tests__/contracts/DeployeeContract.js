// @flow
/* eslint-disable import/prefer-default-export */
export const DeployeePackage = {
    abi: {
        'ABI version': 1,
        'functions': [
            {
                'name': 'constructor',
                'inputs': [
                    {
                        'name': '_param1',
                        'type': 'uint32'
                    },
                    {
                        'name': '_param2',
                        'type': 'uint256'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'get',
                'inputs': [],
                'outputs': [
                    {
                        'name': 'value0',
                        'type': 'uint32'
                    },
                    {
                        'name': 'value1',
                        'type': 'uint256'
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
        'data': [
            {
                'key': 100,
                'name': 'param1',
                'type': 'uint32'
            },
            {
                'key': 101,
                'name': 'param2',
                'type': 'uint256'
            }
        ]
    },
    imageBase64: 'te6ccgECHAEAA6EAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAEKAAAAAHMNswAgEgDQoBAv8LAf5/IdUgxwGRcI4SIIECANch1wv/IvkBUyH5EPKo4iLTH9M/NSBwcHDtRNAg9AQyNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuSb4I4ED6KgloLmwjhfIJQH0ACbPCz8jzws/Is8WIMntVH8yMN4FXwWZJCLxQAFfCtsw4IB8DAAI8vBfCgIBIBEOAQm8gmUGBA8B/nBwgggbd0DtRNAg9AQyNCCBAIDXRY4S0z8BM9M/ATIgcddFlIB78vDe3sgkAfQAI88LPyLPCz9xz0EhzxYgye1UXwUA+ADtR8iBAQDPQMnQb4ztRND0BNcdgFlvjAFvjO1X0x/T/zDtRyBvETBwaHWhYH+6lWh4oWAx3sjL/8kQAJLQb1HtV+1HIG8SI8jLH4BkWIBA9ENvUu1X7UcgbxIiyMv/gGVYgED0Q29S7VdbyO1HbxIB9ADtR28TzxbtR28RzxYgye1UMHBqAgEgGxICASAYEwIBYhUUAH6y2rCdcO1E0CD0BDIyINaAMu1HIm+MI2+MIW+MIO1XXwQwyO1HbxIB9ADtR28TzxbtR28RzxYgye1UMHBq2zABCLM3LqwWAfxw7UTQIPQEMjIg1oAy7Ucib4wjb4whb4wg7VdfBDD4AIBk7UdvEoBA9A6T0x/RkXDigGXtR28SgED0DpPT/9GRcOLIghAxNy6sghCAAAAAsc8LHyLPCx8hzwv/yHPPCwH4KM8Wcs9A+CXPCz+AIc9AIM81Is8xvJZxz0AhzxcXACKVcc9BIc3iIMlx+wBbcmrbMAEJucftvzAZAf5w7UTQIPQEMjIg1oAy7Ucib4wjb4whb4wg7VdfBHBodaFgf7qVaHihYDHe7UdvEdcL/7ry4GT4APpAMCDIyfsEgQPocIEAgMhxzwsBIs8KAHHPQPgozxYkzxYj+gJxz0Bw+gJw+gKAQM9A+CPPCx9yz0AgySL7AF8FMMjtR28SGgAwAfQA7UdvE88W7UdvEc8WIMntVDBwatswAITdcCLQMyJz1yHXCwAixwCOFyDAAJ4ighAy2rCd8UABXwbbMOBfBtsw4CLTHzQhwAGZIHfxQAFfB9sw4CMh8UABXwc=',
};
