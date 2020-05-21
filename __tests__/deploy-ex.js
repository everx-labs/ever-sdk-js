/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow


import type {TONContractGetDeployDataResult} from '../types';
import {ABIVersions, tests} from './_/init-tests';
import {TONOutputEncoding} from '../src/modules/TONCryptoModule';

const DeployerPackage = tests.loadPackage('Deployer');
const DeployeePackage = tests.loadPackage('Deployee');
const CheckInitParamsPackage = tests.loadPackage('CheckInitParams');

beforeAll(tests.init);
afterAll(tests.done);

test('Deploy data (ABI v%i)', async () => {
    const { contracts } = tests.client;
    const checkInitParamsPackage = CheckInitParamsPackage[2];
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
                imageBase64: 'te6ccgECJAEABTAAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAVj/fyHtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YgsBpo6A4tMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8B8AH4R26S8jzeGAIBIB0NAgEgGg4CASAUDwIBSBIQAQm15nxTwBEA/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EvIi9wAAAAAAAAAAAAAAAAQzxbPgc+T3zPiniHPC//JcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcBCbXpPhbAEwD8+EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3tH4SsiL3AAAAAAAAAAAAAAAABDPFs+Bz5PPSfC2Ic8WyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTef/hnAQ+5Fqvn/wgt0BUBto6A3vhG8nNx+GbR+ABwcHTIywIizwoHIc8L/yDJ0ANfA/hu+Er4TscFlPhO+Gre+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VR/+GcWAVLtRNAg10nCAY4f0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4YhcBBo6A4hgB/vQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wv/kXDi+GtzIYBA9A6T1woAkXDi+Gx0IYBA9A+SyMnf+G2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQZADD4bnABgED0DvK91wv/+GJw+GNw+GZ/+GEBCbtAA1rYGwH++EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3vpA0fhFIG6SMHDe+EK68uBk+ADIyfsEIMjPhQjOjQQID6AAAAAAAAAAAAAAAAAAQM8WyYEAgPsAMPhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQBwAHM8Ry//KAMzOye1Uf/hnAgFIIB4BCbniZgDwHwD8+EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3tH4TciL3AAAAAAAAAAAAAAAABDPFs+Bz5J8TMAeIc8UyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTef/hnAgJwIyEBB7HGyBciAP74QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhMyIvcAAAAAAAAAAAAAAAAEM8Wz4HPkgeNkC4hzwoAyXH7ADDA/44p+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AzxHL/8oAzM7J7VTef/hnAHLYcCLQ1gIx0gAw3CHHAJLyO+Ah1w0fkvI84VMRkvI74cEEIoIQ/////byxkvI84AHwAfhHbpLyPN4=',
                accountId: '9d638983c8bf6526370ff37116ce9613a5c6aa60129d97e1836f5ddcf87cc00e',
                address: '0:9d638983c8bf6526370ff37116ce9613a5c6aa60129d97e1836f5ddcf87cc00e',
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
                accountId: '86bcbe566459040c7a177a99434ce446f200b1b7318852dbf3372ea5a44efd77',
                address: '-1:86bcbe566459040c7a177a99434ce446f200b1b7318852dbf3372ea5a44efd77',
                dataBase64: 'te6ccgEBDgEAmQABAcABAgPPIAQCAQHeAwAD0CACASAHBQEB1AYAAAIBIAsIAgEgCgkAATAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAIBIA0MAEMgB/bl0Ew7KhkP9uXQTDsqGQ/25dBMOyoZD/bl0Ew7KhkMAEEERERERERERERERERERERERERERERERERERERERERERGA=',
                imageBase64: 'te6ccgECLAEABZIAAgE0DgEBAcACAgPPIAUDAQHeBAAD0CACASAHBgEB1BACASALCAIBIAoJAAEwAEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACASANDABDIAf25dBMOyoZD/bl0Ew7KhkP9uXQTDsqGQ/25dBMOyoZDABBBERERERERERERERERERERERERERERERERERERERERERgAib/APSkICLAAZL0oOGK7VNYMPShEQ8BCvSkIPShEAAAAgEgFBIBWP9/Ie1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiEwGmjoDi0wABjhKBAgDXGCD5AVj4QiD4ZfkQ8qje0z8Bjh74QyG5IJ8wIPgjgQPoqIIIG3dAoLnekvhj4IA08jTY0x8B+CO88rnTHwHwAfhHbpLyPN4gAgEgJRUCASAiFgIBIBwXAgFIGhgBCbXmfFPAGQD++EFujiLtRNDT/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hi3tH4S8iL3AAAAAAAAAAAAAAAABDPFs+Bz5PfM+KeIc8L/8lx+wAwwP+OKfhCyMv/+EPPCz/4Rs8LAMj4TgHO+Ev4TPhN+EpeQM8Ry//KAMzOye1U3n/4ZwEJtek+FsAbAPz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhKyIvcAAAAAAAAAAAAAAAAEM8Wz4HPk89J8LYhzxbJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcBD7kWq+f/CC3QHQG2joDe+Ebyc3H4ZtH4AHBwdMjLAiLPCgchzwv/IMnQA18D+G74SvhOxwWU+E74at74QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVH/4Zx4BUu1E0CDXScIBjh/T/9M/0wDV+G7T/9IA1Phq+G34bPhrf/hh+Gb4Y/hiHwEGjoDiIAH+9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0DpPXC/+RcOL4a3MhgED0DpPXCgCRcOL4bHQhgED0D5LIyd/4bY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCEAMPhucAGAQPQO8r3XC//4YnD4Y3D4Zn/4YQEJu0ADWtgjAf74QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe+kDR+EUgbpIwcN74Qrry4GT4AMjJ+wQgyM+FCM6NBAgPoAAAAAAAAAAAAAAAAABAzxbJgQCA+wAw+ELIy//4Q88LP/hGzwsAyPhOAc74S/hM+E34Sl5AJAAczxHL/8oAzM7J7VR/+GcCAUgoJgEJueJmAPAnAPz4QW6OIu1E0NP/0z/TANX4btP/0gDU+Gr4bfhs+Gt/+GH4Zvhj+GLe0fhNyIvcAAAAAAAAAAAAAAAAEM8Wz4HPknxMwB4hzxTJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcCAnArKQEHscbIFyoA/vhBbo4i7UTQ0//TP9MA1fhu0//SANT4avht+Gz4a3/4Yfhm+GP4Yt7R+EzIi9wAAAAAAAAAAAAAAAAQzxbPgc+SB42QLiHPCgDJcfsAMMD/jin4QsjL//hDzws/+EbPCwDI+E4BzvhL+Ez4TfhKXkDPEcv/ygDMzsntVN5/+GcActhwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==',
            },
        );
});

test.each(ABIVersions)('Deploy from contract 1 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const deployerPackage = DeployerPackage[abiVersion];
    const deployeePackage = DeployeePackage[abiVersion];
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
            constuctor_id: constructor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
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

    const deployerPackage = DeployerPackage[abiVersion];
    const deployeePackage = DeployeePackage[abiVersion];

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

    const constuctor_id = await contracts.getFunctionId({
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
            constuctor_id: constuctor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
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
    const deployerPackage = DeployerPackage[abiVersion];
    const deployeePackage = DeployeePackage[abiVersion];

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
