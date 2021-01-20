/* eslint-disable */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const version = require('./package.json').version;
const styles = require('./library/styles');

const env = dotenv.config();
let envKeys;

if (env.parsed && !env.error) {
    envKeys = Object.keys(env.parsed).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env.parsed[next]);
        return prev;
    }, {});
} else {
    envKeys = {};
}

module.exports = {
    ignore: ['**/__tests__/**', '/node_modules/**'],
    assetsDir: path.resolve(__dirname, 'assets'),
    skipComponentsWithoutExample: true,
    pagePerSection: true,
    title: 'React Rainbow Components',
    version,
    template: {
        favicon: 'https://react-rainbow.firebaseapp.com/favicon.ico',
        head: {
            meta: [
                {
                    name: 'robots',
                    content: 'index,follow',
                },
                {
                    name: 'description',
                    content:
                        'React Rainbow is a collection of components that will reliably help you build your application in a snap. Give it a hack and let us know what you think.',
                },
                {
                    name: 'keywords',
                    content: 'react, rainbow, components, library',
                },
                {
                    property: 'og:title',
                    content: 'React Rainbow Components',
                },
                {
                    property: 'og:description',
                    content:
                        'React Rainbow is a collection of components that will reliably help you build your application in a snap. Give it a hack and let us know what you think.',
                },
                {
                    property: 'og:image',
                    content: 'https://react-rainbow.firebaseapp.com/share-image.png',
                },
            ],
        },
    },
    require: [
        path.resolve(__dirname, 'library/setup.js'),
        path.resolve(__dirname, 'library/ga.js'),
    ],
    styles,
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, 'library/styleguideComponents/StyleGuide'),
        ReactComponentRenderer: path.join(__dirname, 'library/styleguideComponents/ReactComponent'),
        TableRenderer: path.join(__dirname, 'library/styleguideComponents/PropsTable'),
        PlaygroundRenderer: path.join(__dirname, 'library/styleguideComponents/Playground'),
        TabButtonRenderer: path.join(__dirname, 'library/styleguideComponents/CodeEditorButton'),
        ToolbarButtonRenderer: path.join(__dirname, 'library/styleguideComponents/ToolbarButton'),
        TableOfContents: path.join(__dirname, 'library/styleguideComponents/TableOfContents'),
        ComponentsListRenderer: path.join(__dirname, 'library/styleguideComponents/ComponentsList'),
        Editor: path.join(__dirname, 'library/styleguideComponents/Editor'),
        PathlineRenderer: path.join(__dirname, 'library/styleguideComponents/Pathline'),
        Wrapper: path.join(__dirname, 'library/styleguideComponents/Wrapper'),
        SectionRenderer: path.join(__dirname, 'library/styleguideComponents/SectionRenderer'),
        Examples: path.join(__dirname, 'library/styleguideComponents/Examples'),
    },
    sections: [
        {
            name: 'GettingStarted',
            content: 'library/pages/gettingStarted.md',
        },
        {
            name: 'Components',
            components: 'src/components/**/index.js',
            usageMode: 'expand',
        },
        {
            name: 'Customization',
            content: 'library/pages/customization.md',
            usageMode: 'expand',
            exampleMode: 'expand',
        },
        {
            name: 'Experiences',
            content: 'library/pages/experiencesExamples.md',
        },
        {
            name: 'Designs',
            content: 'library/pages/designs.md',
            usageMode: 'expand',
            sectionDepth: 1,
            sections: [
                {
                    name: 'RainbowComponents',
                    content: 'library/pages/Designs/rainbowComponents.md',
                },
                {
                    name: 'Admin',
                    content: 'library/pages/Designs/admin.md',
                },
                {
                    name: 'Authentication',
                    content: 'library/pages/Designs/authentication.md',
                },
                {
                    name: 'Chat',
                    content: 'library/pages/Designs/chat.md',
                },
                {
                    name: 'ComingSoon',
                    content: 'library/pages/Designs/comingSoon.md',
                },
                {
                    name: 'NotFound404',
                    content: 'library/pages/Designs/notFound404.md',
                },
                {
                    name: 'CreateProfile',
                    content: 'library/pages/Designs/createProfile.md',
                },
                {
                    name: 'FindBook',
                    content: 'library/pages/Designs/findBook.md',
                },
                {
                    name: 'Team',
                    content: 'library/pages/Designs/team.md',
                },
                {
                    name: 'SocialIconsSet',
                    content: 'library/pages/Designs/socialIconsSet.md',
                },
            ],
        },
    ],
    webpackConfig: {
        resolve: {
            alias: {
                'react-rainbow-components': path.resolve(__dirname, './src/components'),
            },
        },
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
                        name: 'fonts/[name]/[name].[ext]',
                    },
                },
                {
                    test: /\.(svg|png)$/,
                    loader: 'file-loader',
                },
            ],
        },
        plugins: [
            new CopyWebpackPlugin([{ from: './assets/' }]),
            new webpack.DefinePlugin(envKeys),
            new webpack.DefinePlugin({
                reactVersion: JSON.stringify(require('./package.json').devDependencies.react),
            }),
        ],
    },
};
