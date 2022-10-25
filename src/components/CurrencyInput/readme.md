##### currency input base

```js
import React, { useState } from 'react';
import { CurrencyInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value, setValue ] = useState();

    return (
        <CurrencyInput
            label="Input Label"
            placeholder="Enter your amout"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-m_auto"
            value={value}
            onChange={setValue}
        />
    )
}

    <SetValueInput />
```

##### currency input with different border radius

```js
import React, { useState } from 'react';
import { CurrencyInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value, setValue ] = useState();

    return (
        <>
            <CurrencyInput
                label="Input with border radius square"
                placeholder="Enter your amout"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value}
                onChange={setValue}
                borderRadius="square"
            />
            <CurrencyInput
                label="Input with border radius semi-rounded"
                placeholder="Enter your amout"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value}
                onChange={setValue}
                borderRadius="semi-rounded"
            />
            <CurrencyInput
                label="Input with border radius rounded"
                placeholder="Enter your amout"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value}
                onChange={setValue}
                borderRadius="rounded"
            />
        </>
    )
}

    <SetValueInput />
```
