##### radio group base

```js
import React from 'react';
import { RadioGroup } from 'react-rainbow-components';

const options = [
    { value: 'radioOne', label: 'Radio One' },
    { value: 'radioTwo', label: 'Radio Two' },
    { value: 'radioThree', label: 'Radio Three' },
];

class SimpleRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioGroup
                id="radio-group-component-1"
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
            />
        );
    }
}

<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
    <SimpleRadioGroup />
</div>
```

##### radio group disabled

```js
import React from 'react';
import { RadioGroup } from 'react-rainbow-components';

const options = [
    { value: 'radioOne', label: 'Radio One', disabled: true },
    { value: 'radioTwo', label: 'Radio Two', disabled: true },
    { value: 'radioThree', label: 'Radio Three', disabled: true },
];

class DisabledRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'user',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
            />
        );
    }
}

<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
    <DisabledRadioGroup />
</div>
```

##### radio group required

```js
import React from 'react';
import { RadioGroup } from 'react-rainbow-components';

const options = [
    { value: 'radioOne', label: 'Radio One' },
    { value: 'radioTwo', label: 'Radio Two' },
    { value: 'radioThree', label: 'Radio Three' },
];

class RequiredRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
                required
            />
        );
    }
}

<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
    <RequiredRadioGroup />
</div>
```

##### radio group error

```js
import React from 'react';
import { RadioGroup } from 'react-rainbow-components';

const options = [
    { value: 'radioOne', label: 'Radio One' },
    { value: 'radioTwo', label: 'Radio Two' },
    { value: 'radioThree', label: 'Radio Three' },
];

class ErrorRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'anonymous',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
                error="This field is required"
            />
        );
    }
}

<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
    <ErrorRadioGroup />
</div>
```
