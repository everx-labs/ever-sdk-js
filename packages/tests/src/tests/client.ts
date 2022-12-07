/*
 * Copyright 2018-2021 TON Labs LTD.
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

import { runner } from '../runner';
import { test, expect } from '../jest';
import { contracts } from '../contracts';
import { signerKeys } from '@eversdk/core';

test("Test versions compatibility", async () => {
    const client = runner.getClient().client;
    const version = (await client.version()).version;
    console.log(version);
    expect(version.split('.')[0]).toEqual('1');
});

test("client: Versions in client.get_api_reference() and client.version() should be equal", async () => {
    const client = runner.getClient().client;

    const api_reference_version = (await client.get_api_reference()).api.version;
    const version_version = (await client.version()).version;

    expect(api_reference_version).toEqual(version_version);
});

test("client: build_info", async () => {
    const client = runner.getClient().client;

    const build_info = await client.build_info();

    expect(build_info).not.toBeNull();
});

test("client: walk api reference", async () => {
    const client = runner.getClient().client;

    const apiResult = await client.get_api_reference();
    const api = apiResult.api;
    
    const allTypesArray = api.modules.reduce((accumulator: any, element: any) => accumulator.concat(element.types), []);
    const allTypesDict: { [name: string]: any } = {};
    allTypesArray.forEach((element: any) => allTypesDict[element.name] = element);

    allTypesArray.forEach((typeInfo: any) => {
        walkSubtypes(typeInfo);
    });

    const allFunctionsArray = api.modules.reduce((accumulator: any, element: any) => accumulator.concat(element.functions), []);
    allFunctionsArray.forEach((functionInfo: any) => {
        if (functionInfo.params[0].generic_name != "Arc" ||
            functionInfo.params[2] && (functionInfo.params[2].generic_name != "Arc" && functionInfo.params[2].generic_name != "AppObject") ||
            functionInfo.params[3] ||
            functionInfo.params[1] && functionInfo.params[1].generic_name != "AppObject" && !allTypesDict[functionInfo.params[1].ref_name]) {
                throw Error("The API has changed, need to check helpers suggestions");
            }
    });
    
    function walkSubtypes(typeInfo: any) {
        switch (typeInfo.type) {
            case "Array":
                walkSubtypes(typeInfo.array_item);
                break;
            case "Struct":
                typeInfo.struct_fields.forEach((sf: any) => walkSubtypes(sf));
                break;
            case "Optional":
                walkSubtypes(typeInfo.optional_inner);
                break;
            case "Ref":
                if (typeInfo.ref_name != "Value" &&
                    typeInfo.ref_name != "API" &&
                    typeInfo.ref_name != "AbiParam") {

                    const refType = allTypesDict[typeInfo.ref_name];

                    if (!refType) {
                        throw new Error(`Type ${typeInfo.ref_name} does not exists in API reference.`)
                    }
                    walkSubtypes(allTypesDict[typeInfo.ref_name]);
                }
                break;
            case "EnumOfTypes":
            case "EnumOfConsts":
            case "BigInt":
            case "Boolean":
            case "Number":
            case "String":
                break;
            default:
                console.log("Unknown type: ", typeInfo.type);
        }
    }
});

test("client: Should suggest helper functions if applicable", async () => {
    const {
        abi,
        crypto
    } = runner.getClient();

    const keys = await crypto.generate_random_sign_keys(); 
    const c = await runner.getAccount(contracts.Hello, 2, signerKeys(keys));

    try {
        await abi.encode_message({
            abi: c.abi,
            address: await c.getAddress(),
            signer: keys as any,
            call_set: {
                function_name: "touch"
            },
        });
        expect("This line should not be reached").toHaveLength(0);
    } catch (err: any) {
        expect(err.message.startsWith("Consider using one of the helper methods (signerNone, signerExternal, signerKeys, signerSigningBox) for the \"signer\" parameter"))
            .toBeTruthy();
    }

    try {
        await abi.encode_message({
            abi: contracts.Hello[2].abi as any,
            address: await c.getAddress(),
            signer: signerKeys(keys),
            call_set: {
                function_name: "touch"
            },
        });
        expect("This line should not be reached").toHaveLength(0);
    } catch (err: any) {
        expect(err.message.startsWith("Consider using one of the helper methods (abiContract, abiJson, abiHandle, abiSerialized) for the \"abi\" parameter"))
            .toBeTruthy();
    }
});
