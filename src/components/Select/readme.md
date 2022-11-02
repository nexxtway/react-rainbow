# Basic select
##### The `Select` component is used to create a dropdown list, most often used in forms to collect user input.

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

# Select required
##### Set the `required` prop to *true* to mark the `Select` input as required.

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

# Select disabled
##### Pass the `disabled` prop as *true* if you want to show the `Select` input as disabled.

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

# Select with error
##### Pass the `error` prop to show an error message under the input.

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

# Select with help text
##### You can use the *bottomHelpText* prop to show a help message under the input.

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

# Select with label alignment
##### Use the *labelAlignment* prop to customize the label position. Possible values are *left*, *center (default)* and *right*.

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
        labelAlignment="left"
    />;
```

# Select controlled example
##### In React, it is recommended to use controlled inputs. To achieve this you can pass the *value* to the `Select` component like the following example.

```js
import React, { useState } from 'react';
import { Select } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Option controlled 1', disabled: false },
    { value: 'option 2', label: 'Option controlled 2', disabled: false },
    { value: 'option 3', label: 'Option controlled 3', disabled: true },
];

const ControlledSelect = () => {
    const [value, setValue] = useState('option 2');

    const handleOnSelect = event => {
        setValue(event.target.value);
    };

    return (
        <Select
            label="Select Label"
            required
            options={options}
            value={value}
            onChange={handleOnSelect}
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    );
}

    <ControlledSelect />;
```

# Select with different border radius
##### The `Select` component is used to create a dropdown list, most often used in forms to collect user input.

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
    <>
        <Select
            label="Select with border radius square"
            options={options}
            id="example-select-1"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="square"
        />
        <Select
            label="Select with border radius semi-rounded"
            options={options}
            id="example-select-1"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="semi-rounded"
        />
        <Select
            label="Select with border radius rounded"
            options={options}
            id="example-select-1"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="rounded"
        />
    </>
```