const upstreamTransformer = require("metro-react-native-babel-transformer");
const os = require("os");

function getIp() {
    for (const networkInterfaces of Object.values(os.networkInterfaces())) {
        if (networkInterfaces !== undefined) {
            for (const networkInterface of networkInterfaces) {
                if (networkInterface.family === "IPv4" && !networkInterface.internal) {
                    return networkInterface.address;
                }
            }
        }
    }
    return "";
}

module.exports.transform = function (src, filename, options) {
    if (typeof src === "object") {
        ({ src, filename, options } = src);
    } else {
        console.error(filename);
    }

    if (filename.endsWith("entry.js")) {
        console.log("Transforming " + filename);
        const endpoint = process.env.TON_NETWORK_ADDRESS || `http://${getIp()}`;
        console.log("Endpoint " + endpoint);
        src = src.replace("http://localhost", endpoint);
    }
    if (filename.endsWith("tests/proofs.js") && options.platform === 'android') {
        console.log("Transforming " + filename);
        console.log("Skip proof tests");
        src = src.replace(/jest_1\.test/g, "jest_1.test.skip");
    }
    return upstreamTransformer.transform({ src, filename, options });
};
