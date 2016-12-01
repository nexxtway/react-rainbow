var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'suite/');
var APP_DIR = path.resolve(__dirname, 'suite/app');

var config = {
    entry: APP_DIR + '/bootstrap.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};

module.exports = config;