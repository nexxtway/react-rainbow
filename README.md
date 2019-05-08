<p align="center">
  <a href="https://react-rainbow.firebaseapp.com/" rel="noopener" target="_blank"><img width="10%" src="https://raw.githubusercontent.com/reiniergs/react-rainbow/master/assets/images/rainbow-logo.svg?sanitize=true" alt="React Rainbow Component logo"></a>
</p>

<h2 align="center">
<a href="https://react-rainbow.firebaseapp.com/" rel="noopener" target="_blank">React Rainbow</a>
</h2>

<p align="center">
React Rainbow is a collection of components that will reliably help you build your application in a snap. Give it a hack and let us know what you think.
</p>

<br>

[![CircleCI](https://circleci.com/gh/90milesbridge/react-rainbow/tree/master.svg?style=svg)](https://circleci.com/gh/90milesbridge/react-rainbow/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/90milesbridge/react-rainbow/badge.svg?branch=master)](https://coveralls.io/github/90milesbridge/react-rainbow-components?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/react-rainbow-components.svg)](https://badge.fury.io/js/react-rainbow-components)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-rainbow-components/community?source=orgpage)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Installation

React Rainbow components is available as an [npm package](https://www.npmjs.com/package/react-rainbow-components).

```bash
$ yarn add react-rainbow-components
```

##### or

```bash
$ npm install react-rainbow-components --save
```

## Usage

Here is a quick example to get you started, **it's all you need**:

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

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/24p8n0pnz0?from-embed) [![Join the chat at https://gitter.im/react-rainbow/community](https://badges.gitter.im/react-rainbow/community.svg)](https://gitter.im/react-rainbow-components/community?source=orgpage)

## Running locally

1. git clone https://github.com/90milesbridge/react-rainbow.git
2. cd react-rainbow
3. yarn install
4. yarn start
5. navigate to http://localhost:6060/

## Contributing

We are excited that you are interested in contributing to this project!

You can help us improve React Rainbow Components, the first step to begin collaborate is to create an issue before submitting a pull request, it's always good to file an issue, so we can discuss the details of your approach or suggestion.

[See more details about how to collaborate?](https://github.com/90milesbridge/react-rainbow/blob/master/CONTRIBUTING.md)
