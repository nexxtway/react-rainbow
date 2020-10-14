// eslint-disable-next-line import/no-extraneous-dependencies
const parser = require('@babel/parser');

const parse = code => {
    return parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx'],
    });
};

module.exports = parse;
