const KamikadzeContract = {
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
                "name": "sendAllMoney",
                "inputs": [
                    {
                        "name": "dest_addr",
                        "type": "address"
                    }
                ],
                "outputs": []
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
            }
        ]
    },
    tvc: "te6ccgECEQEAAaoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsOBQQQAqbtRNDXScMB+GYh2zzTAAGOF4MI1xgg+CjIzs7J+QBY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAgGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8DQ0GAiggghBUADWtuuMCIIIQaLVfP7rjAgkHAkgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4ANs88gAICgE+7UTQ10nCAY4UcO1E0PQFgED0DvK91wv/+GJw+GPjDQwDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIADAsKABz4Q/hCyMv/yz/Pg8ntVAA++EUgbpIwcN74Qrry4Gb4AMjPhQjOgG/PQMmBAKD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4QDwAUc29sIDAuNjUuMAAA",
    code: "te6ccgECDgEAAX0ABCSK7VMg4wMgwP/jAiDA/uMC8gsLAgENAqbtRNDXScMB+GYh2zzTAAGOF4MI1xgg+CjIzs7J+QBY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPAUDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8CgoDAiggghBUADWtuuMCIIIQaLVfP7rjAgYEAkgw+EJu4wD4RvJz0fhC8uBl+EUgbpIwcN74Qrry4Gb4ANs88gAFBwE+7UTQ10nCAY4UcO1E0PQFgED0DvK91wv/+GJw+GPjDQkDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzbPPIACQgHABz4Q/hCyMv/yz/Pg8ntVAA++EUgbpIwcN74Qrry4Gb4AMjPhQjOgG/PQMmBAKD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4NDAAUc29sIDAuNjUuMAAA",
    codeHash: "c4f48688f6e1a31066549d29a1d638f637fb227b9a07f57f928e041c0ed2574c",
};
module.exports = KamikadzeContract;