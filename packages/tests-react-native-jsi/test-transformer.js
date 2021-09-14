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
        // handle RN >= 0.46
        ({ src, filename, options } = src);
    }

    if (filename.endsWith("entry.js")) {
        console.log("Transforming " + filename);
        const endpoint = process.env.TON_NETWORK_ADDRESS || `http://${getIp()}`;
        src = src.replace("http://localhost", endpoint);
        return upstreamTransformer.transform({
            src,
            filename: filename,
            options,
        });
    } else {
        return upstreamTransformer.transform({ src, filename, options });
    }
};
