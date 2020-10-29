const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { spawn } = require('child_process');
const exec = require('util').promisify(require('child_process').exec);
const module_path = path.resolve(__dirname, 'module');
const android_path = path.resolve(module_path, 'android');
const ios_path = path.resolve(module_path, 'ios');
const publishDir = path.resolve(__dirname, 'publish');
const ndkUrlStr = 'http://dl.google.com/android/repository/android-ndk-r17c-darwin-x86_64.zip';
const ndkUrlParts = ndkUrlStr.split('/');
const ndkZipFile = path.resolve(android_path, ndkUrlParts.length < 1 ? null : ndkUrlParts[ndkUrlParts.length - 1]);
const ndkDirName = path.resolve(android_path, 'android-ndk-r17c');

const spawnEnv = {
    ...process.env,
};

const version = require('./package.json').version.split('.')[0];


function spawnProcess(name, args) {
    return new Promise((resolve, reject) => {
        const spawned = spawn(name, args, { env: spawnEnv });

        spawned.stdout.on('data', function (data) {
            process.stdout.write(data);
        });

        spawned.stderr.on('data', (data) => {
            process.stderr.write(data);
        });

        spawned.on('error', (err) => {
            reject(err);
        });

        spawned.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject();
            }
        });
    });
}

async function spawnAll(items, getArgs) {
    const list = [];
    for (const item of items) {
        const args = getArgs(item);
        console.log(`Build: ${args.join(' ')}`);
        list.push(spawnProcess(args[0], args.slice(1)));
    }
    return Promise.all(list);
}


function getOption(option) {
    const prefixes = [];
    ['--', '-'].forEach(pfx => [':', '='].forEach(sfx => prefixes.push(`${pfx}${option}${sfx}`)));
    for (const arg of process.argv) {
        for (const pfx of prefixes) {
            if (arg.startsWith(pfx)) {
                return arg.slice(pfx.length);
            }
        }
    }
    return '';
}

const devOut = getOption('dev-out');
const devMode = !!devOut;


function mkdir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function appendFileNameIfMissing(fileOrDirPath, defaultFileName) {
    return path.extname(fileOrDirPath) !== ''
        ? fileOrDirPath
        : path.resolve(fileOrDirPath, defaultFileName);

}

function gz(src, dst, devPath) {
    return new Promise((resolve, reject) => {
        const srcPath = path.resolve(module_path, src);
        const dstPath = path.resolve(publishDir, dst);

        if (devOut || devPath) {
            let dstDevPath = appendFileNameIfMissing(
                devPath ? path.resolve(devOut, ...devPath) : devOut,
                src[src.length - 1],
            );
            mkdir(path.dirname(dstDevPath))
            fs.copyFileSync(srcPath, dstDevPath);
        }

        fs.createReadStream(srcPath)
            .pipe(zlib.createGzip({ level: 9 }))
            .pipe(fs.createWriteStream(dstPath + '.gz'))
            .on('finish', () => {
                fs.chmodSync(dstPath + '.gz', 0o666);
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}


function deleteFolderRecursive(dir) {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const curPath = path.join(dir, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dir);
    }
}


// parse arguments

let buildAndroid = false;
let buildIOS = false;
let openMode = false;
process.argv.slice(2).map(x => x.trim().toLowerCase()).forEach((arg) => {
    switch (arg) {
    case '--android':
        buildAndroid = true;
        break;
    case '--ios':
        buildIOS = true;
        break;
    case '--open':
        openMode = true;
        break;
    }
});

if (!buildAndroid && !buildIOS) {
    buildAndroid = buildIOS = true;
}

const ios = {
    archs: [
        { target: 'x86_64-apple-ios' },
        { target: 'aarch64-apple-ios' },
    ],
    lib: 'libtonosclient.a',
};
const android = {
    archs: [
        { target: 'i686-linux-android', jni: 'x86', ndk: 'x86' },
        { target: 'aarch64-linux-android', jni: 'arm64-v8a', ndk: 'arm64' },
        { target: 'armv7-linux-androideabi', jni: 'armeabi-v7a', ndk: 'arm' },
    ],
    lib: 'libtonosclient.so',
};

if (devMode) {
    ios.archs.splice(1);
    android.archs.splice(1);
}

spawnEnv.PATH = [
    (spawnEnv.PATH || ''),
    ...(android.archs.map(x => path.resolve(android_path, 'NDK', x.ndk, 'bin'))),
].join(':');

async function getNDK() {
    let ndkHomeDir = process.env.NDK_HOME || '';
    if (ndkHomeDir === '' || !fs.existsSync(ndkHomeDir)) {
        try {
            if (!fs.existsSync(ndkZipFile)) {
                console.log('Downloading android NDK...');
                await spawnProcess('curl', [ndkUrlStr, '-o', ndkZipFile]);
            }
            console.log('Unzipping android NDK...');
            await spawnProcess('unzip', ['-q', '-d', android_path, ndkZipFile]);
            ndkHomeDir = ndkDirName;
            process.env.NDK_HOME = ndkHomeDir;
        } catch (err) {
            throw err;
        }
    }
    return (ndkHomeDir);
}

async function checkNDK() {
    const ndkDir = path.resolve(android_path, 'NDK');
    const missingArchs = android.archs.map(x =>
        !fs.existsSync(path.resolve(ndkDir, x.ndk)) ? x : null
    ).filter(x => x);
    if (missingArchs.length === 0) {
        console.log('Standalone NDK already exists...');
        return;
    }
    let ndkHomeDir = await getNDK();
    if (ndkHomeDir === '' || !fs.existsSync(ndkHomeDir)) {
        ndkHomeDir = path.join(process.env.ANDROID_HOME || '', 'ndk-bundle');
    }
    const maker = path.join(ndkHomeDir, 'build', 'tools', 'make_standalone_toolchain.py');
    if (!fs.existsSync(maker)) {
        console.error('Please install android-ndk: $ brew install android-ndk');
        process.exit(1);
    }
    mkdir(ndkDir);
    process.chdir(ndkDir);
    await spawnAll(missingArchs, (arch) => {
        return ['python', maker, '--arch', arch.ndk, '--install-dir', arch.ndk];
    });
}


async function cargoBuild(targets) {
    return spawnAll(targets, x => ['cargo', 'build', '--target', x, '--release']);
}


async function buildReactNativeIosLibrary() {
    const buildRel = ['build', 'ios'];
    process.chdir(ios_path);

    await cargoBuild(ios.archs.map(x => x.target));
    mkdir(path.resolve(module_path, buildRel));
    const dest = path.resolve(module_path, buildRel, ios.lib);
    const getIosOutput = x => path.join('target', x.target, 'release', ios.lib);
    await spawnProcess('lipo', [
        '-create',
        '-output', dest,
        ...ios.archs.map(getIosOutput),
    ]);

    if (fs.existsSync(dest)) {
        await gz(
            [...buildRel, ios.lib],
            `tonclient_${version}_react_native_ios`,
        );
    }
}


async function buildReactNativeAndroidLibrary() {
    process.chdir(android_path);

    const buildRel = ['build', 'android'];

    await cargoBuild(android.archs.map(x => x.target));
    mkdir(path.resolve(module_path, buildRel));

    for (const arch of android.archs) {
        const archBuildRel = [...buildRel, arch.jni];
        mkdir(path.resolve(module_path, archBuildRel));
        const src = path.resolve(module_path, 'target', arch.target, 'release', android.lib);
        if (fs.existsSync(src)) {
            const dst = path.resolve(module_path, archBuildRel, android.lib);
            fs.copyFileSync(src, dst);
            process.stdout.write(`Android library for [${arch.target}] copied to "${dst}".\n`);
            await gz(
                [...archBuildRel, android.lib],
                `tonclient_${version}_react_native_${arch.target}`,
            );
        } else {
            process.stderr.write(`Android library for [${arch}] does not exists. Skipped.\n`);
        }
    }
}


(async () => {
    if (fs.existsSync(publishDir)) {
        deleteFolderRecursive(publishDir);
    }
    fs.mkdirSync(publishDir);
    try {
        await checkNDK();
        let cargoTargets = ["x86_64-apple-darwin"];
        let installed = (await exec("rustup target list --installed")).stdout;
        console.log(`Installed targets:\n${installed}`);
        if (buildIOS) {
            ios.archs.map(x => x.target).forEach(val => {
                if (installed.indexOf(val) < 0) {
                    cargoTargets.push(val);
                }
            });
        }
        if (buildAndroid) {
            android.archs.map(x => x.target).forEach(val => {
                if (installed.indexOf(val) < 0) {
                    cargoTargets.push(val);
                }
            });
        }

        await spawnProcess('rustup', ['target', 'add'].concat(cargoTargets));
        if (!devMode && !openMode) {
            await spawnProcess('cargo', ['update']);
        }
        if (buildIOS) {
            await buildReactNativeIosLibrary();
        }
        if (buildAndroid) {
            await buildReactNativeAndroidLibrary();
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
