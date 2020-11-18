<br/>

<p align="center">
  <a href="https://react-rainbow.firebaseapp.com/" rel="noopener" target="_blank"><img width="15%" src="https://raw.githubusercontent.com/nexxtway/react-rainbow/master/assets/images/rainbow-logo.svg?sanitize=true" alt="React Rainbow Component logo"></a>
</p>

<h2 align="center">
<a href="https://react-rainbow.firebaseapp.com/" rel="noopener" target="_blank">React Rainbow</a>
</h2>

<p align="center">
React Rainbow is a collection of components that will reliably help you build your application in a snap. Give it a hack and let us know what you think.
</p>

<div align="center">
 
[![CircleCI](https://circleci.com/gh/nexxtway/react-rainbow/tree/master.svg?style=svg)](https://circleci.com/gh/nexxtway/react-rainbow/tree/master)
[![npm version](https://badge.fury.io/js/react-rainbow-components.svg)](https://badge.fury.io/js/react-rainbow-components)
[![components](https://img.shields.io/bit/collection/total-components/nexxtway/react-rainbow?color=%236c5ce7)](https://bit.dev/nexxtway/react-rainbow?namespaces=__global__)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/nexxtway/react-rainbow/badge.svg)](https://snyk.io/test/github/nexxtway/react-rainbow)
[![Coverage Status](https://coveralls.io/repos/github/nexxtway/react-rainbow/badge.svg?branch=master)](https://coveralls.io/github/nexxtway/react-rainbow?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintainability](https://api.codeclimate.com/v1/badges/e71caf3c07fa5a0bd8cc/maintainability)](https://codeclimate.com/github/nexxtway/react-rainbow/maintainability)

[![CLA assistant](https://cla-assistant.io/readme/badge/nexxtway/react-rainbow)](https://cla-assistant.io/nexxtway/react-rainbow)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-rainbow-components/community?source=orgpage)

</div>

### ✨ Features

-   90+ components built on top of React.
-   Interactive Examples.
-   First class testing.
-   Wdio page objects.
-   Redux-Form integration.
-   We designed each component with i18n in mind.
-   Accessibility is part of our definition of done.
-   Components with out-of-the-box Typescript typing.

<br/>

### 🖥 Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |

<br/>

### 📦 Installation

React Rainbow Components is available as an [npm package](https://www.npmjs.com/package/react-rainbow-components).

```bash
$ yarn add react-rainbow-components
```

##### or

```bash
$ npm install react-rainbow-components --save
```

<br/>

### ⌨️ Usage

Here is a quick example to get you started. **It's all you need**:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-rainbow-components';

function App() {
    return <Button label="Hello World!" variant="brand" onClick={() => alert('Hello World!')} />;
}

ReactDOM.render(<App />, document.getElementById('container'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/24p8n0pnz0?from-embed)

You can also use individual component from [bit](https://bit.dev/nexxtway/react-rainbow):

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@bit/nexxtway.react-rainbow.button';

function App() {
    return <Button label="Hello World!" variant="brand" onClick={() => alert('Hello World!')} />;
}

ReactDOM.render(<App />, document.getElementById('container'));
```

<a href="https://bit.dev/nexxtway/react-rainbow?namespaces=__global__" target="_blank"><img width="200" height="39" src="https://i.imagesup.co/images2/4a64f008951cd66e56d4f1e0141a27df584a1e94.png"></a>

<br/>

### ⌨️ Running locally

1. git clone https://github.com/nexxtway/react-rainbow.git
2. cd react-rainbow
3. yarn install
4. yarn start
5. navigate to http://localhost:6060/

<br/>

### 💬 Questions

For `how-to` questions and other `non-issues`, please use our Gitter Chat instead of Github issues.

https://gitter.im/react-rainbow-components/community

<br/>

### 🖥 Examples

Are you looking for an example project to get started?

[We host some here.](https://react-rainbow.web.app/#/Experiences)

<br/>

### 🤝 Contributing

We are excited that you are interested in contributing to this project!

You can help us improve React Rainbow Components, the first step to begin collaboration is to create an issue before submitting a pull request. It's always good to file an issue, so we can discuss the details of your approach or suggestion.

[See more details about how to collaborate](https://github.com/nexxtway/react-rainbow/blob/master/CONTRIBUTING.md)

<br/>

### ⚖️ License

The [MIT license](https://github.com/nexxtway/react-rainbow/blob/master/LICENSE) governs your use of React Rainbow Components.

