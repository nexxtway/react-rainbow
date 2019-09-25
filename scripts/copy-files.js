/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const fs = require('fs');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './');
const srcPath = path.join(packagePath, './src');

function typescriptCopy({ from, to }) {
    const files = glob.sync('**/*.d.ts', { cwd: from });
    const cmds = files.map(file =>
        fs.copyFileSync(path.resolve(from, file), path.resolve(to, file)),
    );
    return cmds;
}

function run() {
    typescriptCopy({ from: srcPath, to: buildPath });
}

run();
