const fs = require('fs');
const path = require('path');
const parseJs = require('./jsParser');
const extractExamples = require('./extractExamples');

const searchIndex = [];
const srcDir = path.join(__dirname, '../../src');

const isDir = filePath => {
    return fs.lstatSync(filePath).isDirectory();
};

const traverse = (dir, callback) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (isDir(filePath)) {
            traverse(filePath, callback);
        } else {
            callback({
                name: file,
                path: filePath,
            });
        }
    });
};

const isComponentIndex = file => {
    return file.name === 'index.js' && /src\/components\/[a-zA-Z]+\/index.js$/.test(file.path);
};

const getComponentName = file => {
    return file.path.match(/src\/components\/([a-zA-Z]+)\/index.js$/)[1];
};

const isComponentDescription = value => {
    return !/eslint/.test(value);
};

const extractComponentDescription = file => {
    const content = fs.readFileSync(file.path).toString();
    const ast = parseJs(content);
    let description = '';

    ast.comments.some(comment => {
        if (comment.type === 'CommentBlock' && isComponentDescription(comment.value)) {
            description = comment.value;
            return true;
        }
        return false;
    });
    return description
        .replace(/\*/g, '')
        .replace(/\n/g, '')
        .trim();
};

const isMarkdownDoc = file => {
    return /src\/components\/[a-zA-Z]+\/readme.md/i.test(file.path);
};

const run = () => {
    traverse(srcDir, file => {
        if (isComponentIndex(file)) {
            const componentName = getComponentName(file);
            searchIndex.push({
                objectID: componentName,
                type: 'component',
                text: componentName,
                description: extractComponentDescription(file),
                url: `https://react-rainbow.io/#/${componentName}`,
            });
        }
        if (isMarkdownDoc(file)) {
            const examples = extractExamples(file);
            searchIndex.push(...examples);
        }
    });
};

run();

// eslint-disable-next-line no-console
console.log(JSON.stringify(searchIndex));
