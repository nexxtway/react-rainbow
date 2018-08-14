/* eslint-disable */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    ignore: ['**/__tests__/**', '/node_modules/**'],
    assetsDir: path.resolve(__dirname, 'assets'),
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    title: 'React Lightning Components',
    version: 'v.0.0.5',
    require: [
        path.resolve(__dirname, 'assets/styles/salesforce-lightning-design-system.css'),
        path.resolve(__dirname, 'styleguide/setup.js')
    ],
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, 'styleguide/styleguideComponents/StyleGuide'),
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.js');
        const dir = path.dirname(componentPath);
        return `import ${name} from '${dir}';`;
    },
    sections: [
        {
            name: 'Components',
            components: 'src/components/**/index.js',
            sectionDepth: 1,
        },
    ],
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'babel-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'styleguide'),
                    loader: 'babel-loader',
                },
                {
                    test: /\.(css|scss)$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
                {
                    test: /\.svg$/,
                    loader: 'file-loader',
                },
            ],
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: './assets/' },
            ]),
        ],
    },
};
