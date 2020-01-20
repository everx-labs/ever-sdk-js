const fs = require('fs');
const path = require('path');

const walletPackageTVC = fs.readFileSync(path.resolve(__dirname, 'WalletContract.tvc')).toString('base64');
const walletPackageAbi = require('../contracts/WalletContract.abi.json');
/* eslint-disable import/prefer-default-export */
export const WalletContractPackage = {
    abi: walletPackageAbi,
    imageBase64: walletPackageTVC,
};
