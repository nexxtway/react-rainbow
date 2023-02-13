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

# PhoneInput of different sizes
##### If you need to resize your input, you can do so using the `size` prop.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const inputStyles = {
    width: 500,
    marginTop: 20,
};

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 300px;
`;

const PhoneInputExample = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();

    return (
        <Container>
            <PhoneInput
                label="Input Label"
                placeholder="Enter your phone number"
                size="small"
                value={value1}
                onChange={setValue1}
                style={inputStyles}
            />
            <PhoneInput
                label="Input Label"
                placeholder="Enter your phone number"
                value={value2}
                onChange={setValue2}
                style={inputStyles}
            />
            <PhoneInput
                label="Input Label"
                placeholder="Enter your phone number"
                size="large"
                value={value3}
                onChange={setValue3}
                style={inputStyles}
            />
        </Container>
    );
}

    <PhoneInputExample />

```

# PhoneInput with different border radius
##### Use the `borderRadius` prop to change the border radius of the PhoneInput.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const inputStyles = {
    marginTop: 20,
};

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 300px;
`;
const PhoneInputExample = () => {
    const [phone1, setPhone1] = useState();
    const [phone2, setPhone2] = useState();
    const [phone3, setPhone3] = useState();
    const [phone4, setPhone4] = useState();

    return (
        <Container>
            <PhoneInput
                label="Phone Number with border radius square"
                placeholder="Enter your phone number"
                onChange={setPhone1}
                value={phone1}
                borderRadius="square"
            />
            <PhoneInput
                label="Phone Number with border radius semi-square"
                placeholder="Enter your phone number"
                onChange={setPhone2}
                value={phone2}
                borderRadius="semi-square"
                style={inputStyles}
            />
            <PhoneInput
                label="Phone Number with border radius semi-rounded"
                placeholder="Enter your phone number"
                onChange={setPhone3}
                value={phone3}
                borderRadius="semi-rounded"
                style={inputStyles}
            />
            <PhoneInput
                label="Phone Number with border radius rounded"
                placeholder="Enter your phone number"
                onChange={setPhone4}
                value={phone4}
                borderRadius="rounded"
                style={inputStyles}
            />
        </Container>
    );
};

    <PhoneInputExample />
```