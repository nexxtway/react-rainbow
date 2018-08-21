### Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.

## Quick Setup (CommonJS)

##### A CommonJS-compatible version has been included within the NPM package to allows usage without transpiling. Use the following named import syntax to access CommonJS components from /lib/index.js:

![](images/windows-actions.svg)
######  
```sh
1	import { Button } from '@react-lightning-components';
2
3	<Button label="Hello World" />
4

```

## Recommended Usage (ES6 modules)

##### Recommended usage requires that your babel presets are set up correctly. create-react-app and environments that do not transpile code within node_modules are not compatible with the component import below. All the examples on the documentation site use this syntax. You can use the Babel preset, @react-lightning-components, to get started. This preset will keep Babel compatible with React Lightning Components and allow ES6 module benefits such as tree-shaking.

![](images/windows-actions.svg)
######  
```sh
1	import Button from '@react-lightning-components/components/button';
2
3	<Button label="Hello World" />
4
```
