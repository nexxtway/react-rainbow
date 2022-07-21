module.exports = function getBabelConfig(api) {
    const useESModules = api.env(['esm']);

    const presets = [
        [
            '@babel/preset-env',
            {
                modules: useESModules ? false : 'commonjs',
            },
        ],
        '@babel/preset-react',
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true,
            },
        ],
    ];
    const plugins = ['@babel/plugin-transform-runtime'];

    return {
        presets,
        plugins,
        comments: false,
    };
};
