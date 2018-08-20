/* eslint-disable */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const version = require("./package.json").version;
const styles = require('./library/styles');

module.exports = {
    ignore: ['**/__tests__/**', '/node_modules/**'],
    assetsDir: path.resolve(__dirname, 'assets'),
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    title: 'React Lightning Components',
    version,
    require: [
        path.resolve(__dirname, 'assets/styles/salesforce-lightning-design-system.css'),
        path.resolve(__dirname, 'library/setup.js')
    ],
    styles,
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, 'library/styleguideComponents/StyleGuide'),
        SectionHeading: path.join(__dirname, 'library/styleguideComponents/SectionHeading'),
        ReactComponentRenderer: path.join(__dirname, 'library/styleguideComponents/ReactComponent'),
        TableRenderer: path.join(__dirname, 'library/styleguideComponents/PropsTable'),
        PlaygroundRenderer: path.join(__dirname, 'library/styleguideComponents/Playground'),
        TabButtonRenderer: path.join(__dirname, 'library/styleguideComponents/CodeEditorButton'),
    },
    sections: [
        {
            name: 'Getting Started',
            sectionDepth: 1,
            sections: [
                {
                    name: 'Overview',
                    content: 'library/pages/overview.md',
                },
                {
                    name: 'Usage',
                    content: 'library/pages/usage.md',
                },
                {
                    name: 'Contribuiting',
                    content: 'library/pages/contribuiting.md',
                },
            ]
        },
        {
            name: 'Components',
            components: 'src/components/**/index.js',
            sectionDepth: 1,
            usageMode: 'expand',
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
                    include: path.resolve(__dirname, 'library'),
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
