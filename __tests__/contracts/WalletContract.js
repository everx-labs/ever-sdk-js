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
    imageBase64: 'te6ccgECnAEAF00AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAGQ/vgBc2VsZWN0b3L/AIn0BSHDAY4VgCD+/gFzZWxlY3Rvcl9qbXBfMPSgjhuAIPQN8rSAIP78AXNlbGVjdG9yX2ptcPSh8jPiBwEBwAgCASAOCQHa//79AW1haW5fZXh0ZXJuYWwhjlb+/AFnZXRfc3JjX2FkZHIg0CDTADJwvZhwcFURXwLbMOAgctchMSDTADIhgAudISHXITIh0/8zMTHbMNj+/wFnZXRfc3JjX2FkZHJfZW4hIVUxXwTbMNgxIQoCyo6A2CLHArOUItQxM94kIiKOMf75AXN0b3JlX3NpZ28AIW+MIm+MI2+M7Uchb4wg7Vf+/QFzdG9yZV9zaWdfZW5kXwXYIscBjhP+/AFtc2dfaXNfZW1wdHlfBtsw4CLTHzQj0z81DQsB3o5PcHD++QFwcmV2X3RpbWXtRNAg9AQygQCAciKAQPQOkTGXyHACzwHJ0OIg0z8yNSDTPzI0JHC6lYIA6mA03v79AXByZXZfdGltZV9lbmRfA9j4I/77AXJlcGxheV9wcm90IiS5JCKBA+ioJKC5sAwAhI46+AAjIo4m7UTQIPQEMsgkzws/I88LPyDJ0HIjgED0FjLIIiH0ADEgye1UXwbYJyVVoV8L8UABXwvbMODywHxfCwHs/v4BZ2V0X21zZ19wdWJrZXlwIccCjhj+/wFnZXRfbXNnX3B1YmtleTNwMTFx2zCOQyHVIMcBjhn+/wFnZXRfbXNnX3B1YmtleTNwBF8Ecdsw4CCBAgCdISHXITIh0/8zMTHbMNgzIfkBICIl+RAg8qhfBHDi3HUCAt6bDwEBIBACASA7EQIBICESAgEgHBMCASAZFAIBIBgVAgFIFxYATLOqhSX+/wFzdF9hYmlfbl9jb25zdHLIghAUSAE6zwsfIMnQMdswACKy962aISHXITIh0/8zMTHbMAAxtnb3SmAZe1E0PQFgED0DpPT/9GRcOLbMIAIBWBsaADG0bmqE/32As7K6L7EwtjC3MbL8E7eIbZhAAHm0/fHi9qO3iLeIQDJ2omh6AsAgegdJ6f/oyLhxXXlwMhCQuMEIB92n9HgAkJC4wQglGV8P+ACQAa+B7ZhAAgEgIB0CA4qIHx4Awa1I9M/38AsbQwtzOyr7C5OS+2MrcQwBB6R0kY0ki4cRARX0cKRwiQEV5ZkG4YUpARwBB6LZgZuHNPkbdZzRGRONCSQBB6CxnvcX9/ALG0L7C5OS+2MrcvsrcyEQIvgm2YQAU61hzFdqJoEHoCGWQSZ4WfkeeFn5Bk6DkRwCB6CxlkERD6ABiQZPaqL4NAB3uEbp9h2o7eIt4hAMnaiaHoCwCB6B0np/+jIuHFdeXAyEDg4QQgH3af0eACQODhBCCUZXw/4AJAYmO2YQAgEgMiICASAvIwIBICokAgFqKCUBB7GMhA8mAfztR28RbxCAZO1E0PQFgED0DpPT/9GRcOK6gGXtRND0BYBA9A6T0//RkXDicLX/ve1HbxFvEYBl7UTQ9AWAQPQOk9P/0ZFw4rqwsfLgZCFwvCKCEOzc1QnwAbmw8uBmInC1/73y4GchghBGiZBV8AFwuvLgZSIiInCCEBo/hognAAjwAV8DAeWxX3MX8AH9+gLawtLcvtLc6Mrk3MLYQxyt/fgCzsrovubkxr7CyMjkQaBBpgBk4Xsw4OCqIr4FtmHAQOWuQmJBpgBkQwAXOkJDrkJkQ6f+ZmJjtmGx/f4Czsrovubkxr7CyMjkvsrcQkKqYr4JtmGwSELhKQDwjjH++QFzdG9yZV9zaWdvACFvjCJvjCNvjO1HIW+MIO1X/v0Bc3RvcmVfc2lnX2VuZF8F2CLHAI4dIXC6n4IQXH7iB3AhcFViXwfbMOBwcHFVUl8G2zDgItMfNCJxup+CEBzMZBohIXBVcl8I2zDgIyFwVWJfB9swAgEgLisB8bXq/D3/f4CyMrg2N7yvsbe3OjkwsbpkEJG4Ryf/fACxOrS2Mja5s+Q5Z6AQ54UAOOegfBRni0CCAGeFhRFnhf+R/QE456A4fQE4fQFAIGegfBHnhY//fgCxOrS2Mja5s6+ytzIQZIIvgm2YbBBoEWcZELjnoJkQksAsAfyOM/78AXN0b3JlX2VpdGhlciHPNSHXSXGgvJlwIssAMiAizjKacSLLADIgIs8WMuIhMTHbMNgyghD7qoUl8AEiIY4z/vwBc3RvcmVfZWl0aGVyIc81IddJcaC8mXAiywAyICLOMppxIssAMiAizxYy4iExMdsw2DMiySBw+wAtAARfBwCNtGnVppDrpJARX06REWuAmhASKpivgm2YcBEQ64waEeoakmi2mpBoEBKS0OuMGWQSZ4sQ54sQZOgYkBPrgJkQEirAr4TtmEACA3ogMTAApa+WQQ3Bw/vkBcHJldl90aW1l7UTQIPQEMoEAgHIigED0DpExl8hwAs8BydDiINM/MjUg0z8yNCRwupWCAOpgNN7+/QFwcmV2X3RpbWVfZW5kXwOAC+vKWM2Aau1E0PQFgED0DpPTB9GRcOLbMICASA6MwIBIDc0AgFYNjUAULNhVpH+/AFzZW5kX2V4dF9tc2f4JfgoIiIighBl/+jn8AEgcPsAXwQAtLKILR7+/AFnZXRfc3JjX2FkZHIg0CDTADJwvZhwcFURXwLbMOAgctchMSDTADIhgAudISHXITIh0/8zMTHbMNj+/wFnZXRfc3JjX2FkZHJfZW4hIVUxXwTbMAEJt2cnyeA4AfyCEFab6YfwAYAUyMsHydCAZu1E0PQFgED0Fsj0AMntVIIBUYDIyx/J0IBn7UTQ9AWAQPQWyPQAye1UgB7Iyx/J0IBo7UTQ9AWAQPQWyPQAye1UcMjLB8nQgGrtRND0BYBA9BbI9ADJ7VRwyMs/ydCAbO1E0PQFgED0Fsj0AMk5ADztVO1HbxFvEMjL/8nQgGTtRND0BYBA9BbI9ADJ7VQA8bk3Pnu9qO3iLeIQDJ2omh6AsAgegdJ6f/oyLhxXUAy9qJoegLAIHoHSen/6Mi4cTha/972o7eIt4jAMvaiaHoCwCB6B0np/+jIuHFdWFj5cDIQuF4RQQh2bmqE+ADc2HlwMxE4Wv/e+XAzkREROEEIDR/DRHgAr4HACASB3PAIBIFo9AgEgTj4CASBJPwIBIEhAAgEgRkECAUhFQgIBSERDAF+r7BoDCCEKhKWM3wAciCEH6+waCCEIAAAACxzwsfyCLPCz/NydCCEJ9hVpHwAdswgAMav476gECCELDTq03wATCCEG9y99bwAdswgApa43BDP74AWJ1aWxkbXNnyHLPQCHPCgBxz0D4KM8WgQQAzwsKIs8L/yP6AnHPQHD6AnD6AoBAz0D4I88LH/78AWJ1aWxkbXNnX2VuZCDJBF8E2zCAeazU5Vn/vwBc2VuZF9pbnRfbXNnyCEjcaOOT/74AWJ1aWxkbXNnyHLPQCHPCgBxz0D4KM8WgQQAzwsKIs8L/yP6AnHPQHD6AnD6AoBAz0D4I88LH/78AWJ1aWxkbXNnX2VuZCDJBF8E2zDY0M8WcM8LACAkRwB8jjP+/AFzdG9yZV9laXRoZXIhzzUh10lxoLyZcCLLADIgIs4ymnEiywAyICLPFjLiITEx2zDYMSDJcPsAXwUAi7RhTrVAgIBBCFhp1ab4AMAQQQhYadWm+ACYQQh0/fHi+ADkQQg8YU61QQhAAAAAWOeFj+QRZ4Wf5uToQQhPsKtI+ADtmEACAVhLSgB8slW+I/75AW15X3B1Ymtlee1E0CD0BDJwIYBA9A7y4GQg0/8yIdFtMv79AW15X3B1YmtleV9lbmQgBF8E2zABCLPCBVRMAfztR28RbxCAZO1E0PQFgED0DpPT/9GRcOK68uBkcCOAae1E0PQFgED0a4BA9Gt49A6T0//RkXDicL3y4GchIXIlgGntRND0BYBA9GuAQPRrePQOk9MH0ZFw4oIQD7tP6PABgGntRND0BYBA9GsjAVMQgED0a3ABJcjL/8nQWXhNAKb0FlmAQPRvMIBp7UTQ9AWAQPRvMMj0AMntVIBp7UTQ9AWAQPRrIwFTEIBA9GtwASTIy//J0Fl49BZZgED0bzCAae1E0PQFgED0bzDI9ADJ7VRfAwIBIFdPAgFYVlACASBVUQGPsOXvrdqO3iLeIQDJ2omh6AsAgegdJ6f/oyLhxXXlwMkA09qJoegLAIHo1kICQgMAgei2YGMA09qJoegLAIHo3mGR6AGT2qjhUgFejoDmMIBq7UTQ9AWAQPQOk9MH0ZFw4nGhyMsHydCAau1E0PQFgED0Fsj0AMntVDBTAWIggGrtRND0BYBA9A6T0wfRkXDiubMg3DAggGvtRND0BYBA9GuAIPQOk9M/0ZFw4iK6VADKjlSAa+1E0PQFgED0ayEBgGrtRND0BYBA9A6T0wfRkXDicaGAa+1E0PQFgED0a4Ag9A6T0z/RkXDiyMs/ydBZgCD0FoBr7UTQ9AWAQPRvMMj0AMntVHKRcOIgcrqSMH/g8tBjpHAAUbF+k2P9+gLOyui+5srYzL7CyMjl8FEAFzpCQ65CZEOn/mZiY7ZhsbZhAP6yY44LgECCELDTq03wATCCEBrCzHbwAciCEGxjjguCEIAAAACxzwsfyCIBcCJ49A7y4GLT/zDPC/9xInj0DvLgYtMfMM8LH3IiePQO8uBi0wcwzwsHcyJ49A7y4GLT/zDPC/90Inj0DvLgYtMfMM8LHzHNydCCEJ9hVpHwAdswAgFYWVgAdrOF/eeBAQCCELDTq03wATCCEMI3T7DwAciCEGeF/eeCEIAAAACxzwsfyCLPC//NydCCEJ9hVpHwAdswALKz/+jn/v0BYnVpbGRfZXh0X21zZ8hzzwsBIc8WcM8LASLPCz9wzwsfcM8LACDPNSTXSXGgISG8mXAjywAzJSPOM59xI8sAM8gmzxYgySTMNDDiIskGXwbbMAIBIGJbAgEgX1wCAWpeXQBNsYQzi/38AubK3Mi+0tzovtrmzr5k4EJHBBExLQEEIPqnKs/gAr4FAA2w/cQOYbZhAgFYYWAAQLKb6YftR28RbxDIy//J0IBk7UTQ9AWAQPQWyPQAye1UAD6zvzye/voBc2VuZF9ncmFtc3AhIyWCEH1TlWfwAV8DAgEgaWMCAUhoZAEIsjK+H2UB/oBs7UTQ9AWAQPQOk9M/0ZFw4oBs7UTQ9AWAQPQOk9M/0ZFw4nGgyMs/ydCAbO1E0PQFgED0Fsj0AMntVIBp7UTQ9AWAQPRrIQElJSVwcG0ByMsfydABdAF49BYByMv/ydABcwF49BYByMsHydABcgF49BYByMsfydABcQF49BZmAf4ByMv/ydABcAF49BZZgED0bzCAae1E0PQFgED0bzDI9ADJ7VSAa+1E0PQFgED0a4Bq7UTQ9AWAQPQOk9MH0ZFw4gEiyMs/ydBZgCD0FoBr7UTQ9AWAQPRvMMj0AMntVIBq7UTQ9AWAQPQOk9MH0ZFw4nGgyMsHydCAau1E0PQFZwAggED0Fsj0AMntVCAEXwTbMABqso8VpjCCED5fFWLwAciCEEiPFaaCEIAAAACxzwsfyCKCEBsIJzzwAc3J0IIQn2FWkfAB2zACASBxagIBanBrAQuuJkFVwcJsARKOgOYwIDEx2zBtAeQggGrtRND0BYBA9A6T0wfRkXDiubMg3DAggGvtRND0BYBA9GuAIPQOk9M/0ZFw4iCAae1E0PQFgED0a4BA9Gt0IXj0DpPTH9GRcOJxInj0DpPTH9GRcOKAZ+1E0PQFgED0DpPTH9GRcOKooPgjtR8gIrxuAf6OHCJ0ASLIyx/J0Fl49BYzInMBcMjL/8nQWXj0FjPeInMBUxB49A6T0//RkXDiKaDIy//J0Fl49BYzcyN49A6T0//RkXDicCR49A6T0//RkXDivJV/Nl8EcpFw4iByupIwf+Dy0GOAae1E0PQFgED0ayQBJFmAQPRvMIBp7UTQbwAi9AWAQPRvMMj0AMntVF8EpHAAM658ksoEBAIIQsNOrTfABMIIQGKC78/AB2zCAgEgdnICAVh0cwCjrmH6q/vwBZGVjb2RlX2FycmF5IMcBlyDUMiDQMjDeINMfMiH0BDMggCD0jpIxpJFw4iIhuvLgZP7/AWRlY29kZV9hcnJheV9vayEkVTFfBNswgHzr3ksH/v4BZ2V0X21zZ19wdWJrZXlwIccCjhj+/wFnZXRfbXNnX3B1YmtleTNwMTFx2zCOQyHVIMcBjhn+/wFnZXRfbXNnX3B1YmtleTNwBF8Ecdsw4CCBAgCdISHXITIh0/8zMTHbMNgzIfkBICIl+RAg8qhfBHDi3J1AC7+/wFnZXRfbXNnX3B1YmtleTIgMTHbMABus6/flv78AXN0b3JlX2VpdGhlciHPNSHXSXGgvJlwIssAMiAizjKacSLLADIgIs8WMuIhMTHbMAIBIIh4AgEggnkCAViBegIBIH57AgEgfXwAX7BrGrRhBCHjt7pT4AORBCB+axq1BCEAAAABY54WP5BFnhf/m5OhBCE+wq0j4AO2YQAhsL4qxQDX2omh6AsAgejXtmECASCAfwBbsOMNDQCBBCFhp1ab4AMCAgEEIWGnVpvgAwBBBCFhp1ab4AJhBCDrhAqp4AO2YQBzsCcSIEMAQekdJGNJIuHE4RxAQEVzZkG4YERCSwBB6B0iYy+Q4AWeA5OhxEBNnGxhSOHMYEYIvgm2YQA1tIjz+mQSkWeBkGToGJASkpL6CxoRgy+DbZhAAgFYhIMAMbQXBYB/foCzsrovuTC3Mi+5srKyfBNtmEACAUiHhQH7sSHQpkOhkOBFpj5oRZY+ZEWmAGhiQEWWAGRA43UwRaYCaEWWAmW8RaYAaGJARZYAZEDjdTRFqGhBoEeeLGZhvEWmAGhiQEWWAGRA43XlwMjhkGJJnhf+QZOgSahtoEHoCGRE4EUAgegsY5BoQEnoAGhNpgBwakhNlgBsSON1hgAmmibUOCDQJ88WNzDeJckJXwnbMABpsTEnm/3yAubo3uTKvubSzt4AQt8YRN8YRt8Z2o5C3xhB2q/9+gLm6N7kyr7m0s6+ytzIvgsCASCWiQIBIJOKAgEgjIsAD7RmMg0YbZhAAgEgko0CASCPjgBbsBBOef34Asrcxt7Iyr7C5OTC8kEAQekdJGNJIuHEQEeWPmZCR+gAZkQGvge2YQIBIJGQAC2vCzHYggGntRND0BYBA9GuAQPRrMdswgC3rv4aI/vsBYWNfdHJhbnNmZXLIcs9AIs8KAHHPQPgozxaBBADPCwokzwv/I/oCcc9AcPoCcPoCgEDPQPgjzwsfcs9AIMki+wD+/wFhY190cmFuc2Zlcl9lbmRfBYAcLKgu/PtR28RbxCAZO1E0PQFgED0DpPT/9GRcOK68uBkIMjL/8nQgGXtRND0BYBA9BbI9ADJ7VQwAgEglZQAbbQkAJ049qJoegPItu/AIHoHeWg9uORlgDj2omh6A8i278AgeiHkegBk9qoYQQhKzk+T+ADtmEAAjbSm+0UQ66SQEV9OkRFrgBoQEiqYr4JtmHAREOuMGhHqGpJotpqQaBASktDrjBlkEmeLEOeLEGToGJAT64AZEBIqwK+E7ZhAAgFumJcAuLO7T+gicLzy4GYgcbqOGyFwvCKAaO1E0PQFgED0DpPTH9GRcOK7sPLgaJYhcLry4GjigGrtRND0BYBA9A6T0wfRkXDigGbtRND0BYBA9A6T0wfRkXDiufLgaV8DAgJxmpkAUasBkSIiLXGDQj1DUk0W01INA1JCPXGDbII88WIc8WIMnQJ1VhXwfbMIAFur/lhIEBAIIQsNOrTfABgQCAghCw06tN8AFxghARTfaK8AEwghC9xkIH8AHbMIABsghC8r7mL8AHc8AHbMIA=='

};

export type WalletContractConstructorParams = {
    wallet: string,
};
