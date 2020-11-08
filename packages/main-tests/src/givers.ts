/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */

// noinspection SpellCheckingInspection
import {abiContract} from '@ton-client/main';

export const givers = {
    v1: {
        address: '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',
        abi: abiContract({
            'ABI version': 1,
            'functions': [
                {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                }, {
                    'name': 'sendGrams',
                    'inputs': [
                        {
                            'name': 'dest',
                            'type': 'address',
                        }, {
                            'name': 'amount',
                            'type': 'uint64',
                        },
                    ],
                    'outputs': [],
                },
            ],
            'events': [],
            'data': [],
        }),
    },
    v2: {
        abi: abiContract({
            'ABI version': 2,
            'header': ['time', 'expire'],
            'functions': [
                {
                    'name': 'upgrade',
                    'inputs': [
                        {
                            'name': 'newcode',
                            'type': 'cell',
                        },
                    ],
                    'outputs': [],
                }, {
                    'name': 'sendTransaction',
                    'inputs': [
                        {
                            'name': 'dest',
                            'type': 'address',
                        }, {
                            'name': 'value',
                            'type': 'uint128',
                        }, {
                            'name': 'bounce',
                            'type': 'bool',
                        },
                    ],
                    'outputs': [],
                }, {
                    'name': 'getMessages',
                    'inputs': [],
                    'outputs': [
                        {
                            'components': [
                                {
                                    'name': 'hash',
                                    'type': 'uint256',
                                }, {
                                    'name': 'expireAt',
                                    'type': 'uint64',
                                },
                            ],
                            'name': 'messages',
                            'type': 'tuple[]',
                        },
                    ],
                }, {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                },
            ],
            'events': [],
        }),
        tvc: 'te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o',
    },
};
export const giverRequestAmount = 500_000_000;
