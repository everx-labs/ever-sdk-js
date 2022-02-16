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
     "path",
     "fs",
     "util",
     "module",
     "stream",
     "constants",
 ]) {
     extraNodeModules[name] = path.resolve(__dirname, "node-mock", name);
 }
 
 
 for (const name of [
     "@eversdk/core",
     "@eversdk/lib-react-native-jsi",
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
                 experimentalImportSupport: false,
                 inlineRequires: false,
             },
         }),
         babelTransformerPath: require.resolve("./test-transformer")
     },
     resolver: {
         sourceExts: ["js", "json", "ts", "tsx", "jsx"],
         extraNodeModules,
     },
     watchFolders,
     // serializer: {
     //     getModulesRunBeforeMainModule: () => {
     //         return [path.resolve(__dirname, 'entry.js')];
     //     }
     // }
 };
 