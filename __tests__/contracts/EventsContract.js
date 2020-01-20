const fs = require('fs');
const path = require('path');

const eventsPackageTVC = fs.readFileSync(path.resolve(__dirname, 'Events.tvc')).toString('base64');
const eventsPackageAbi = require('../contracts/Events.abi.json');

/* eslint-disable import/prefer-default-export */
export const EventsPackage = {
    abi: eventsPackageAbi,
    imageBase64: eventsPackageTVC,
};
