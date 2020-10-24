##### checkbox toggle base

```js
import React from 'react';
import { CheckboxToggle } from 'react-rainbow-components';

class SimpleCheckboxToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {
        const { value } = this.state;
        return this.setState({ value: !value });
    }

    render() {
        const { value } = this.state;
        return (
            <CheckboxToggle
                id="checkbox-toggle-component-1"
                label="Toggle Label"
                value={value}
                onChange={this.handleOnChange}
            />
        );
    }
}

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <SimpleCheckboxToggle />
    </div>
```

##### checkbox toggle checked

```js
import React from 'react';
import { CheckboxToggle } from 'react-rainbow-components';

class CheckedCheckboxToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {
        const { value } = this.state;
        return this.setState({ value: !value });
    }

    render() {
        const { value } = this.state;
        return (
            <CheckboxToggle
                label="Toggle Label"
                value={value}
                onChange={this.handleOnChange}
            />
        );
    }
}

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <CheckedCheckboxToggle />
    </div>
```

##### checkbox toggle disabled

```js
import React from 'react';
import { CheckboxToggle } from 'react-rainbow-components';

class DisabledCheckboxToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange() {
        const { value } = this.state;
        return this.setState({ value: !value });
    }

    render() {
        const { value } = this.state;
        return (
            <CheckboxToggle
                label="Toggle Label"
                value={value}
                onChange={this.handleOnChange}
                disabled
            />
        );
    }
}

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <DisabledCheckboxToggle />
    </div>
```
