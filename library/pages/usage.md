### Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.

## Quick Setup (CommonJS)

##### A CommonJS-compatible version has been included within the NPM package to allows usage without transpiling. Use the following named import syntax to access CommonJS components from /lib/index.js:

    const firstExample = `import { Button } from 'react-slds';
    <Button label="Hello World!" variant="brand" onClick={handleClick} />
    `;

    <CodeEditor code={firstExample} />

## Recommended Usage (ES6 modules)

##### Recommended usage requires that your babel presets are set up correctly. create-react-app and environments that do not transpile code within node_modules are not compatible with the component import below. All the examples on the documentation site use this syntax. You can use the Babel preset, 'react-slds', to get started. This preset will keep Babel compatible with React Lightning Components and allow ES6 module benefits such as tree-shaking.

    const secondExample = `import Button from 'react-slds/components/button';
    <Button label="Hello World!" variant="brand" onClick={handleClick} />
    `;

    <CodeEditor code={secondExample} />
