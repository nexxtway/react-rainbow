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
