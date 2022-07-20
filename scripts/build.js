const childProcess = require('child_process');
const path = require('path');
const yargs = require('yargs');
const { promisify } = require('util');

const exec = promisify(childProcess.exec);

const validBundles = [
    // modern build with a rolling target using ES6 modules
    'esm',
    // build for node using commonJS modules
    'node',
];

async function run(argv) {
    const { bundle, outDir: relativeOutDir } = argv;
    const env = {
        NODE_ENV: 'production',
        BABEL_ENV: bundle,
    };
    const babelConfigPath = path.resolve(__dirname, '../babel.config.js');
    const srcDir = path.resolve('./src');
    const outDir = path.resolve(
        relativeOutDir,
        // We generally support top level path imports e.g.
        // 1. `import ArrowDownIcon from '@mui/icons-material/ArrowDown'`.
        // 2. `import Typography from '@mui/material/Typography'`.
        // The first case resolves to a file while the second case resolves to a package first i.e. a package.json
        // This means that only in the second case the bundler can decide whether it uses ES modules or CommonJS modules.
        // Different extensions are not viable yet since they require additional bundler config for users and additional transpilation steps in our repo.
        // Switch to `exports` field in v6.
        {
            node: './',
            esm: './esm',
        }[bundle],
    );
    const babelArgs = ['--config-file', babelConfigPath, srcDir, '--out-dir', outDir];
    const command = ['yarn babel', ...babelArgs].join(' ');
    const { stderr, stdout } = await exec(command, { env: { ...process.env, ...env } });

    if (stderr) {
        throw new Error(`'${command}' failed with \n${stderr}`);
    }
    console.log(stdout);
}

yargs
    .command({
        command: '$0 <bundle>',
        description: 'build package',
        builder: command => {
            return command
                .positional('bundle', {
                    description: `Valid bundles: "${validBundles.join('" | "')}"`,
                    type: 'string',
                })
                .option('out-dir', { default: './', type: 'string' });
        },
        handler: run,
    })
    .help()
    .strict(true)
    .version(false)
    .parse();
