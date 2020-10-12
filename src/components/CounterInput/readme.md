# CounterInput base
##### The counter with the default variant

```js
import React, {useState} from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
    
};

const CounterBase = () => {
    const [counter, setCounter] = useState();

    const handleOnchange = (value) => {
        setCounter( value );
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
            onChange={handleOnchange}
        />
    )
}

<CounterBase />
```
# CounterInput shaded
##### The counter with a variant shaded

```js
import React, {useState} from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
    
};

const CounterShaded = () => {
    const [counter, setCounter] = useState();

    const handleOnchange = (value) => {
        setCounter( value );
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
            onChange={handleOnchange}
            variant='shaded'
        />
    )
}

<CounterShaded />
```

# CounterInput disabled
##### The counter disabled

```js
import React, {useState} from 'react';
import { CounterInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 220,
    
};

const CounterDisabled = () => {
    const [counter, setCounter] = useState();

    const handleOnchange = (value) => {
        setCounter( value );
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
            onChange={handleOnchange}
            disabled
        />
    )
}

<CounterDisabled />
```