const fs = require('fs');
const path = require('path');

const setCodePackageTVC = fs.readFileSync(path.resolve(__dirname, 'Setcode.tvc')).toString('base64');
const setCodePackageAbi = require('../contracts/Setcode.abi.json');

// eslint-disable-next-line import/prefer-default-export
export const SetCodePackage = {
    abi: setCodePackageAbi,
    imageBase64: setCodePackageTVC,
};
