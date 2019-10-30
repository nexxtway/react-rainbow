##### Checkbox Group basic

```js
import React from 'react';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    id="checkbox-group-1"
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group disabled

```js
import React from 'react';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: true },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: true },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: true },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group required

```js
import React from 'react';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    required
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```

##### Checkbox Group error

```js
import React from 'react';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';

const options = [
    { value: 'checkboxOne', label: 'Checkbox One', disabled: false },
    { value: 'checkboxTwo', label: 'Checkbox Two', disabled: false },
    { value: 'checkboxThree', label: 'Checkbox Three', disabled: false },
];

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                <CheckboxGroup
                    label="Checkbox Group Label"
                    error="This field is required"
                    options={options}
                    value={values}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

<CheckboxGroupTry />;
```
