// eslint-disable-next-line import/no-extraneous-dependencies
const shell = require('shelljs');

const isCircleCi = process.env.CIRCLECI;
const isMaster = process.env.CIRCLE_BRANCH === 'master';

if (isCircleCi && isMaster) {
    // eslint-disable-next-line global-require
    const version = require('./../package.json').version;
    const hash = process.env.CIRCLE_SHA1;
    if (shell.exec(`npm version ${version}-canary.${hash}`).code === 0) {
        shell.exec(`npm publish --tag ${hash}`);
    }
} else {
    // eslint-disable-next-line no-console
    console.error('This script was meant to run in CIRCLECI context and in master branch.');
    process.exit(1);
}
