##### radiobuttongroup base

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class SimpleRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
            />
        );
    }
}

<div className="rainbow-p-around_x-large rainbow-align-content_center">
    <SimpleRadioButtonGroup />
</div>;
```

##### radiobuttongroup brand with label

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class LabeledBrandRadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={this.state.value}
                variant="brand"
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
            />
        );
    }
}

<div className="rainbow-p-around_x-large rainbow-align-content_center">
    <LabeledBrandRadioButtonGroup />
</div>;
```

##### radiobuttongroup inverse

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

const buttonsContainerStyles = {
    backgroundColor: '#061c3f',
    borderRadius: '0.875rem',
};

class RadioButtonGroupInverse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'auto',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioButtonGroup
                id="radio-button-group-component-1"
                options={options}
                value={this.state.value}
                variant="inverse"
                onChange={this.handleOnChange}
            />
        );
    }
}

<div
    className="rainbow-p-around_x-large rainbow-align-content_center"
    style={buttonsContainerStyles}
>
    <RadioButtonGroupInverse />
</div>;
```

##### radiobuttongroup disabled

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off', disabled: true },
    { value: 'parking', label: 'Parking', disabled: true },
    { value: 'auto', label: 'Auto', disabled: true },
    { value: 'on', label: 'On', disabled: true },
];

class DisabledRadioButtonGroup extends React.Component {
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
            <RadioButtonGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
            />
        );
    }
}

<div className="rainbow-p-around_x-large rainbow-align-content_center">
    <DisabledRadioButtonGroup />
</div>;
```

##### radiobuttongroup required

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class RequiredRadioButtonGroup extends React.Component {
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
            <RadioButtonGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
                required
            />
        );
    }
}

<div className="rainbow-p-around_x-large rainbow-align-content_center">
    <RequiredRadioButtonGroup />
</div>;
```

##### radiobutton group error

```js
import React from 'react';
import RadioButtonGroup from 'react-rainbow-components/components/RadioButtonGroup';

const options = [
    { value: 'off', label: 'Off' },
    { value: 'parking', label: 'Parking' },
    { value: 'auto', label: 'Auto' },
    { value: 'on', label: 'On' },
];

class ErrorRadioButtonGroup extends React.Component {
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
            <RadioButtonGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="RadioButtonGroup Label"
                error="This field is required"
            />
        );
    }
}

<div className="rainbow-p-around_x-large rainbow-align-content_center">
    <ErrorRadioButtonGroup />
</div>;
```
