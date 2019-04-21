const glob = require('glob');

module.exports = {
    source: {
        include: glob.sync('./src/components/**/*/pageObject/*.js'),
        includePattern: '.+\\.js$',
    },
    opts: {
        destination: './styleguide/pageObjects',
        tutorials: 'tutorials',
    },
};
