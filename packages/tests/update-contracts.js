const path = require('path');
const fs = require('fs');

const contracts = {};

const contractsDir = path.resolve(__dirname, 'contracts');
for (const abiName of fs.readdirSync(contractsDir)) {
    if (!abiName.toLowerCase().startsWith('abi_v')) {
        console.log(`Invalid folder name ${abiName}`);
        continue;
    }
    const abiVersion = abiName.substr('abi_v'.length);
    const abiDir = path.resolve(contractsDir, abiName);
    for (const solFile of fs.readdirSync(abiDir)) {
        if (path.extname(solFile) !== '.sol') {
            continue;
        }
        const solName = solFile.substr(0, solFile.length - '.sol'.length);
        const jsonPath = path.resolve(abiDir, `${solName}.abi.json`);
        const tvcPath = path.resolve(abiDir, `${solName}.tvc`);
        if (!fs.existsSync(jsonPath)) {
            console.log(`ABI file missing for ${solFile}. Skip.`);
            continue;
        }
        if (!fs.existsSync(tvcPath)) {
            console.log(`TVC file missing for ${solFile}. Skip.`);
            continue;
        }
        contracts[solName] = contracts[solName] || {};
        contracts[solName][Number(abiVersion)] = {
            abi: JSON.parse(fs.readFileSync(jsonPath, 'utf8')),
            tvc: fs.readFileSync(tvcPath, 'base64'),
        }
    }
}

let out = `
export type ContractPackage = {
    abi: object,
    tvc: string,
}

export const contracts: {
    [name: string]: {
        [abi: number]: ContractPackage
    }
} = {`;

for (const [name, versions] of Object.entries(contracts)) {
    out += `\n    ${name}: {`;
    for (const [version, contract] of Object.entries(versions)) {
        out += `\n        ${version}: {`;
        out += `\n            abi: ${JSON.stringify(contract.abi)},`;
        out += `\n            tvc: '${contract.tvc}',`;
        out += `\n        },`;
    }
    out += `\n    },`;
}
out += '\n}\n';
fs.writeFileSync(path.resolve(__dirname, 'src', 'contracts.ts'), out, 'utf8');
