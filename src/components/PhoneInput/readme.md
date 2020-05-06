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

const countries = ['us', 'es', 'ar', 'ru', 'it', 'cu', 've', 'ec', 'af'];

const Form = () => {
    const [phone, setPhone] = useState();

    function handleChange(value) {
        console.log(value);
        setPhone(value);
    }
    return (
        <PhoneInput
            label="Phone Number"
            placeholder="Enter your phone number"
            icon={<PhoneIcon />}
            onChange={setPhone}
            value={phone}
            countries={countries}
        />
    );
};

<Container>
    <Form />
</Container>

```
