##### PhoneInput base

```js
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 400px;
`;
const Form = () => {
    const [phone, setPhone] = useState();

    return (
        <PhoneInput
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={setPhone}
            value={phone}
        />
    );
};

<Container>
    <Form />
</Container>

```

##### PhoneInput single country selection

```js
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 400px;
`;
const Form = () => {
    const [phone, setPhone] = useState();

    return (
        <PhoneInput
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={setPhone}
            value={phone}
            countries=''
        />
    );
};

<Container>
    <Form />
</Container>

```
