##### select basic

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
];

<Select
    label="Select Label"
    options={options}
    id="example-select-1"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### select required

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option required 1' },
    { value: 'option 2', label: 'Option required 2' },
    { value: 'option 3', label: 'Option required 3' },
];

<Select
    label="Select Label"
    required
    options={options}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### select disabled

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option disabled 1' },
    { value: 'option 2', label: 'Option disabled 2' },
    { value: 'option 3', label: 'Option disabled 3' },
];

<Select
    label="Select Label"
    disabled
    options={options}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### select with error

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option with error 1' },
    { value: 'option 2', label: 'Option with error 2' },
    { value: 'option 3', label: 'Option with error 3' },
];

<Select
    label="Select Label"
    required
    error="this field is required"
    options={options}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### select controlled example

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option controlled 1', disabled: false },
    { value: 'option 2', label: 'Option controlled 2', disabled: false },
    { value: 'option 3', label: 'Option controlled 3', disabled: true },
];

class ControlledSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: undefined };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <Select
                label="Select Label"
                required
                options={options}
                value={value}
                onChange={this.handleOnSelect}
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
        );
    }
}

<ControlledSelect />;
```

##### select with help

```js
import React from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option with help 1' },
    { value: 'option 2', label: 'Option with help 2' },
    { value: 'option 3', label: 'Option with help 3' },
];

<Select
    label="Select Label"
    bottomHelpText="ex: here goes the help"
    options={options}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```
