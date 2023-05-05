const GiverV3Contract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getMessages",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "hash",
                                "type": "uint256"
                            },
                            {
                                "name": "expireAt",
                                "type": "uint32"
                            }
                        ],
                        "name": "messages",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "upgrade",
                "inputs": [
                    {
                        "name": "newcode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
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
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "m_messages",
                "type": "map(uint256,uint32)"
            }
        ]
    },
    tvc: "te6ccgECFwEAAwAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBgUEAAAC3O1E0NdJwwH4ZiHbPNMAAY4XgwjXGCD4KMjOzsn5AFj4QiD4ZfkQ8qjeI/hFIG6SMHDe+EK68uBlIfkBItM/0x81MSD4I7zyuSH4SoMH9A5voTHy0Gb4ACH4SiLIyx9Zgwf0Q/hqXwPTHwHbPPI8CQcDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwSEgcEUCCCEBcjDDq64wIgghAXMr/DuuMCIIIQMV75NbrjAiCCEGi1Xz+64wIPDAoIAiIw+EJu4wD4RvJz0fgA2zzyAAkWAUTtRNDXScIBjhdw7UTQ9AVt+GqAQPQO8r3XC//4YnD4Y+MNEQM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzbPPIAEQsWAL5UcSDIz4WAygDPhEDOAfoCgGvPQMlz+wBw+Eoggwf0hpUgWNcLH5NtXyDikyJus44qJMId4wgkpDX4I7uaIPhKgwf0WzD4at5TEoMH9HyVIFjXCx+TbV8g4mwj4xhfCAN0MPhG8uBM+EJu4wDR2zwhjiIj0NMB+kAwMcjPhyDOghCXMr/DzwuBAW8iAssf9ADJcPsAkTDi4wDyABENFgGOcG1vAvhKIIMH9IaVIFjXCx+TbV8g4pMibrOOqFR0EG8C2zwBbyIhpFUggCD0Q28CNVMjgwf0fJUgWNcLH5NtXyDibDPoXwQOABBvIgHIy//LHwMmMPhG8uBM+EJu4wDU0ds82zzyABEQFgFq+EUgbpIwcN74Qrry4GX4ANs8+A8g+wTQIIs4rbNYxwWT103Q3tdM0O0e7VOCECyo3u/tQ9gWAB7tRNDT/9MAMfQE0fhq+GIACvhG8uBMAhD0pCD0vfLAThUUABRzb2wgMC42Ni4wARagLKje79s8+A/yABYAHPhK+ELIy//Pg/QAye1U",
    code: "te6ccgECFAEAAtMABCSK7VMg4wMgwP/jAiDA/uMC8gsQAwIBAAAC3O1E0NdJwwH4ZiHbPNMAAY4XgwjXGCD4KMjOzsn5AFj4QiD4ZfkQ8qjeI/hFIG6SMHDe+EK68uBlIfkBItM/0x81MSD4I7zyuSH4SoMH9A5voTHy0Gb4ACH4SiLIyx9Zgwf0Q/hqXwPTHwHbPPI8BgQDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwPDwQEUCCCEBcjDDq64wIgghAXMr/DuuMCIIIQMV75NbrjAiCCEGi1Xz+64wIMCQcFAiIw+EJu4wD4RvJz0fgA2zzyAAYTAUTtRNDXScIBjhdw7UTQ9AVt+GqAQPQO8r3XC//4YnD4Y+MNDgM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzbPPIADggTAL5UcSDIz4WAygDPhEDOAfoCgGvPQMlz+wBw+Eoggwf0hpUgWNcLH5NtXyDikyJus44qJMId4wgkpDX4I7uaIPhKgwf0WzD4at5TEoMH9HyVIFjXCx+TbV8g4mwj4xhfCAN0MPhG8uBM+EJu4wDR2zwhjiIj0NMB+kAwMcjPhyDOghCXMr/DzwuBAW8iAssf9ADJcPsAkTDi4wDyAA4KEwGOcG1vAvhKIIMH9IaVIFjXCx+TbV8g4pMibrOOqFR0EG8C2zwBbyIhpFUggCD0Q28CNVMjgwf0fJUgWNcLH5NtXyDibDPoXwQLABBvIgHIy//LHwMmMPhG8uBM+EJu4wDU0ds82zzyAA4NEwFq+EUgbpIwcN74Qrry4GX4ANs8+A8g+wTQIIs4rbNYxwWT103Q3tdM0O0e7VOCECyo3u/tQ9gTAB7tRNDT/9MAMfQE0fhq+GIACvhG8uBMAhD0pCD0vfLAThIRABRzb2wgMC42Ni4wARagLKje79s8+A/yABMAHPhK+ELIy//Pg/QAye1U",
    codeHash: "57a1e5e4304f4db2beb23117e4d85df9cb5caec127531350e73219a8b8dc8afd",
};
module.exports = GiverV3Contract;