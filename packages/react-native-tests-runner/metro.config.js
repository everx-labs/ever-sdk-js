/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const extraNodeModules = {};
const watchFolders = [];

function addModule(name, modulePath) {
    const resolvedPath = path.resolve(__dirname, 'node_modules', modulePath);
    extraNodeModules[name] = resolvedPath;
    watchFolders.push(resolvedPath);
}

// addModule('@ton-client/main', '@ton-client/main');
// addModule('@ton-client/react-native-module', '@ton-client/react-native-module');
// addModule('@ton-client/main-tests', '@ton-client/main-tests');


module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
        extraNodeModules
    },
    watchFolders,
};
