const fs = require('fs');
const path = require('path');

const deployerPackageTVC = fs.readFileSync(path.resolve(__dirname, 'Deployer.tvc')).toString('base64');
const deployerPackageAbi = require('../contracts/Deployer.abi.json');

/* eslint-disable import/prefer-default-export */
export const DeployerPackage = {
    abi: deployerPackageAbi,
    imageBase64: deployerPackageTVC,
};
