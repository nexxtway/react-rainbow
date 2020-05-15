##### TimeSelectInput base:

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null); 
    return (
        <TimeSelectInput 
            id="time-select-input-1" 
            value={time} 
            onChange={time => {setTime(time), console.log('[README] ', time)}} 
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
`;
const TimeSelectInputExample = () => {
    const [time, setTime] = useState('08:00'); 
    return ( 
        <TimeSelectInput 
            id="time-select-input-3" 
            value={time} 
            onChange={setTime}
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
`;
const TimeSelectInputExample = () => {
    const [time, setTime] = useState(null); 
    return ( 
        <TimeSelectInput 
            id="time-select-input-5" 
            value={time} 
            onChange={setTime} 
            hour24={true}
        />
    ); 
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```