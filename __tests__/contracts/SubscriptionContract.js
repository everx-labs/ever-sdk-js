const fs = require('fs');
const path = require('path');

const subscriptionPackageTVC = fs.readFileSync(path.resolve(__dirname, 'Subscription.tvc')).toString('base64');
const subscriptionPackageAbi = require('../contracts/Subscription.abi.json');

// eslint-disable-next-line import/prefer-default-export
export const SubscriptionContractPackage = {
    abi: subscriptionPackageAbi,
    imageBase64: subscriptionPackageTVC,
};
