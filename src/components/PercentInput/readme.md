##### percent input base

```js
import React, { useState } from 'react';
import { PercentInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value, setValue ] = useState();

    return (
        <PercentInput
            label="Input Label"
            placeholder="Enter your percent"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-m_auto"
            value={value}
            onChange={setValue}
        />
    )
}

    <SetValueInput />
```

##### percent input with different border radius

```js
import React, { useState } from 'react';
import { PercentInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};
const SetValueInput = () => {
    const [ value, setValue ] = useState();

    return (
        <>
            <PercentInput
                label="Percent Input with border radius square"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value}
                onChange={setValue}
                borderRadius="square"
            />
            <PercentInput
                label="Percent Input with border radius semi-rounded"
                placeholder="Enter your percent"
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-m_auto"
                value={value}
                onChange={setValue}
                borderRadius="semi-rounded"
            />
            <PercentInput
                label="Percent Input with border radius rounded"
                placeholder="Enter your percent"
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
