##### PhoneInput base

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { PhoneInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
`;

<Container>
    <PhoneInput
        label="Phone Number"
        icon={<BellIcon />}
    />
</Container>

```
