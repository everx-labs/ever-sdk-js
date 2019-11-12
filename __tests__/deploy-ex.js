/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */

// @flow


import type { TONContractGetDeployDataResult, TONContractPackage } from '../types';
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./_/init-tests";

declare function BigInt(a: any): any;

beforeAll(tests.init);
afterAll(tests.done);

test('Deploy data', async () => {
    const { contracts } = tests.client;

    const publicKey = '1111111111111111111111111111111111111111111111111111111111111111';
    const subscriptionAddess = '0x2222222222222222222222222222222222222222222222222222222222222222';

    const resultKey = await contracts.getDeployData({
        publicKeyHex: publicKey,
    });

    //console.log(resultKey);
    expect(resultKey).toEqual(
        {
            imageBase64: null,
            accountId: null,
            dataBase64: 'te6ccgEBAgEAKAABAcABAEPQBERERERERERERERERERERERERERERERERERERERERERg'
        }
    );

    const resultImageKey = await contracts.getDeployData({
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    //console.log(resultImageKey);
    expect(resultImageKey).toEqual(
        {
            imageBase64: 'te6ccgECmQEAFvEAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjAGQ/vgBc2VsZWN0b3L/AIn0BSHDAY4VgCD+/gFzZWxlY3Rvcl9qbXBfMPSgjhuAIPQN8rSAIP78AXNlbGVjdG9yX2ptcPSh8jPiBwEBwAgCASAOCQHG//79AW1haW5fZXh0ZXJuYWwhjkz+/AFnZXRfc3JjX2FkZHIg0CDTADJwvZhwcFURXwLbMOAgctchMSDTADIhgAvXIdcL//7/AWdldF9zcmNfYWRkcl9lbiEhVTFfBNsw2DEhCgH4jnX+/gFnZXRfbXNnX3B1YmtleSDHAo4W/v8BZ2V0X21zZ19wdWJrZXkxcDHbMODVIMcBjhf+/wFnZXRfbXNnX3B1YmtleTJwMTHbMOAggQIA1yHXC/8i+QEiIvkQ8qj+/wFnZXRfbXNnX3B1YmtleTMgA18D2zDYIscCswsBvJQi1DEz3iQiIo4x/vkBc3RvcmVfc2lnbwAhb4wib4wjb4ztRyFvjCDtV/79AXN0b3JlX3NpZ19lbmRfBdgixwGOE/78AW1zZ19pc19lbXB0eV8G2zDgItMfNCPTPzUMAd6OT3Bw/vkBcHJldl90aW1l7UTQIPQEMoEAgHIigED0DpExl8hwAs8BydDiINM/MjUg0z8yNCRwupWCAOpgNN7+/QFwcmV2X3RpbWVfZW5kXwPY+CP++wFyZXBsYXlfcHJvdCIkuSQigQPoqCSgubANAISOOvgAIyKOJu1E0CD0BDLIJM8LPyPPCz8gydByI4BA9BYyyCIh9AAxIMntVF8G2CclVaFfC/FAAV8L2zDg8sB8XwsCAt6YDwEBIBACASA5EQIBIB8SAgEgGhMCASAXFAIBIBYVAE226qFJf7/AXN0X2FiaV9uX2NvbnN0csiCEBRIATrPCx8gydAx2zCAAMbZ290pgGXtRND0BYBA9A6T0//RkXDi2zCACAVgZGAAxtG5qhP99gLOyui+xMLYwtzGy/BO3iG2YQAB5tP3x4vajt4i3iEAydqJoegLAIHoHSen/6Mi4cV15cDIQkLjBCAfdp/R4AJCQuMEIJRlfD/gAkAGvge2YQAIBIB4bAgOKiB0cAMGtSPTP9/ALG0MLczsq+wuTkvtjK3EMAQekdJGNJIuHEQEV9HCkcIkBFeWZBuGFKQEcAQei2YGbhzT5G3Wc0RkTjQkkAQegsZ73F/fwCxtC+wuTkvtjK3L7K3MhECL4JtmEAFOtYcxXaiaBB6AhlkEmeFn5HnhZ+QZOg5EcAgegsZZBEQ+gAYkGT2qi+DQAd7hG6fYdqO3iLeIQDJ2omh6AsAgegdJ6f/oyLhxXXlwMhA4OEEIB92n9HgAkDg4QQglGV8P+ACQGJjtmEAIBIDAgAgEgLSECASAoIgIBaiYjAQexjIQPJAH87UdvEW8QgGTtRND0BYBA9A6T0//RkXDiuoBl7UTQ9AWAQPQOk9P/0ZFw4nC1/73tR28RbxGAZe1E0PQFgED0DpPT/9GRcOK6sLHy4GQhcLwighDs3NUJ8AG5sPLgZiJwtf+98uBnIYIQRomQVfABcLry4GUiIiJwghAaP4aIJQAI8AFfAwHRsV9zF/AB/foC2sLS3L7S3OjK5NzC2EMcmf34As7K6L7m5Ma+wsjI5EGgQaYAZOF7MODgqiK+BbZhwEDlrkJiQaYAZEMAF65Drhf//f4Czsrovubkxr7CyMjkvsrcQkKqYr4JtmGwSELhJwDwjjH++QFzdG9yZV9zaWdvACFvjCJvjCNvjO1HIW+MIO1X/v0Bc3RvcmVfc2lnX2VuZF8F2CLHAI4dIXC6n4IQXH7iB3AhcFViXwfbMOBwcHFVUl8G2zDgItMfNCJxup+CEBzMZBohIXBVcl8I2zDgIyFwVWJfB9swAgEgLCkB8bXq/D3/f4CyMrg2N7yvsbe3OjkwsbpkEJG4Ryf/fACxOrS2Mja5s+Q5Z6AQ54UAOOegfBRni0CCAGeFhRFnhf+R/QE456A4fQE4fQFAIGegfBHnhY//fgCxOrS2Mja5s6+ytzIQZIIvgm2YbBBoEWcZELjnoJkQksAqAfyOM/78AXN0b3JlX2VpdGhlciHPNSHXSXGgvJlwIssAMiAizjKacSLLADIgIs8WMuIhMTHbMNgyghD7qoUl8AEiIY4z/vwBc3RvcmVfZWl0aGVyIc81IddJcaC8mXAiywAyICLOMppxIssAMiAizxYy4iExMdsw2DMiySBw+wArAARfBwCNtGnVppDrpJARX06REWuAmhASKpivgm2YcBEQ64waEeoakmi2mpBoEBKS0OuMGWQSZ4sQ54sQZOgYkBPrgJkQEirAr4TtmEACA3ogLy4Apa+WQQ3Bw/vkBcHJldl90aW1l7UTQIPQEMoEAgHIigED0DpExl8hwAs8BydDiINM/MjUg0z8yNCRwupWCAOpgNN7+/QFwcmV2X3RpbWVfZW5kXwOAC+vKWM2Aau1E0PQFgED0DpPTB9GRcOLbMICASA4MQIBIDUyAgFYNDMAULNhVpH+/AFzZW5kX2V4dF9tc2f4JfgoIiIighBl/+jn8AEgcPsAXwQAoLKILR7+/AFnZXRfc3JjX2FkZHIg0CDTADJwvZhwcFURXwLbMOAgctchMSDTADIhgAvXIdcL//7/AWdldF9zcmNfYWRkcl9lbiEhVTFfBNswAQm3ZyfJ4DYB/IIQVpvph/ABgBTIywfJ0IBm7UTQ9AWAQPQWyPQAye1UggFRgMjLH8nQgGftRND0BYBA9BbI9ADJ7VSAHsjLH8nQgGjtRND0BYBA9BbI9ADJ7VRwyMsHydCAau1E0PQFgED0Fsj0AMntVHDIyz/J0IBs7UTQ9AWAQPQWyPQAyTcAPO1U7UdvEW8QyMv/ydCAZO1E0PQFgED0Fsj0AMntVADxuTc+e72o7eIt4hAMnaiaHoCwCB6B0np/+jIuHFdQDL2omh6AsAgegdJ6f/oyLhxOFr/3vajt4i3iMAy9qJoegLAIHoHSen/6Mi4cV1YWPlwMhC4XhFBCHZuaoT4ANzYeXAzETha/975cDORERE4QQgNH8NEeACvgcAIBIHQ6AgEgWDsCASBMPAIBIEc9AgEgRj4CASBEPwIBSENAAgFIQkEAX6vsGgMIIQqEpYzfAByIIQfr7BoIIQgAAAALHPCx/IIs8LP83J0IIQn2FWkfAB2zCAAxq/jvqAQIIQsNOrTfABMIIQb3L31vAB2zCAClrjcEM/vgBYnVpbGRtc2fIcs9AIc8KAHHPQPgozxaBBADPCwoizwv/I/oCcc9AcPoCcPoCgEDPQPgjzwsf/vwBYnVpbGRtc2dfZW5kIMkEXwTbMIB5rNTlWf+/AFzZW5kX2ludF9tc2fIISNxo45P/vgBYnVpbGRtc2fIcs9AIc8KAHHPQPgozxaBBADPCwoizwv/I/oCcc9AcPoCcPoCgEDPQPgjzwsf/vwBYnVpbGRtc2dfZW5kIMkEXwTbMNjQzxZwzwsAICRFAHyOM/78AXN0b3JlX2VpdGhlciHPNSHXSXGgvJlwIssAMiAizjKacSLLADIgIs8WMuIhMTHbMNgxIMlw+wBfBQCLtGFOtUCAgEEIWGnVpvgAwBBBCFhp1ab4AJhBCHT98eL4AORBCDxhTrVBCEAAAABY54WP5BFnhZ/m5OhBCE+wq0j4AO2YQAIBWElIAHyyVb4j/vkBbXlfcHVia2V57UTQIPQEMnAhgED0DvLgZCDT/zIh0W0y/v0BbXlfcHVia2V5X2VuZCAEXwTbMAEIs8IFVEoB/O1HbxFvEIBk7UTQ9AWAQPQOk9P/0ZFw4rry4GRwI4Bp7UTQ9AWAQPRrgED0a3j0DpPT/9GRcOJwvfLgZyEhciWAae1E0PQFgED0a4BA9Gt49A6T0wfRkXDighAPu0/o8AGAae1E0PQFgED0ayMBUxCAQPRrcAElyMv/ydBZeEsApvQWWYBA9G8wgGntRND0BYBA9G8wyPQAye1UgGntRND0BYBA9GsjAVMQgED0a3ABJMjL/8nQWXj0FlmAQPRvMIBp7UTQ9AWAQPRvMMj0AMntVF8DAgEgVU0CAVhUTgIBIFNPAY+w5e+t2o7eIt4hAMnaiaHoCwCB6B0np/+jIuHFdeXAyQDT2omh6AsAgejWQgJCAwCB6LZgYwDT2omh6AsAgejeYZHoAZPaqOFQAV6OgOYwgGrtRND0BYBA9A6T0wfRkXDicaHIywfJ0IBq7UTQ9AWAQPQWyPQAye1UMFEBYiCAau1E0PQFgED0DpPTB9GRcOK5syDcMCCAa+1E0PQFgED0a4Ag9A6T0z/RkXDiIrpSAMqOVIBr7UTQ9AWAQPRrIQGAau1E0PQFgED0DpPTB9GRcOJxoYBr7UTQ9AWAQPRrgCD0DpPTP9GRcOLIyz/J0FmAIPQWgGvtRND0BYBA9G8wyPQAye1UcpFw4iByupIwf+Dy0GOkcAA9sX6TY/36As7K6L7mytjMvsLIyOXwUQAXrkOuF/+2YQD+smOOC4BAghCw06tN8AEwghAawsx28AHIghBsY44LghCAAAAAsc8LH8giAXAiePQO8uBi0/8wzwv/cSJ49A7y4GLTHzDPCx9yInj0DvLgYtMHMM8LB3MiePQO8uBi0/8wzwv/dCJ49A7y4GLTHzDPCx8xzcnQghCfYVaR8AHbMAIBWFdWAHazhf3ngQEAghCw06tN8AEwghDCN0+w8AHIghBnhf3nghCAAAAAsc8LH8gizwv/zcnQghCfYVaR8AHbMACys//o5/79AWJ1aWxkX2V4dF9tc2fIc88LASHPFnDPCwEizws/cM8LH3DPCwAgzzUk10lxoCEhvJlwI8sAMyUjzjOfcSPLADPIJs8WIMkkzDQw4iLJBl8G2zACASBgWQIBIF1aAgFqXFsATbGEM4v9/ALmytzIvtLc6L7a5s6+ZOBCRwQRMS0BBCD6pyrP4AK+BQANsP3EDmG2YQIBWF9eAECym+mH7UdvEW8QyMv/ydCAZO1E0PQFgED0Fsj0AMntVAA+s788nv76AXNlbmRfZ3JhbXNwISMlghB9U5Vn8AFfAwIBIGdhAgFIZmIBCLIyvh9jAf6AbO1E0PQFgED0DpPTP9GRcOKAbO1E0PQFgED0DpPTP9GRcOJxoMjLP8nQgGztRND0BYBA9BbI9ADJ7VSAae1E0PQFgED0ayEBJSUlcHBtAcjLH8nQAXQBePQWAcjL/8nQAXMBePQWAcjLB8nQAXIBePQWAcjLH8nQAXEBePQWZAH+AcjL/8nQAXABePQWWYBA9G8wgGntRND0BYBA9G8wyPQAye1UgGvtRND0BYBA9GuAau1E0PQFgED0DpPTB9GRcOIBIsjLP8nQWYAg9BaAa+1E0PQFgED0bzDI9ADJ7VSAau1E0PQFgED0DpPTB9GRcOJxoMjLB8nQgGrtRND0BWUAIIBA9BbI9ADJ7VQgBF8E2zAAarKPFaYwghA+XxVi8AHIghBIjxWmghCAAAAAsc8LH8gighAbCCc88AHNydCCEJ9hVpHwAdswAgEgb2gCAWpuaQELriZBVcHCagESjoDmMCAxMdswawHkIIBq7UTQ9AWAQPQOk9MH0ZFw4rmzINwwIIBr7UTQ9AWAQPRrgCD0DpPTP9GRcOIggGntRND0BYBA9GuAQPRrdCF49A6T0x/RkXDicSJ49A6T0x/RkXDigGftRND0BYBA9A6T0x/RkXDiqKD4I7UfICK8bAH+jhwidAEiyMsfydBZePQWMyJzAXDIy//J0Fl49BYz3iJzAVMQePQOk9P/0ZFw4imgyMv/ydBZePQWM3MjePQOk9P/0ZFw4nAkePQOk9P/0ZFw4ryVfzZfBHKRcOIgcrqSMH/g8tBjgGntRND0BYBA9GskASRZgED0bzCAae1E0G0AIvQFgED0bzDI9ADJ7VRfBKRwADOufJLKBAQCCELDTq03wATCCEBigu/PwAdswgIBIHNwAgFYcnEAo65h+qv78AWRlY29kZV9hcnJheSDHAZcg1DIg0DIw3iDTHzIh9AQzIIAg9I6SMaSRcOIiIbry4GT+/wFkZWNvZGVfYXJyYXlfb2shJFUxXwTbMIA8a95LB/7+AWdldF9tc2dfcHVia2V5IMcCjhb+/wFnZXRfbXNnX3B1YmtleTFwMdsw4NUgxwGOF/7/AWdldF9tc2dfcHVia2V5MnAxMdsw4CCBAgDXIdcL/yL5ASIi+RDyqP7/AWdldF9tc2dfcHVia2V5MyADXwPbMIAbrOv35b+/AFzdG9yZV9laXRoZXIhzzUh10lxoLyZcCLLADIgIs4ymnEiywAyICLPFjLiITEx2zACASCFdQIBIH92AgFYfncCASB7eAIBIHp5AF+waxq0YQQh47e6U+ADkQQgfmsatQQhAAAAAWOeFj+QRZ4X/5uToQQhPsKtI+ADtmEAIbC+KsUA19qJoegLAIHo17ZhAgEgfXwAW7DjDQ0AgQQhYadWm+ADAgIBBCFhp1ab4AMAQQQhYadWm+ACYQQg64QKqeADtmEAc7AnEiBDAEHpHSRjSSLhxOEcQEBFc2ZBuGBEQksAQegdImMvkOAFngOTocRATZxsYUjhzGBGCL4JtmEANbSI8/pkEpFngZBk6BiQEpKS+gsaEYMvg22YQAIBWIGAADG0FwWAf36As7K6L7kwtzIvubKysnwTbZhAAgFIhIIB+7Eh0KZDoZDgRaY+aEWWPmRFpgBoYkBFlgBkQON1MEWmAmhFlgJlvEWmAGhiQEWWAGRA43U0RahoQaBHnixmYbxFpgBoYkBFlgBkQON15cDI4ZBiSZ4X/kGToEmobaBB6AhkROBFAIHoLGOQaEBJ6ABoTaYAcGpITZYAbEjjdYMAJpom1Dgg0CfPFjcw3iXJCV8J2zAAabExJ5v98gLm6N7kyr7m0s7eAELfGETfGEbfGdqOQt8YQdqv/foC5uje5Mq+5tLOvsrcyL4LAgEgk4YCASCQhwIBIImIAA+0ZjINGG2YQAIBII+KAgEgjIsAW7AQTnn9+ALK3MbeyMq+wuTkwvJBAEHpHSRjSSLhxEBHlj5mQkfoAGZEBr4HtmECASCOjQAtrwsx2IIBp7UTQ9AWAQPRrgED0azHbMIAt67+GiP77AWFjX3RyYW5zZmVyyHLPQCLPCgBxz0D4KM8WgQQAzwsKJM8L/yP6AnHPQHD6AnD6AoBAz0D4I88LH3LPQCDJIvsA/v8BYWNfdHJhbnNmZXJfZW5kXwWAHCyoLvz7UdvEW8QgGTtRND0BYBA9A6T0//RkXDiuvLgZCDIy//J0IBl7UTQ9AWAQPQWyPQAye1UMAIBIJKRAG20JACdOPaiaHoDyLbvwCB6B3loPbjkZYA49qJoegPItu/AIHoh5HoAZPaqGEEISs5Pk/gA7ZhAAI20pvtFEOukkBFfTpERa4AaEBIqmK+CbZhwERDrjBoR6hqSaLaakGgQEpLQ64wZZBJnixDnixBk6BiQE+uAGRASKsCvhO2YQAIBbpWUALizu0/oInC88uBmIHG6jhshcLwigGjtRND0BYBA9A6T0x/RkXDiu7Dy4GiWIXC68uBo4oBq7UTQ9AWAQPQOk9MH0ZFw4oBm7UTQ9AWAQPQOk9MH0ZFw4rny4GlfAwICcZeWAFGrAZEiIi1xg0I9Q1JNFtNSDQNSQj1xg2yCPPFiHPFiDJ0CdVYV8H2zCABbq/5YSBAQCCELDTq03wAYEAgIIQsNOrTfABcYIQEU32ivABMIIQvcZCB/AB2zCAAbIIQvK+5i/AB3PAB2zCA=',
            accountId: '44d91053a81883c6d9a00ce1a25f159d7f66d25f9f073fb670861d23638cfbbb',
            dataBase64: 'te6ccgEBBQEANQABAcABAgPPIAQCAQHeAwAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjA=='
        }
    );

    const resultInitKey = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: { subscription: subscriptionAddess },
        publicKeyHex: publicKey,
    });

    //console.log(resultInitKey);
    expect(resultInitKey).toEqual(
        {
            imageBase64: null,
            accountId: null,
            dataBase64: 'te6ccgEBBAEAUQABAcABAgPOYAMCAEO0pERERERERERERERERERERERERERERERERERERERERERQAEHYREREREREREREREREREREREREREREREREREREREREREY='
        }
    );

    const resultAll = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: { subscription: subscriptionAddess },
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    //console.log(resultAll);
    expect(resultAll).toEqual(
        {
            imageBase64: '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',
            accountId: "a2e6d4234c2df26c9a760bc9208277e1f9ed52317a6036ec1360d3e6cb84ea0d",
            dataBase64: 'te6ccgEBBwEAXgABAcABAgPOYAMCAEO0pERERERERERERERERERERERERERERERERERERERERERQAgFiBgQBAd4FAAPQIABB2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiM'
        }
    );
});

const deployer_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "setContract",
                "inputs": [
                    { "name": "_contract", "type": "cell" }
                ],
                "outputs": []
            },
            {
                "name": "deploy",
                "inputs": [
                    { "name": "pubkey", "type": "uint256" },
                    { "name": "gram", "type": "uint128" },
                    { "name": "constuctor_id", "type": "uint256" },
                    { "name": "constuctor_param0", "type": "uint32" },
                    { "name": "constuctor_param1", "type": "uint256" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "setCode",
                "inputs": [
                    { "name": "_code", "type": "cell" }
                ],
                "outputs": []
            },
            {
                "name": "deploy2",
                "inputs": [
                    { "name": "data", "type": "cell" },
                    { "name": "gram", "type": "uint128" },
                    { "name": "constuctor_id", "type": "uint256" },
                    { "name": "constuctor_param0", "type": "uint32" },
                    { "name": "constuctor_param1", "type": "uint256" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "deploy3",
                "inputs": [
                    { "name": "contr", "type": "cell" },
                    { "name": "addr", "type": "uint256" },
                    { "name": "grams", "type": "uint128" },
                    { "name": "payload", "type": "cell" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "events": [],
        "data": []
    }
    ,
    imageBase64: "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"
};

const deployee_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    { "name": "_param1", "type": "uint32" },
                    { "name": "_param2", "type": "uint256" }
                ],
                "outputs": []
            },
            {
                "name": "get",
                "inputs": [],
                "outputs": [
                    { "name": "value0", "type": "uint32" },
                    { "name": "value1", "type": "uint256" }
                ]
            }
        ],
        "events": [],
        "data": [
            { "key": 100, "name": "param1", "type": "uint32" },
            { "key": 101, "name": "param2", "type": "uint256" }
        ]
    },
    imageBase64: "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"
};

const addr = (s: string): string  => {
    let a = s.startsWith('0x') || s.startsWith('0X') ? s.substr(2) : s;
    a = `${'0'.repeat(64 - a.length)}${a}`;
    return a.includes(':') ? a : `0:${a}`;
};

test('Deploy from contract 1', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setContract',
        abi: deployer_package.abi,
        input: {
            _contract: deployee_package.imageBase64,
        },
        keyPair: keys,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: deployee_package.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy',
        abi: deployer_package.abi,
        input: {
            pubkey: `0x${keys.public}`,
            gram: 300000000,
            constuctor_id: constuctor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    await queries.accounts.waitFor({
        id: { eq: address },
        balance: { gt: "0" }
    }, 'id balance');

    const result = await contracts.run({
        address: address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});

test('Deploy from contract 2', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: deployee_package.imageBase64
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setCode',
        abi: deployer_package.abi,
        input: {
            _code: code.codeBase64,
        },
        keyPair: keys,
    });

    const deployData = await contracts.getDeployData({
        abi: deployee_package.abi,
        initParams: {
            param1: 1,
            param2: 2
        },
        publicKeyHex: keys.public,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: deployee_package.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy2',
        abi: deployer_package.abi,
        input: {
            data: deployData.dataBase64,
            gram: 300000000,
            constuctor_id: constuctor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: "0" }
        },
        'id balance'
    );

    const result = await contracts.run({
        address: address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});

test('Deploy from contract 3', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    const deployData: TONContractGetDeployDataResult = await contracts.getDeployData({
        abi: deployee_package.abi,
        imageBase64: deployee_package.imageBase64,
        publicKeyHex: keys.public,
    });

    const runBody = await contracts.createRunBody({
        abi: deployee_package.abi,
        function: "constructor",
        params: {
            _param1: 1,
            _param2: 2
        },
        internal: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy3',
        abi: deployer_package.abi,
        input: {
            contr: deployData.imageBase64,
            addr: `0x${deployData.accountId || ''}`,
            grams: 300000000,
            payload: runBody.bodyBase64,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    expect(BigInt(addressResult.output.value0)).toEqual(BigInt(`0x${deployData.accountId || ''}`));

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: "0" }
        },
        'id balance'
    );

    const result = await contracts.run({
        address: deployData.accountId || '',
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});
