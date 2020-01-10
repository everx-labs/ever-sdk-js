const fs = require('fs');
const path = require('path');

const deployeePackageTVC = fs.readFileSync(path.resolve(__dirname, 'Deployee.tvc')).toString('base64');
const deployeePackageAbi = require('../contracts/Deployee.abi.json');

/* eslint-disable import/prefer-default-export */
export const DeployeePackage = {
    abi: deployeePackageAbi,
    imageBase64: deployeePackageTVC,
};
