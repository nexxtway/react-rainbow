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
            id="time-select-input-2" 
            value="" 
            onChange={setTime} 
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
    const [time, setTime] = useState(null); 
    return ( 
        <TimeSelectInput 
            id="time-select-input-2" 
            value="08:00 AM" 
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
            id="time-select-input-2" 
            value="08:00" 
            onChange={setTime} 
            hour24={true}
        /> 
    ); 
}
<StyledContainer>
    <TimeSelectInputExample />
</StyledContainer>
```