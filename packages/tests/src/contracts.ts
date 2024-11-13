export type ContractPackage = {
    abi: object,
    tvc: string,
}

export const contracts = {
    CheckInitParams: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "getAddressVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "getUintVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getBooleanVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "bool"}]
                }, {
                    "name": "getBytesVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "bytes"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [{"key": 1, "name": "addressVariable", "type": "address"}, {
                    "key": 2,
                    "name": "uintVariable",
                    "type": "uint256"
                }, {"key": 3, "name": "booleanVariable", "type": "bool"}, {
                    "key": 4,
                    "name": "bytesVariable",
                    "type": "bytes"
                }],
                "events": []
            },
            tvc: 'te6ccgECJAEABSkAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAZT/fyHVIMcBkTCOFSCBAgDXIdcL/yL5AVMh+RDyqPhlMOLtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YgsBWo6A4tMf0z8Bjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTYAfFAAR8CASASDQIBWBAOAQm4CBUeEA8A/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+ErIi9wAAAAAAAAAAAAAAAAQzxbPgc+TwQKjwiHPFslx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n/4ZwEJuQ+Q5VARAPz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhNyIvcAAAAAAAAAAAAAAAAEM8Wz4HPk6HyHKohzxTJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcCASAZEwIBIBYUAQm4qkE7EBUA/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EvIi9wAAAAAAAAAAAAAAAAQzxbPgc+S1UgnYiHPC//JcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcBCbnH7b8wFwH++EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3vpA0fhFIG6SMHDe+EK68uBk+ADIyfsEIMjPhQjOjQQID6AAAAAAAAAAAAAAAAAAQM8WyYEAgPsAMPhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQBgAHM8Ry//KAMzOye1Uf/hnAgEgIxoCAUghGwEPtCQAnXwgt0AcAbaOgN74RvJzcfhm0fgAcHB0yMsCIs8KByHPC/8gydADXwP4bvhK+E7HBZT4Tvhq3vhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1Uf/hnHQFS7UTQINdJwgGOH9P/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GIeAQaOgOIfAf70BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cL/5Fw4vhrcyGAQPQOk9cKAJFw4vhsdCGAQPQPksjJ3/htjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAw+G5wAYBA9A7yvdcL//hicPhjcPhmf/hhAQm1vblQQCIA/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EzIi9wAAAAAAAAAAAAAAAAQzxbPgc+STe3KgiHPCgDJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcActxwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "getAddressVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "getUintVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getBooleanVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "bool"}]
                }, {
                    "name": "getBytesVariable",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "bytes"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [{"key": 1, "name": "addressVariable", "type": "address"}, {
                    "key": 2,
                    "name": "uintVariable",
                    "type": "uint256"
                }, {"key": 3, "name": "booleanVariable", "type": "bool"}, {
                    "key": 4,
                    "name": "bytesVariable",
                    "type": "bytes"
                }],
                "events": []
            },
            tvc: 'te6ccgECJQEABTsAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAVj/fyHtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YgsBpo6A4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8B8AH4R26S8jzeGAIBIB0NAgEgGg4CASAUDwIBSBIQAQm15nxTwBEB/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EvIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PfM+KeIc8L/8lx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAQm16T4WwBMB/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+ErIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PPSfC2Ic8WyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTefyMBD7kWq+f/CC3QFQG2joDe+Ebyc3H4ZtH4AHBwdMjLAiLPCgchzwv/IMnQA18D+G74SvhOxwWU+E74at74QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVH/4ZxYBUu1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiFwEGjoDiGAH+9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC/+RcOL4a3MhgED0DpPXCgCRcOL4bHQhgED0D5LIyd/4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBkAMPhucAGAQPQO8r3XC//4YnD4Y3D4Zn/4YQEJu0ADWtgbAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe+kDR+EUgbpIwcN74Qrry4GT4AMjJ+wQgyM+FCM6NA8gPoAAAAAAAAAAAAAAAAAHPFs+Bz4HJgQCA+wAw+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E0cACT4Sl5AzxHL/8oAzM7J7VR/+GcCAUggHgEJueJmAPAfAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhNyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SfEzAHiHPFMlx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAgJwJCEBB7HGyBciAf74QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhMyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SB42QLiHPCgDJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/IwAE+GcActhwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
        },
    },
    Deployee: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{
                    "name": "constructor",
                    "inputs": [{"name": "_param1", "type": "uint32"}, {"name": "_param2", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "get",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint32"}, {"name": "value1", "type": "uint256"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECEwEAArsAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAdL/fyHVIMcBkTCOFSCBAgDXIdcL/yL5AVMh+RDyqPhlMOLtRNAg10nCAY4Y0//TP9MA0x/XC//4a/hqf/hh+Gb4Y/hijh70BXD4anD4a3ABgED0DvK91wv/+GJw+GNw+GZ/+GHi0x/TPwELAEqOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNgB8UABAgEgDg0A/byCZQYHwgt0ch9qJoEGuk4QDHDGn/6Z/pgGmP64X//DX8NT/8MPwzfDH8MUcPegK4fDU4fDW4AMAgegd5XuuF//wxOHwxuHwzP/ww8W98I3k5uPwzaY/p/+iQ/DUQfDWt/CFkZf/8IeeFn/wjZ4WAfCV8JYFlj+X/5PaqP/wzwCASASDwIBIBEQAPG4JuXVnwgt0cN9qJoaf/pn+mAaY/rhf/8Nfw1P/ww/DN8Mfwxb2j8AHwlfCXkRe4AAAAAAAAAAAAAAAAQZ4tnwOfA58libl1ZEWeFj5Dnhf/kuP2ALeB/xw38IWRl//wh54Wf/CNnhYB8JXwlgWWP5f/k9qpvP/wzwAP+5x+2/Pwgt0cN9qJoaf/pn+mAaY/rhf/8Nfw1P/ww/DN8Mfwxb30gaPwikDdJGDhvfCFdeXAyfABkZP2CEGRnwoRnRoHkB9AAAAAAAAAAAAAAAAAA54tnwOfA5MCAQH2AGHwhZGX//CHnhZ/8I2eFgHwlfCWBZY/l/+T2qj/8M8ABy3XAi0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "constructor",
                    "inputs": [{"name": "_param1", "type": "uint32"}, {"name": "_param2", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "get",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint32"}, {"name": "value1", "type": "uint256"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECEwEAAsIAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAcL/fyHtRNAg10nCAY4Y0//TP9MA0x/XC//4a/hqf/hh+Gb4Y/hijh70BXD4anD4a3ABgED0DvK91wv/+GJw+GNw+GZ/+GHi0wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8BCwBqjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHwHwAfhHbpLyPN4CASAODQD/vKABrW/CC3Rw32omhp/+mf6YBpj+uF//w1/DU//DD8M3wx/DFvfSBo/CKQN0kYOG98IV15cDJ8AGRk/YIQZGfChGdGgeQH0AAAAAAAAAAAAAAAAADni2fA58DkwIBAfYAYfCFkZf/8IeeFn/wjZ4WAfCV8JYFlj+X/5PaqP/wzwCASAQDwD9uqvk2M+EFujkPtRNAg10nCAY4Y0//TP9MA0x/XC//4a/hqf/hh+Gb4Y/hijh70BXD4anD4a3ABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbTH9P/0SH4aiD4a1v4QsjL//hDzws/+EbPCwD4SvhLAssfy//J7VR/+GeAICxBIRAO+wdnQx8ILdHDfaiaGn/6Z/pgGmP64X//DX8NT/8MPwzfDH8MW9o/AB8JXwl5EXuAAAAAAAAAAAAAAAAEGeLZ8DnwOfJAnZ0MRFnhY+Q54X/5Lj9gC3gf8cN/CFkZf/8IeeFn/wjZ4WAfCV8JYFlj+X/5Paqbz/8M8ActhwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
        },
    },
    Deployer: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{
                    "name": "setContract",
                    "inputs": [{"name": "_contract", "type": "cell"}],
                    "outputs": []
                }, {
                    "name": "deploy",
                    "inputs": [{"name": "pubkey", "type": "uint256"}, {
                        "name": "gram_amount",
                        "type": "uint128"
                    }, {"name": "constructor_id", "type": "uint32"}, {
                        "name": "constructor_param0",
                        "type": "uint32"
                    }, {"name": "constructor_param1", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "setCode",
                    "inputs": [{"name": "_code", "type": "cell"}],
                    "outputs": []
                }, {
                    "name": "deploy2",
                    "inputs": [{"name": "data", "type": "cell"}, {
                        "name": "gram_amount",
                        "type": "uint128"
                    }, {"name": "constructor_id", "type": "uint32"}, {
                        "name": "constructor_param0",
                        "type": "uint32"
                    }, {"name": "constructor_param1", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "deploy3",
                    "inputs": [{"name": "contr", "type": "cell"}, {
                        "name": "addr",
                        "type": "address"
                    }, {"name": "gram_amount", "type": "uint128"}, {"name": "payload", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: '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',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "setContract",
                    "inputs": [{"name": "_contract", "type": "cell"}],
                    "outputs": []
                }, {
                    "name": "deploy",
                    "inputs": [{"name": "pubkey", "type": "uint256"}, {
                        "name": "gram_amount",
                        "type": "uint128"
                    }, {"name": "constructor_id", "type": "uint32"}, {
                        "name": "constructor_param0",
                        "type": "uint32"
                    }, {"name": "constructor_param1", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "setCode",
                    "inputs": [{"name": "_code", "type": "cell"}],
                    "outputs": []
                }, {
                    "name": "deploy2",
                    "inputs": [{"name": "data", "type": "cell"}, {
                        "name": "gram_amount",
                        "type": "uint128"
                    }, {"name": "constructor_id", "type": "uint32"}, {
                        "name": "constructor_param0",
                        "type": "uint32"
                    }, {"name": "constructor_param1", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "deploy3",
                    "inputs": [{"name": "contr", "type": "cell"}, {
                        "name": "addr",
                        "type": "address"
                    }, {"name": "gram_amount", "type": "uint128"}, {"name": "payload", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [{"key": 1, "name": "lastID", "type": "uint256"}],
                "events": []
            },
            tvc: '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',
        },
    },
    Events: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "emitValue",
                    "inputs": [{"name": "id", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "returnValue",
                    "inputs": [{"name": "id", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "events": [{"name": "EventThrown", "inputs": [{"name": "id", "type": "uint256"}], "outputs": []}]
            },
            tvc: 'te6ccgECHQEAA/MAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHVIMcBkXCOEiCBAgDXIdcL/yL5AVMh+RDyqOIi0x/TPzUgcHBw7UTQ9AQBNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuY4kJfgjgQPoqCSguY4XyCUB9AAmzws/I88LPyLPFiDJ7VR/MjDe3gVfBZkkIvFAAV8K2zDgCwAMgDTy8F8KAgEgDg0ADbwtuXB22YQCASAWDwIBSBMQAQm3j9t+YBEB/nDtRND0BAEyINaAMu1HIm+MI2+MIW+MIO1XXwRwaHWhYH+6lWh4oWAx3u1HbxHXC/+68uBk+AD6QDAgyMn7BIED6HCBAIDIcc8LASLPCgBxz0D4KM8WJM8WI/oCcc9AcPoCcPoCgEDPQPgjzwsfcs9AIMki+wBfBTDI7UdvEgESAC70AO1HbxPPFu1HbxHPFiDJ7VQwcGrbMAEJtwlje2AUAfpw7UTQ9AQBMiDWgDLtRyJvjCNvjCFvjCDtV18E0/8w+ADIghBFty4OghB/////sM8LHyHPC//Ic88LAfgozxZyz0D4Jc8LP4Ahz0AgzzUizzG8lnHPQCHPF5Vxz0EhzeIgyXH7AFvIghAkJY3tghCAAAAAsc8LHyHPC//IcxUAls8LAfgozxZyz0D4Jc8LP4Ahz0AgzzUizzG8lnHPQCHPF5Vxz0EhzeIgyXH7AFvI7UdvEgH0AO1HbxPPFu1HbxHPFiDJ7VQwcWrbMAIBIBgXAOu4iQAnXaiaBBAgEFrovk5gHwAdqPkQICAZ6Bk6DfGAPoCLLfGdquAmDg0OtCwP91KtDxQsBjvdqOQN4iYAORl/+ToN6j2q/ajkDeJZHoALBBjgMcIGDhnhZ/BBA27oGeFn7jnoMrnizjnoPEAt4jni2T2qjg1QAgFiHBkBCLLpYXwaAf5w7UTQ9AQBMiDWgDLtRyJvjCNvjCFvjCDtV18E0/8w+ADIghBFty4OghB/////sM8LHyHPC//Ic88LAfgozxZyz0D4Jc8LP4Ahz0AgzzUizzG8lnHPQCHPF5Vxz0EhzeIgyXH7AFswyO1HbxIB9ADtR28TzxbtR28RzxYgye1UGwAKMHBq2zAAytlwIddJIMEgjisgwACOHCPQc9ch1wsAIMABltswXwfbMJbbMF8H2zDjBNmW2zBfBtsw4wTZ4CLTHzQgdLsgjhUwIIIQ/////7ogmTAgghD////+ut/fltswXwfbMOAjIfFAAV8H',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["pubkey", "time", "expire"],
                "functions": [{
                    "name": "emitValue",
                    "inputs": [{"name": "id", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "returnValue",
                    "inputs": [{"name": "id", "type": "uint256"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": [{"name": "EventThrown", "inputs": [{"name": "id", "type": "uint256"}], "outputs": []}]
            },
            tvc: 'te6ccgECFwEAAxUAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAcj/fyHtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8BCwBqjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHwHwAfhHbpLyPN4CASASDQIBIA8OAL26i1Xz/4QW6ONe1E0CDXScIBjhDT/9M/0wDRf/hh+Gb4Y/hijhj0BXABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbR+AD4QsjL//hDzws/+EbPCwDJ7VR/+GeAIBIBEQAOW4gAa1vwgt0cJ9qJoaf/pn+mAaL/8MPwzfDH8MW99IMrqaOh9IG/o/CKQN0kYOG98IV15cDJ8AGRk/YIQZGfChGdGggQH0AAAAAAAAAAAAAAAAAAgZ4tkwIBAfYAYfCFkZf/8IeeFn/wjZ4WAZPaqP/wzwAMW5k8Ki3wgt0cJ9qJoaf/pn+mAaL/8MPwzfDH8MW9rhv/K6mjoaf/v6PwAZEXuAAAAAAAAAAAAAAAACGeLZ8DnyOPLGL0Q54X/5Lj9gBh8IWRl//wh54Wf/CNnhYBk9qo//DPACAUgWEwEJuLfFglAUAfz4QW6OE+1E0NP/0z/TANF/+GH4Zvhj+GLe1w3/ldTR0NP/39H4AMiL3AAAAAAAAAAAAAAAABDPFs+Bz5HHljF6Ic8L/8lx+wDIi9wAAAAAAAAAAAAAAAAQzxbPgc+SVviwSiHPC//JcfsAMPhCyMv/+EPPCz/4Rs8LAMntVH8VAAT4ZwBy3HAi0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
        },
    },
    Hello: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "touch",
                    "inputs": [],
                    "outputs": []
                }, {
                    "name": "sayHello",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint32"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "events": []
            },
            tvc: 'te6ccgECGQEAA3UAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHVIMcBkXCOEiCBAgDXIdcL/yL5AVMh+RDyqOIi0x/TPzUgcHBw7UTQ9AQBNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuY4kJfgjgQPoqCSguY4XyCUB9AAmzws/I88LPyLPFiDJ7VR/MjDe3gVfBZkkIvFAAV8K2zDgCwAMgDTy8F8KAgEgDg0A47xrWe+Lh2omh6AgCZEGtAGXajkTfGEbfGELfGEHarr4IYdqO3iOuFj+RBCCa1nvjBCEAAAABY54WPkOeFj+Q554WA/BRnizlnoHwS54WfwBDnoBBnmpFnmN5LOOegEOeLyrjnoJDm8RBkuP2ALbi1bZhAIBIBQPAgFIExABCbeP235gEQH+cO1E0PQEATIg1oAy7Ucib4wjb4whb4wg7VdfBHBodaFgf7qVaHihYDHe7UdvEdYfMdcL/7ry4GT4APpAMCDIyfsEgQPocIEAgMhxzwsBIs8KAHHPQPgozxYkzxYj+gJxz0Bw+gJw+gKAQM9A+CPPCx9yz0AgySL7AF8FMMjtRxIANG8SAfQA7UdvE88W7UdvEc8WIMntVDBwatswALG27yD2XDtRND0BAEyINaAMu1HIm+MI2+MIW+MIO1XXwT4ADD4I7Uf7UcgbxHWHzFVAcjLH87J0G9R7VfI7UdvEgH0AO1HbxPPFu1HbxHPFiDJ7VQwcGrbMIAIBIBgVAQm4iQAnUBYB+u1E0CCBAILXRfJzAPgA7UfIgQEgz0DJ0G+MAfQEWW+M7VcBMHBodaFgf7qVaHihYDHe7UcgbxHWHzBVAQHIzsv/ydBvUe1X+CO1H+1HIG8R1h8xVQHIyx/OydBvUe1X7UcgbxLI9ABYIMcBjhAwcM8LP4IIG3dAzws/cc9BFwAilc8Wcc9B4gFvEc8Wye1UcGoAytxwIddJIMEgjisgwACOHCPQc9ch1wsAIMABltswXwfbMJbbMF8H2zDjBNmW2zBfBtsw4wTZ4CLTHzQgdLsgjhUwIIIQ/////7ogmTAgghD////+ut/fltswXwfbMOAjIfFAAV8H',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "touch",
                    "inputs": [],
                    "outputs": []
                }, {
                    "name": "sayHello",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint32"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECFgEAAuAAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIA0KAQL/CwH+fyHtRNAg10nCAY4U0//TP9MA1wsf+Gp/+GH4Zvhj+GKOG/QFcPhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4IwwAHrzyudMfAfAB+EdukvI83gIBIBMOAgEgEA8A4bqLVfP/hBbo487UTQINdJwgGOFNP/0z/TANcLH/hqf/hh+Gb4Y/hijhv0BXD4anABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbR+AD4I7Uf+Gr4QsjL//hDzws/+EbPCwD4SgHLH8ntVH/4Z4AgFqEhEA6bQAGtb8ILdHC/aiaGn/6Z/pgGuFj/w1P/ww/DN8Mfwxb30gaPwikDdJGDhvfCFdeXAyfABkZP2CEGRnwoRnRoIEB9AAAAAAAAAAAAAAAAAAIGeLZMCAQH2AGHwhZGX//CHnhZ/8I2eFgHwlAOWP5PaqP/wzwADNtGX2i/wgt0cL9qJoaf/pn+mAa4WP/DU//DD8M3wx/DFvaPwlZEXuAAAAAAAAAAAAAAAACGeLZ8DnyaGX2i8Q54WP5Lj9gBhgf8cL/CFkZf/8IeeFn/wjZ4WAfCUA5Y/k9qpvP/wzwAIBIBUUAIm7cxLkX4QW6OF+1E0NP/0z/TANcLH/hqf/hh+Gb4Y/hi3tH4APgjtR/4avhCyMv/+EPPCz/4Rs8LAPhKAcsfye1Uf/hngAct1wItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
        },
    },
    Setcode: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "main",
                    "inputs": [{"name": "newcode", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getVersion",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getNewVersion",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "events": []
            },
            tvc: 'te6ccgECGQEAA4YAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHVIMcBkXCOEiCBAgDXIdcL/yL5AVMh+RDyqOIi0x/TPzUgcHBw7UTQ9AQBNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuY4kJfgjgQPoqCSguY4XyCUB9AAmzws/I88LPyLPFiDJ7VR/MjDe3gVfBZkkIvFAAV8K2zDgCwAMgDTy8F8KAgEgEA0CASAPDgCtuo4Snr1DD4ACD7BDBwyIIQaOEp64IQgAAAALHPCx8hzwv/yHPPCwH4KM8Wcs9A+CXPCz+AIc9AIM81Is8xvJZxz0AhzxeVcc9BIc3iIMlx+wBbcWrbMIAKO7WvgLcw+ABxyIIQVa+At4IQgAAAALHPCx8hzwv/yHPPCwH4KM8Wcs9A+CXPCz+AIc9AIM81Is8xvJZxz0AhzxeVcc9BIc3iIMlx+wBbcWrbMIAgEgFBEBCbrj9t+YEgH+cO1E0PQEATIg1oAy7Ucib4wjb4whb4wg7VdfBHBodaFgf7qVaHihYDHe7UdvEdcL/7ry4GT4APpAMCDIyfsEgQPocIEAgMhxzwsBIs8KAHHPQPgozxYkzxYj+gJxz0Bw+gJw+gKAQM9A+CPPCx9yz0AgySL7AF8FMMjtR28SARMALvQA7UdvE88W7UdvEc8WIMntVDBwatswAgEgGBUCAUgXFgDrtCQAnXaiaBBAgEFrovk5gHwAdqPkQICAZ6Bk6DfGAPoCLLfGdquAmDg0OtCwP91KtDxQsBjvdqOQN4iYAORl/+ToN6j2q/ajkDeJZHoALBBjgMcIGDhnhZ/BBA27oGeFn7jnoMrnizjnoPEAt4jni2T2qjg1QACjtehuPJh8ADlkQQgJ6G48wQhAAAAAWOeFj5Dnhf/kOeeFgPwUZ4s5Z6B8EueFn8AQ56AQZ5qRZ5jeSzjnoBDni8q456CQ5vEQZLj9gC24tW2YQADK3HAh10kgwSCOKyDAAI4cI9Bz1yHXCwAgwAGW2zBfB9swltswXwfbMOME2ZbbMF8G2zDjBNngItMfNCB0uyCOFTAgghD/////uiCZMCCCEP////6639+W2zBfB9sw4CMh8UABXwc=',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "main",
                    "inputs": [{"name": "newcode", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getVersion",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECFQEAAqAAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8BCwAS8AH4R26S8jzeAgEgFA0CASAPDgC9uotV8/+EFujjXtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4t74RvJzcfhm0fgA+ELIy//4Q88LP/hGzwsAye1Uf/hngCASATEAIBIBIRAIu2hnNktH4AHHIi9wAAAAAAAAAAAAAAAAQzxbPgc+TaGc2SiHPC//JcfsAMMD/jhL4QsjL//hDzws/+EbPCwDJ7VTef/hngANe3AA1rfhBbo4T7UTQ0//TP9MA0X/4Yfhm+GP4Yt76QNH4RSBukjBw3vhCuvLgZPgAyMn7BCDIz4UIzo0ECA+gAAAAAAAAAAAAAAAAAEDPFsmBAID7ADD4QsjL//hDzws/+EbPCwDJ7VR/+GeAAlbmUfro6mj8ABB9ghg4ZEXuAAAAAAAAAAAAAAAACGeLZ8DnyZlH66MQ54X/5Lj9gBhgf8cJfCFkZf/8IeeFn/wjZ4WAZPaqbz/8M8ABy3nAi0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
        },
    },
    Setcode2: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "main",
                    "inputs": [{"name": "newcode", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getNewVersion",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "events": []
            },
            tvc: 'te6ccgECFwEAAy0AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHVIMcBkXCOEiCBAgDXIdcL/yL5AVMh+RDyqOIi0x/TPzUgcHBw7UTQ9AQBNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuY4kJfgjgQPoqCSguY4XyCUB9AAmzws/I88LPyLPFiDJ7VR/MjDe3gVfBZkkIvFAAV8K2zDgCwAMgDTy8F8KAgEgDg0Arb1HCU9eoYfAAQfYIYOGRBCDRwlPXBCEAAAABY54WPkOeF/+Q554WA/BRnizlnoHwS54WfwBDnoBBnmpFnmN5LOOegEOeLyrjnoJDm8RBkuP2ALbi1bZhAIBIBIPAQm64/bfmBAB/nDtRND0BAEyINaAMu1HIm+MI2+MIW+MIO1XXwRwaHWhYH+6lWh4oWAx3u1HbxHXC/+68uBk+AD6QDAgyMn7BIED6HCBAIDIcc8LASLPCgBxz0D4KM8WJM8WI/oCcc9AcPoCcPoCgEDPQPgjzwsfcs9AIMki+wBfBTDI7UdvEgERAC70AO1HbxPPFu1HbxHPFiDJ7VQwcGrbMAIBIBYTAgFIFRQA67QkAJ12omgQQIBBa6L5OYB8AHaj5ECAgGegZOg3xgD6Aiy3xnargJg4NDrQsD/dSrQ8ULAY73ajkDeImADkZf/k6Deo9qv2o5A3iWR6ACwQY4DHCBg4Z4WfwQQNu6BnhZ+456DK54s456DxALeI54tk9qo4NUAAo7XobjyYfAA5ZEEICehuPMEIQAAAAFjnhY+Q54X/5DnnhYD8FGeLOWegfBLnhZ/AEOegEGeakWeY3ks456AQ54vKuOegkObxEGS4/YAtuLVtmEAAytxwIddJIMEgjisgwACOHCPQc9ch1wsAIMABltswXwfbMJbbMF8H2zDjBNmW2zBfBtsw4wTZ4CLTHzQgdLsgjhUwIIIQ/////7ogmTAgghD////+ut/fltswXwfbMOAjIfFAAV8H',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "main",
                    "inputs": [{"name": "newcode", "type": "cell"}],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getNewVersion",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECFQEAAqAAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8BCwAS8AH4R26S8jzeAgEgEg0CASAPDgC9uotV8/+EFujjXtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4t74RvJzcfhm0fgA+ELIy//4Q88LP/hGzwsAye1Uf/hngCASAREADXuIAGtb8ILdHCfaiaGn/6Z/pgGi//DD8M3wx/DFvfSBo/CKQN0kYOG98IV15cDJ8AGRk/YIQZGfChGdGggQH0AAAAAAAAAAAAAAAAAAgZ4tkwIBAfYAYfCFkZf/8IeeFn/wjZ4WAZPaqP/wzwAJW5lH66Opo/AAQfYIYOGRF7gAAAAAAAAAAAAAAAAhni2fA58mZR+ujEOeF/+S4/YAYYH/HCXwhZGX//CHnhZ/8I2eFgGT2qm8//DPACAWIUEwCLt2LjNDR+AByyIvcAAAAAAAAAAAAAAAAEM8Wz4HPkjYuM0Ihzwv/yXH7ADDA/44S+ELIy//4Q88LP/hGzwsAye1U3n/4Z4ABy23Ai0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
        },
    },
    Subscription: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{
                    "name": "constructor",
                    "inputs": [{"name": "wallet", "type": "address"}],
                    "outputs": []
                }, {
                    "name": "getWallet",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "getSubscription",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": [{
                        "components": [{"name": "pubkey", "type": "uint256"}, {
                            "name": "to",
                            "type": "address"
                        }, {"name": "value", "type": "uint64"}, {"name": "period", "type": "uint32"}, {
                            "name": "start",
                            "type": "uint32"
                        }, {"name": "status", "type": "uint8"}], "name": "value0", "type": "tuple"
                    }]
                }, {
                    "name": "subscribe",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}, {
                        "name": "pubkey",
                        "type": "uint256"
                    }, {"name": "to", "type": "address"}, {"name": "value", "type": "uint64"}, {
                        "name": "period",
                        "type": "uint32"
                    }],
                    "outputs": []
                }, {
                    "name": "cancel",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "executeSubscription",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": []
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "events": []
            },
            tvc: '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',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "constructor",
                    "inputs": [{"name": "wallet", "type": "address"}],
                    "outputs": []
                }, {
                    "name": "getWallet",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "address"}]
                }, {
                    "name": "getSubscription",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": [{
                        "components": [{"name": "pubkey", "type": "uint256"}, {
                            "name": "to",
                            "type": "address"
                        }, {"name": "value", "type": "uint64"}, {"name": "period", "type": "uint32"}, {
                            "name": "start",
                            "type": "uint32"
                        }, {"name": "status", "type": "uint8"}], "name": "value0", "type": "tuple"
                    }]
                }, {
                    "name": "subscribe",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}, {
                        "name": "pubkey",
                        "type": "uint256"
                    }, {"name": "to", "type": "address"}, {"name": "value", "type": "uint64"}, {
                        "name": "period",
                        "type": "uint32"
                    }],
                    "outputs": []
                }, {
                    "name": "cancel",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "executeSubscription",
                    "inputs": [{"name": "subscriptionId", "type": "uint256"}],
                    "outputs": []
                }, {"name": "sendAllMoney", "inputs": [{"name": "dest_addr", "type": "address"}], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: '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',
        },
    },
    WalletContract: {
        1: {
            abi: {
                "ABI version": 1,
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "sendTransaction",
                    "inputs": [{"name": "dest", "type": "address"}, {
                        "name": "value",
                        "type": "uint128"
                    }, {"name": "bounce", "type": "bool"}],
                    "outputs": []
                }],
                "events": []
            },
            tvc: 'te6ccgECEwEAAmoAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHVIMcBkXCOEiCBAgDXIdcL/yL5AVMh+RDyqOIi0x/TPzUgcHBw7UTQ9AQBNCCBAIDXRZjTPwEz0z8BMpaCCBt3QDLicCMmuY4kJfgjgQPoqCSguY4XyCUB9AAmzws/I88LPyLPFiDJ7VR/MjDe3gVfBZkkIvFAAV8K2zDgCwAMgDTy8F8KAgEgEA0BCbzBpm7MDgH+cO1E0PQEATIg1oAy7Ucib4wjb4whb4wg7VdfBHBodaFgf7qVaHihYDHe7UdvEdcL/7ry4GT4APpA03/SADAhwgAglzAh+CdvELne8uBlIiIicMhxzwsBIs8KAHHPQPgozxYkzxYj+gJxz0Bw+gJw+gKAQM9A+CPPCx9yz0AgyQ8AFiL7AF8FXwNwatswAgFIEhEA67iJACddqJoEECAQWui+TmAfAB2o+RAgIBnoGToN8YA+gIst8Z2q4CYOHajt4lAIHoHeUVrhf/2o5A3iJgA5GX/5Og3qPar9qOQN4lkegAsEGOAxwgYOGeFn8EEDbugZ4WfuOegyueLOOeg8QC3iOeLZPaqODVAAytxwIddJIMEgjisgwACOHCPQc9ch1wsAIMABltswXwfbMJbbMF8H2zDjBNmW2zBfBtsw4wTZ4CLTHzQgdLsgjhUwIIIQ/////7ogmTAgghD////+ut/fltswXwfbMOAjIfFAAV8H',
        },
        2: {
            abi: {
                "ABI version": 2,
                "header": ["time", "expire"],
                "functions": [{
                    "name": "sendTransaction",
                    "inputs": [{"name": "dest", "type": "address"}, {
                        "name": "value",
                        "type": "uint128"
                    }, {"name": "bounce", "type": "bool"}],
                    "outputs": []
                }, {
                    "name": "sendAllMoney",
                    "inputs": [{"name": "dest_addr", "type": "address"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECFAEAAo4AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAf7/fyHtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8BCwAS8AH4R26S8jzeAgEgEA0CASAPDgC9uotV8/+EFujjXtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4t74RvJzcfhm0fgA+ELIy//4Q88LP/hGzwsAye1Uf/hngA17tAA1rfhBbo4T7UTQ0//TP9MA0X/4Yfhm+GP4Yt76QNH4RSBukjBw3vhCuvLgZPgAyMn7BCDIz4UIzo0ECA+gAAAAAAAAAAAAAAAAAEDPFsmBAID7ADD4QsjL//hDzws/+EbPCwDJ7VR/+GeAIBIBMRAQm7Fe+TWBIA/PhBbo4T7UTQ0//TP9MA0X/4Yfhm+GP4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0fhFIG6SMHDe+EK68uBk+AAhwgAglzAh+CdvELne8uBlISPIz4WIzgH6AoBrz0DJcfsAXwPA/44S+ELIy//4Q88LP/hGzwsAye1U3n/4ZwBy3XAi0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
        },
    },
    Sensor: {
        2: {
            abi: {
                "ABI version": 2,
                "header": ["pubkey", "time"],
                "functions": [{
                    "name": "constructor",
                    "inputs": [{"name": "ownerKey", "type": "uint256"}],
                    "outputs": []
                }, {
                    "name": "getData",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint16"}]
                }, {"name": "setData", "inputs": [{"name": "input", "type": "uint16"}], "outputs": []}],
                "data": [],
                "events": []
            },
            tvc: 'te6ccgECEgEAAm0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIDzsAHBgA312omhp/+mf6YBph+uF//w1/DU//DD8M3wx/DFAA398IWRl//wh54Wf/CNnhYB8JXwlgWWH5f/k9qpAIBIAsJAeT/fyHtRNAg10nCAY4Y0//TP9MA0w/XC//4a/hqf/hh+Gb4Y/hijh70BXD4anD4a3ABgED0DvK91wv/+GJw+GNw+GZ/+GHi0wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwEKAHqOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHyHBAyKCEP////28sZLyPOAB8AH4R26S8jzeAgEgDwwCA314Dg0AgbFuIi/wgt0l4Am9o/CUQ4H/HEZHoaYD9IBgY5GfDkGdAMGegZ8DnwOfJ324iLxDnhYfkuP2Abxhgf8l4Ae8//DPAE2xEMqn8ILdJeAJvaYfo/CKQN0kYOG98Jd15cDL8ABB8NRh4Ab/8M8CASAREADhu8keHF+EFujkPtRNAg10nCAY4Y0//TP9MA0w/XC//4a/hqf/hh+Gb4Y/hijh70BXD4anD4a3ABgED0DvK91wv/+GJw+GNw+GZ/+GHi3vhG8nNx+GbXDf+V1NHQ0//f0SDCAPLgZPgAIPhrMPADf/hngAat1wItDWAjHSADDcIccAkOAh1w0fkvI84VMRkOHBAyKCEP////28sZLyPOAB8AH4R26S8jze',
        },
    },
    InitCodeHash: {
        2: {
            abi: {
                "ABI version": 2,
                "version": "2.2",
                "header": ["time"],
                "functions": [{
                    "name": "f",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "getCode",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "cell"}]
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": [],
                "fields": [{"name": "_pubkey", "type": "uint256"}, {
                    "name": "_timestamp",
                    "type": "uint64"
                }, {"name": "_constructorFlag", "type": "bool"}, {"name": "m", "type": "uint256"}]
            },
            tvc: 'te6ccgECFgEAAhsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUVBAQkiu1TIOMDIMD/4wIgwP7jAvILEQcGBQAAAoTtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwMCANK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBAQCAM8IIIQMkqNALrjAiCCEGi1Xz+64wIgghB97rj7uuMCDQsJAnQw+Eby4EzR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAP3uuPuM8WzMlw+wCRMOLjAPIAChQBGPhBiMjPjits1szOyRUCIjD4Qm7jAPhG8nPR+ADbPPIADBQBRO1E0NdJwgGOF3DtRND0BXD4aoBA9A7yvdcL//hicPhj4w0PA4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAskqNAIzxbL/8lw+wCRMOLjAPIADw4UAAj4APgrACbtRNDT/9M/0wAx0//R+Gr4Y/hiAAr4RvLgTAIK9KQg9KETEgAUc29sIDAuNTcuMwEwoAAAAAKbgQDeIPhqgQDeutzY2zz4D/IAFAAk+Er4Q/hCyMv/yz/Pg8v/ye1UAAwg+GHtHtk=',
        },
    },
    InitCodeHashOld: {
        2: {
            abi: {
                "ABI version": 2,
                "version": "2.2",
                "header": ["time"],
                "functions": [{
                    "name": "f111",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint256"}]
                }, {
                    "name": "fix_baga",
                    "inputs": [{"name": "newCode", "type": "cell"}],
                    "outputs": []
                }, {"name": "constructor", "inputs": [], "outputs": []}],
                "data": [],
                "events": [],
                "fields": [{"name": "_pubkey", "type": "uint256"}, {
                    "name": "_timestamp",
                    "type": "uint64"
                }, {"name": "_constructorFlag", "type": "bool"}]
            },
            tvc: 'te6ccgECFQEAAdsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBgUEAAAChO1E0NdJwwH4ZiHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAkHA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EBAHAzwgghAhjPxzuuMCIIIQQPqkWbrjAiCCEGi1Xz+64wIOCggCIjD4Qm7jAPhG8nPR+ADbPPIACRQBPu1E0NdJwgGOFHDtRND0BYBA9A7yvdcL//hicPhj4w0NAygw+Eby4Ez4Qm7jANTR2zww2zzyAA0LFAE4+AAg+wTQIIs4rbNYxwWT103Q3tdM0O0e7VPbPAwABPACAB7tRNDT/9M/0wAx0fhj+GICdjD4RvLgTNHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAoYz8c4zxbL/8lw+wCRMOLjAPIADxQABIBvAAr4RvLgTAIK9KQg9KETEgAUc29sIDAuNTcuMwEWoAAAAALbPPgP8gAUABz4Q/hCyMv/yz/Pg8ntVA==',
        },
    },
    MultiTouch: {
        2: {
            abi: {
                "ABI version": 2,
                "version": "2.3",
                "header": ["time", "expire"],
                "functions": [{"name": "constructor", "inputs": [], "outputs": []}, {
                    "name": "touch",
                    "inputs": [{"name": "seqno", "type": "uint32"}],
                    "outputs": []
                }, {
                    "name": "getTimestamp",
                    "inputs": [],
                    "outputs": [{"name": "value0", "type": "uint32"}]
                }, {"name": "timestamp", "inputs": [], "outputs": [{"name": "timestamp", "type": "uint32"}]}],
                "data": [],
                "events": [],
                "fields": [{"name": "_pubkey", "type": "uint256"}, {
                    "name": "_timestamp",
                    "type": "uint64"
                }, {"name": "_constructorFlag", "type": "bool"}, {"name": "timestamp", "type": "uint32"}]
            },
            tvc: "te6ccgECFAEAAisAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAqbtRNDXScMB+GYh2zzTAAGOF4MI1xgg+CjIzs7J+QBY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAoGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EBAGBFAgghAfpNotuuMCIIIQaBflNbrjAiCCEGi1Xz+64wIgghB5arSGuuMCDAsJBwNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghD5arSGzwuByx/JcPsAkTDi4wDyAA8IDQAE+EoCUDD4Qm7jAPhG8nPR+ELy4GX4RSBukjBw3vhCuvLgZvgA+CP4ats88gAKDQFE7UTQ10nCAY4XcO1E0PQFcPhqgED0DvK91wv/+GJw+GPjDQ8BUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADoF+U1gyM7LH8lw+wDe8gAPAygw+Eby4Ez4Qm7jANMf0ds82zzyAA8ODQAk+Er4Q/hCyMv/yz/Pg8sfye1UADL4RSBukjBw3vhCuvLgZvgAwgDy4GT4I/hqACbtRNDT/9M/0wAx0x/R+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4TEgAUc29sIDAuNjUuMAAA",
        }
    }
}
