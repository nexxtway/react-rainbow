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
