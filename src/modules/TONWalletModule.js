// @flow
import { TONModule } from '../TONModule';

import TONContractsModule from './TONContractsModule';

import type { TONContractPackage } from './TONContractsModule';
import { WalletContractPackage } from '../contracts/WalletContract';

export type TONKeyPairData = {
    secret: string,
    public: string,
}

const methods = {
    package: {
        get: 'wallet.package.get',
    },
};

export default class TONWalletModule extends TONModule {
    package: TONContractPackage;

    contracts: TONContractsModule;

    async setup(): Promise<*> {
        this.package = WalletContractPackage;
        this.contracts = this.context.getModule(TONContractsModule);
    }

    async packageGet(): Promise<TONContractPackage> {
        return this.requestLibrary(methods.package.get, {});
    }

    async deploy(keys: TONKeyPairData): Promise<string> {
        const { address } = await this.contracts.deploy({
            keyPair: keys,
            constructorParams: {},
            package: this.package,
        });
        return address;
    }

    async isDeployed(address: string): Promise<boolean> {
        const summary = await this.contracts.load({
            address,
            includeImage: false,
        });
        return summary.id !== null;
    }

    async getGramBalance(address: string): Promise<?number> {
        const summary: any = await this.contracts.load({
            address,
            includeImage: false,
        });
        return summary.balanceGrams !== null ? Number.parseInt(summary.balanceGrams, 10) : null;
    }
}

TONWalletModule.moduleName = 'TONWalletModule';
