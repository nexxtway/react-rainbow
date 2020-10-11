// eslint-disable-next-line import/no-extraneous-dependencies
const mdx = require('@mdx-js/mdx');
const fs = require('fs');

const textElement = new Set(['heading', 'paragraph']);

const extractExamples = file => {
    const code = fs.readFileSync(file.path).toString();
    const componentName = file.path.match(/src\/components\/([a-zA-Z]+)\/readme.md$/i)[1];
    const examples = [];
    const myPlugin = () => {
        return tree => {
            let index = 0;
            tree.children.forEach(element => {
                if (textElement.has(element.type)) {
                    if (!Array.isArray(examples[index])) {
                        examples.push([]);
                    }
                    examples[index].push({
                        type: element.type,
                        depth: element.depth || 100,
                        text: element.children[0].value,
                    });
                }
                if (element.type === 'code') {
                    index += 1;
                }
            });
        };
    };
    mdx.sync(code, {
        remarkPlugins: [myPlugin],
    });
    return examples.map((example, i) => {
        example.sort((a, b) => a.depth - b.depth);
        return {
            objectID: `${componentName}-${i + 1}`,
            type: 'example',
            text: example[0].text,
            componentName,
            url: `https://react-rainbow.io/#!/${componentName}/${2 * i + 1}`,
            description: example
                .slice(1)
                .map(part => part.text)
                .join(),
        };
    });
};

module.exports = extractExamples;
