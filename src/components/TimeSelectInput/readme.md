##### TimeSelectInput base:

```js
import React from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;
<StyledContainer>
    <TimeSelectInput
        id="time-select-input-1"
    />;
</StyledContainer>
```

##### TimeSelectInput with initial value:

```js
import React from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

<StyledContainer>
    <TimeSelectInput
        id="time-select-input-2"
        value="08:00 AM"
    />;
</StyledContainer>
```

##### TimeSelectInput with 24 hour format:

```js
import React from 'react';
import styled from 'styled-components';
import { TimeSelectInput } from 'react-rainbow-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

<StyledContainer>
    <TimeSelectInput
        id="time-select-input-2"
        hour24={true}
    />;
</StyledContainer>
```