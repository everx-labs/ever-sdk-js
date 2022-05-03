/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path");
const extraNodeModules = {};
const watchFolders = [];

for (const name of [
    "constants",
    "fs",
    "module",
    "path",
    // "process", this mock will be generated inside ./entry.js
    "stream",
    "util",
]) {
    extraNodeModules[name] = path.resolve(__dirname, "node-mock", name);
}


for (const name of [
    "@eversdk/core",
    "@eversdk/lib-react-native",
    "@eversdk/tests",
    "react-native",
    "@babel/runtime",
    "buffer",
    "assert",
]) {
    const resolvedPath = path.resolve(__dirname, "node_modules", name);
    extraNodeModules[name] = resolvedPath;
    watchFolders.push(resolvedPath);
}

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve("./test-transformer")
  },
  resolver: {
    sourceExts: ["js", "json", "ts", "tsx", "jsx"],
    extraNodeModules,
  },
  watchFolders,
};
