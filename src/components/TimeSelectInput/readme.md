##### TimeSelectInput base focused when init:

```js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <TimeSelectInput
            id="time-select-input-1"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
            ref={inputRef}
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput base:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);

    return (
        <TimeSelectInput
            id="time-select-input-3"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput with initial value:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState('08:00');
    return (
        <TimeSelectInput
            id="time-select-input-5"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput with 24 hour format:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);
    return (
        <TimeSelectInput
            id="time-select-input-7"
            value={time}
            onChange={setTime}
            hour24={true}
            label="TimeSelectInput Label"
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput disabled:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);
    return (
        <TimeSelectInput
            id="time-select-input-9"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
            disabled
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput required:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);
    return (
        <TimeSelectInput
            id="time-select-input-11"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
            required
            error="Enter a valid time to continue"
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput with help text:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;
const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null);
    return (
        <TimeSelectInput
            id="time-select-input-13"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
            bottomHelpText="Enter a time in format hh:mm tt"
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```

##### TimeSelectInput read only:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 0 0 14px 14px;
    padding: 48px 16px;
`;

const TimeSelectInputExample = () => {
    const [time, setTime] = useState('08:00');

    return (
        <TimeSelectInput
            id="time-select-input-15"
            value={time}
            onChange={setTime}
            label="TimeSelectInput Label"
            readOnly
        />
    );
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```