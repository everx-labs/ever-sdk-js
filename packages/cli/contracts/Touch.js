const TouchContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "touch",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getTimestamp",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "timestamp",
                "inputs": [],
                "outputs": [
                    {
                        "name": "timestamp",
                        "type": "uint32"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "timestamp",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECFAEAAiQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAqbtRNDXScMB+GYh2zzTAAGOF4MI1xgg+CjIzs7J+QBY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAoGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EBAGBFAgghA3MS5FuuMCIIIQaBflNbrjAiCCEGi1Xz+64wIgghB5arSGuuMCDAsJBwNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghD5arSGzwuByx/JcPsAkTDi4wDyAA8IDQAE+EoCUDD4Qm7jAPhG8nPR+ELy4GX4RSBukjBw3vhCuvLgZvgA+CP4ats88gAKDQFE7UTQ10nCAY4XcO1E0PQFcPhqgED0DvK91wv/+GJw+GPjDQ8BUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADoF+U1gyM7LH8lw+wDe8gAPAyQw+Eby4Ez4Qm7jANHbPNs88gAPDg0AJPhK+EP4QsjL/8s/z4PLH8ntVAAo+EUgbpIwcN74Qrry4Gb4APgj+GoAJu1E0NP/0z/TADHTH9H4avhj+GIACvhG8uBMAhD0pCD0vfLAThMSABRzb2wgMC42NS4wAAA=",
    code: "te6ccgECEQEAAfcABCSK7VMg4wMgwP/jAiDA/uMC8gsOAgEQAqbtRNDXScMB+GYh2zzTAAGOF4MI1xgg+CjIzs7J+QBY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAcDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8DQ0DBFAgghA3MS5FuuMCIIIQaBflNbrjAiCCEGi1Xz+64wIgghB5arSGuuMCCQgGBANoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghD5arSGzwuByx/JcPsAkTDi4wDyAAwFCgAE+EoCUDD4Qm7jAPhG8nPR+ELy4GX4RSBukjBw3vhCuvLgZvgA+CP4ats88gAHCgFE7UTQ10nCAY4XcO1E0PQFcPhqgED0DvK91wv/+GJw+GPjDQwBUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAADoF+U1gyM7LH8lw+wDe8gAMAyQw+Eby4Ez4Qm7jANHbPNs88gAMCwoAJPhK+EP4QsjL/8s/z4PLH8ntVAAo+EUgbpIwcN74Qrry4Gb4APgj+GoAJu1E0NP/0z/TADHTH9H4avhj+GIACvhG8uBMAhD0pCD0vfLAThAPABRzb2wgMC42NS4wAAA=",
    codeHash: "ef5db241bfe02a10f9c8cc0b13fa12a7f2311107a6481a70a613a71b78de74ff",
};
module.exports = TouchContract;