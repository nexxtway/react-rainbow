var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/bootstrap.js',
    output: {
        path: BUILD_DIR,
        filename: 'components.bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel'
            }
        ]
    }
};

module.exports = config;