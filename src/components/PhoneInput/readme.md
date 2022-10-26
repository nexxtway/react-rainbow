##### PhoneInput base

```js
import React, { useState } from 'react';
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
import React, { useState } from 'react';
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
            countries={['ca']}
        />
    );
};

    <Container>
        <Form />
    </Container>
```

# Custom country as the initial value
##### If you want to initialize the input with another country other than "us" selected by default, you can use the value to set a different country initially setting the `isoCode` field to the iso code of the country you want to set as initial: e.g `isoCode: 'fr'`

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 400px;
`;

const Form = () => {
    const [phone, setPhone] = useState({ isoCode:"fr" });

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

##### PhoneInput with different border radius

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 300px;
`;
const Form = () => {
    const [phone, setPhone] = useState();

    return (
        <>
            <PhoneInput
                label="Phone Number with border radius square"
                placeholder="Enter your phone number"
                onChange={setPhone}
                value={phone}
                borderRadius="square"
            />
            <PhoneInput
                label="Phone Number with border radius semi-rounded"
                placeholder="Enter your phone number"
                onChange={setPhone}
                value={phone}
                borderRadius="semi-rounded"
                style={{ marginTop: '20px' }}
            />
            <PhoneInput
                label="Phone Number with border radius rounded"
                placeholder="Enter your phone number"
                onChange={setPhone}
                value={phone}
                borderRadius="rounded"
                style={{ marginTop: '20px' }}
            />
        </>
    );
};

    <Container>
        <Form />
    </Container>
```