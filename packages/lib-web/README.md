# Building ever-sdk-js WASM inside docker
To build WASM you need `clang v8`. Use this workaround if you encounter a problem when building wasm binaries on your platform (MacOSX or Windows). 

## Pulling build image
```
docker pull tonlabs/build-tonclient-wasm
```
Change your current location to `ever-sdk-js` project. It is important because the next command will use this location to mount the volume with source code inside the docker container with build environment.
```
cd ever-sdk-js
```
Run build container in background. First attempt will take a long time.
```
docker run -v $(pwd):/tonlabs/TON-SDK --name build-tonclient-wasm -dt build-tonclient-wasm tail -f /dev/null
```
## Build WASM
```
docker exec -ti build-tonclient-wasm "build-tonclient-wasm.sh"
```
## Location of binaries
After successful build process, binaries will be located here
```
ever-sdk-js/packages/lib-web/index.js
ever-sdk-js/packages/lib-web/eversdk.wasm
Compressed
ever-sdk-js/packages/lib-web/publish/eversdk_1_31_wasm.gz
ever-sdk-js/packages/lib-web/publish/eversdk_1_31_wasm_js.gz
```
