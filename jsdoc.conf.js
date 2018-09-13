const glob = require('glob');

module.exports = {
    source: {
        include: glob.sync('./src/components/**/*/pageObject/index.js'),
        includePattern: '.+\\index.js$',
    },
    opts: {
        destination: './styleguide/pageObjects',
    }
};
