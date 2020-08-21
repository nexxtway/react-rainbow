##### ColorPicker info

```js
import React, { useState } from 'react';
import styled from 'styled-components'
import { ColorPicker, Card } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

const StyledCard = styled(Card)`
    width: 26rem;
    height: 40rem;
`;

const ColorPickerExample = () => {
    const [color, setColor] = useState();
    return <ColorPicker color={color} onChange={setColor}/>;
}

<Container>
    <StyledCard>
        <ColorPickerExample />
    </StyledCard>
</Container>
```
