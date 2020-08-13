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
    height: 27rem;
`;

const ColorPickerExample = () => {
    const [color, setColor] = useState('#ff0');
    const handleChange = value => {
        // console.log(value);
        setColor(value);
    }
    return <ColorPicker color={color} onChange={handleChange}/>;
}

<Container>
    <StyledCard>
        <ColorPickerExample />
    </StyledCard>
</Container>
```

##### ColorPicker with default colors

```js
import React, {useState, useCallback} from 'react';
import styled from 'styled-components'
import { ColorPicker, Card } from 'react-rainbow-components';

const colors = [
    '#e3aaec',
    '#c3dbf7',
    '#9fd6ff',
    '#9de7da',
    '#9ef0bf',
    '#fef199',
    '#fdd499',
    '#d174e0',
    '#86baf3',
    '#5ebbff',
    '#42d8be',
    '#3be282',
    '#ffe654',
    '#ffb758',
    '#bd35bd',
    '#5779c1',
    '#4A90E2',
    '#06aea9',
    '#3dba4c',
    '#f5bc24',
    '#f99222',
    '#570e8c',
    '#021970',
    '#0b2399',
    '#0d7477',
    '#0a6b50',
    '#b67e12',
    '#b75d0c',
]; 

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
    const [color, setColor] = useState('#ff0');
    
    return <ColorPicker color={color} onChange={setColor} colors={colors} />;
}

<Container>
    <StyledCard>
        <ColorPickerExample />
    </StyledCard>
</Container>
```