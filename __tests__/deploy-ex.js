/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow


import type { TONContractGetDeployDataResult } from '../types';
import { ABIVersions, tests } from './_/init-tests';

const loadPackage = {
    deployer: tests.packageLoader('Deployer'),
    deployee: tests.packageLoader('Deployee'),
    checkInitParams: tests.packageLoader('CheckInitParams'),
};


beforeAll(tests.init);
afterAll(tests.done);

test('Deploy data Abi2', async () => {
    const { contracts } = tests.client;
    const checkInitParamsPackage = await loadPackage.checkInitParams(2);
    checkInitParamsPackage.imageBase64 = 'te6ccgECJQEABTsAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAVj/fyHtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YgsBpo6A4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8B8AH4R26S8jzeGAIBIB0NAgEgGg4CASAUDwIBSBIQAQm15nxTwBEB/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EvIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PfM+KeIc8L/8lx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAQm16T4WwBMB/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+ErIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PPSfC2Ic8WyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTefyMBD7kWq+f/CC3QFQG2joDe+Ebyc3H4ZtH4AHBwdMjLAiLPCgchzwv/IMnQA18D+G74SvhOxwWU+E74at74QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVH/4ZxYBUu1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiFwEGjoDiGAH+9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC/+RcOL4a3MhgED0DpPXCgCRcOL4bHQhgED0D5LIyd/4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBkAMPhucAGAQPQO8r3XC//4YnD4Y3D4Zn/4YQEJu0ADWtgbAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe+kDR+EUgbpIwcN74Qrry4GT4AMjJ+wQgyM+FCM6NA8gPoAAAAAAAAAAAAAAAAAHPFs+Bz4HJgQCA+wAw+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E0cACT4Sl5AzxHL/8oAzM7J7VR/+GcCAUggHgEJueJmAPAfAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhNyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SfEzAHiHPFMlx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAgJwJCEBB7HGyBciAf74QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhMyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SB42QLiHPCgDJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/IwAE+GcActhwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==';
    const publicKey = '1111111111111111111111111111111111111111111111111111111111111111';

    const resultKey = await contracts.getDeployData({
        publicKeyHex: publicKey,
    });

    console.log(resultKey);
    expect(resultKey)
        .toEqual(
            {
                imageBase64: null,
                accountId: null,
                address: null,
                dataBase64: 'te6ccgEBAgEAKAABAcABAEPQBERERERERERERERERERERERERERERERERERERERERERg',
            },
        );

    const resultImageKey = await contracts.getDeployData({
        imageBase64: checkInitParamsPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    console.log(resultImageKey);
    expect(resultImageKey)
        .toEqual(
            {
                imageBase64: 'te6ccgECJQEABTsAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAVj/fyHtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YgsBpo6A4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8B8AH4R26S8jzeGAIBIB0NAgEgGg4CASAUDwIBSBIQAQm15nxTwBEB/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EvIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PfM+KeIc8L/8lx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAQm16T4WwBMB/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+ErIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5PPSfC2Ic8WyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTefyMBD7kWq+f/CC3QFQG2joDe+Ebyc3H4ZtH4AHBwdMjLAiLPCgchzwv/IMnQA18D+G74SvhOxwWU+E74at74QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVH/4ZxYBUu1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiFwEGjoDiGAH+9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC/+RcOL4a3MhgED0DpPXCgCRcOL4bHQhgED0D5LIyd/4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBkAMPhucAGAQPQO8r3XC//4YnD4Y3D4Zn/4YQEJu0ADWtgbAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe+kDR+EUgbpIwcN74Qrry4GT4AMjJ+wQgyM+FCM6NA8gPoAAAAAAAAAAAAAAAAAHPFs+Bz4HJgQCA+wAw+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E0cACT4Sl5AzxHL/8oAzM7J7VR/+GcCAUggHgEJueJmAPAfAfz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhNyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SfEzAHiHPFMlx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8jAgJwJCEBB7HGyBciAf74QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhMyIvcAAAAAAAAAAAAAAAAIM8Wz4HPgc+SB42QLiHPCgDJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/IwAE+GcActhwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
                accountId: 'd403d21f8099fca57544e6aca59fa94e2109fb6f2a654e1a48c27d7244a05e7d',
                address: '0:d403d21f8099fca57544e6aca59fa94e2109fb6f2a654e1a48c27d7244a05e7d',
                dataBase64: 'te6ccgEBBQEANQABAcABAgPPIAQCAQHeAwAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjA==',
            },
        );
    const initParams = {
        addressVariable: '0:fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321',
        uintVariable: '0x0',
        booleanVariable: true,
        bytesVariable: '',
    };

    const resultInitKey = await contracts.getDeployData({
        abi: checkInitParamsPackage.abi,
        initParams,
        publicKeyHex: publicKey,
    });

    console.log(resultInitKey);
    expect(resultInitKey)
        .toEqual(
            {
                imageBase64: null,
                accountId: null,
                address: null,
                dataBase64: 'te6ccgEBCwEAjAABAcABAgPPYAQCAQHUAwAAAgEgCAUCASAHBgABMABBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgEgCgkAQyAH9uXQTDsqGQ/25dBMOyoZD/bl0Ew7KhkP9uXQTDsqGQwAQQREREREREREREREREREREREREREREREREREREREREREYA==',
            },
        );

    const resultAll = await contracts.getDeployData({
        abi: checkInitParamsPackage.abi,
        initParams,
        imageBase64: checkInitParamsPackage.imageBase64,
        publicKeyHex: publicKey,
        workchainId: -1,
    });


    expect(resultAll)
        .toEqual(
            {
                accountId: '47a707d14f940d8a17ddade8e93c42e7659a7e0604af20f085b4b91a9e248ccd',
                address: '-1:47a707d14f940d8a17ddade8e93c42e7659a7e0604af20f085b4b91a9e248ccd',
                dataBase64: 'te6ccgEBDgEAmQABAcABAgPPIAQCAQHeAwAD0CACASAHBQEB1AYAAAIBIAsIAgEgCgkAATAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAIBIA0MAEMgB/bl0Ew7KhkP9uXQTDsqGQ/25dBMOyoZD/bl0Ew7KhkMAEEERERERERERERERERERERERERERERERERERERERERERGA=',
                imageBase64: 'te6ccgECLQEABZ0AAgE0DgEBAcACAgPPIAUDAQHeBAAD0CACASAHBgEB1BACASALCAIBIAoJAAEwAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACASANDABDIAf25dBMOyoZD/bl0Ew7KhkP9uXQTDsqGQ/25dBMOyoZDABBBERERERERERERERERERERERERERERERERERERERERERgAib/APSkICLAAZL0oOGK7VNYMPShEQ8BCvSkIPShEAAAAgEgFBIBWP9/Ie1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiEwGmjoDi0wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHwHwAfhHbpLyPN4gAgEgJRUCASAiFgIBIBwXAgFIGhgBCbXmfFPAGQH++EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3tH4S8iL3AAAAAAAAAAAAAAAACDPFs+Bz4HPk98z4p4hzwv/yXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTefysBCbXpPhbAGwH8+EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3tH4SsiL3AAAAAAAAAAAAAAAACDPFs+Bz4HPk89J8LYhzxbJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/KwEPuRar5/8ILdAdAbaOgN74RvJzcfhm0fgAcHB0yMsCIs8KByHPC/8gydADXwP4bvhK+E7HBZT4Tvhq3vhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1Uf/hnHgFS7UTQINdJwgGOH9P/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GIfAQaOgOIgAf70BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOk9cL/5Fw4vhrcyGAQPQOk9cKAJFw4vhsdCGAQPQPksjJ3/htjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIQAw+G5wAYBA9A7yvdcL//hicPhjcPhmf/hhAQm7QANa2CMB/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt76QNH4RSBukjBw3vhCuvLgZPgAyMn7BCDIz4UIzo0DyA+gAAAAAAAAAAAAAAAAAc8Wz4HPgcmBAID7ADD4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TSQAJPhKXkDPEcv/ygDMzsntVH/4ZwIBSCgmAQm54mYA8CcB/PhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+E3Ii9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5J8TMAeIc8UyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTefysCAnAsKQEHscbIFyoB/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EzIi9wAAAAAAAAAAAAAAAAgzxbPgc+Bz5IHjZAuIc8KAMlx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n8rAAT4ZwBy2HAi0NYCMdIAMNwhxwCS8jvgIdcNH5LyPOFTEZLyO+HBBCKCEP////28sZLyPOAB8AH4R26S8jze',
            },
        );
});

test.each(ABIVersions)('Deploy from contract 1 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const deployerPackage = await loadPackage.deployer(abiVersion);
    const deployeePackage = await loadPackage.deployee(abiVersion);
    const deployer = await tests.deploy_with_giver({
        package: deployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setContract',
        abi: deployerPackage.abi,
        input: {
            _contract: deployeePackage.imageBase64,
        },
        keyPair: keys,
    });

    const constructor_id = await contracts.getFunctionId({
        abi: deployeePackage.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy',
        abi: deployerPackage.abi,
        input: {
            pubkey: `0x${keys.public}`,
            gram_amount: 300000000,
            constructor_id: constructor_id.id,
            constructor_param0: 1,
            constructor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addressResult.output.value0;
    tests.add_deployed_contract(keys, address, deployeePackage.abi);

    await queries.accounts.waitFor({
        id: { eq: address },
        balance: { gt: '0' },
    }, 'id balance');

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployeePackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
        });
});

test.each(ABIVersions)('Deploy from contract 2 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployerPackage = await loadPackage.deployer(abiVersion);
    const deployeePackage = await loadPackage.deployee(abiVersion);

    const deployer = await tests.deploy_with_giver({
        package: deployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: deployeePackage.imageBase64,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setCode',
        abi: deployerPackage.abi,
        input: {
            _code: code.codeBase64,
        },
        keyPair: keys,
    });

    const deployData = await contracts.getDeployData({
        abi: deployeePackage.abi,

        publicKeyHex: keys.public,
    });

    const constructor_id = await contracts.getFunctionId({
        abi: deployeePackage.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy2',
        abi: deployerPackage.abi,
        input: {
            data: deployData.dataBase64,
            gram_amount: 300000000,
            constructor_id: constructor_id.id,
            constructor_param0: 1,
            constructor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addressResult.output.value0;
    tests.add_deployed_contract(keys, address, deployeePackage.abi);

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: '0' },
        },
        'id balance',
    );

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployeePackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
        });
});

test.each(ABIVersions)('Deploy from contract 3 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const deployerPackage = await loadPackage.deployer(abiVersion);
    const deployeePackage = await loadPackage.deployee(abiVersion);

    const deployer = await tests.deploy_with_giver({
        package: deployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const deployData: TONContractGetDeployDataResult = await contracts.getDeployData({
        abi: deployeePackage.abi,
        imageBase64: deployeePackage.imageBase64,
        publicKeyHex: keys.public,
    });

    const address = `0:${deployData.accountId || ''}`;

    const runBody = await contracts.createRunBody({
        abi: deployeePackage.abi,
        function: 'constructor',
        params: {
            _param1: 1,
            _param2: 2,
        },
        internal: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy3',
        abi: deployerPackage.abi,
        input: {
            contr: deployData.imageBase64,
            addr: address,
            gram_amount: 300000000,
            payload: runBody.bodyBase64,
        },
        keyPair: keys,
    });

    expect(addressResult.output.value0)
        .toEqual(address);

    tests.add_deployed_contract(keys, address, deployeePackage.abi);

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: '0' },
        },
        'id balance',
    );

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployeePackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
        });
});
