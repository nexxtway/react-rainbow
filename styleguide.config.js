/* eslint-disable */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    components: 'src/components/**/index.js',
    ignore: ['**/__tests__/**', '/node_modules/**'],
    assetsDir: path.resolve(__dirname, 'assets'),
    require: [
        path.resolve(__dirname, 'assets/styles/salesforce-lightning-design-system.css')
    ],
    webpackConfig: {
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'babel-loader',
                },
                {
                    test: /\.(css|scss)$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: './assets/' }
            ])
        ]
    },

};
