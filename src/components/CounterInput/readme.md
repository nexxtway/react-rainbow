# CounterInput default variant
##### This example represents a counter with a default variant.

```js
import React, { useState } from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
};

const CounterBase = () => {
    const [counter, setCounter] = useState();

    return(
        <CounterInput
            id="input-component-1"
            label="Passengers"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            min={10}
            max={100}
        />
    )
}

    <CounterBase />
```

# CounterInput shaded variant
##### You can modify CounterInput appearance by applying the shaded variant we offer you.

```js
import React, { useState } from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
};

const CounterShaded = () => {
    const [counter, setCounter] = useState();

    return(
        <CounterInput
            id="input-component-1"
            label="Passengers"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            variant='shaded'
        />
    )
}

    <CounterShaded />
```

# CounterInput disabled
##### In case you don't need an available state of the CounterInput component, you can disable it with the disabled property.

```js
import React, { useState } from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,

};

const CounterDisabled = () => {
    const [counter, setCounter] = useState();

    return(
        <CounterInput
            id="input-component-1"
            label="Passengers"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            disabled
        />
    )
}

    <CounterDisabled />
```

# CounterInput with controlled limits
##### If you want to validate the value of the input while the user is typing you can do so on the onChange handler.

```js
import React, { useState } from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,

};

const maxLimit = 100;

const CounterControlled = () => {
    const [counter, setCounter] = useState();

    const handleChange = value => {
        if (value > maxLimit) setCounter(maxLimit);
        else setCounter(value)
    }

    return(
        <CounterInput
            id="input-component-1"
            label="Passengers"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={handleChange}
            max={maxLimit}
        />
    )
}

    <CounterControlled />
```

# CounterInput with different border radius
##### Use the `borderRadius` prop to change the border radius of the CounterInput.

```js
import React, { useState } from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
};

const CounterBorderRadius = (  ) => {
    const [counter, setCounter] = useState();
    return(
        <>
        <CounterInput
            id="input-component-1"
            label="Border Radius square"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            min={10}
            max={100}
            borderRadius="square"
        />
        <CounterInput
            id="input-component-1"
            label="Border Radius square"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            min={10}
            max={100}
            borderRadius="semi-rounded"
        />
        <CounterInput
            id="input-component-1"
            label="Border Radius square"
            placeholder="Only numbers"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            labelAlignment="center"
            value={counter}
            onChange={setCounter}
            min={10}
            max={100}
            borderRadius="rounded"
        />
        </>
    )
}
    <CounterBorderRadius />
    
```