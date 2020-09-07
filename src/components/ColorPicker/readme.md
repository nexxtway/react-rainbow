##### ColorPicker default variant

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
    padding: 10px;
`;

const StyledContent = styled.div`
    width: 19rem;
    height: 26rem;
`;

const StyledLabel = styled.span`
    color: ${props => props.theme.rainbow.palette.text.label};
    text-transform: uppercase;
`;

const ColorPickerExample = () => {
    const [color, setColor] = useState();
    return <ColorPicker value={color} onChange={setColor}/>;
}

<Container>
    <StyledCard>
        <StyledLabel>Color Picker</StyledLabel>
        <StyledContent>
            <ColorPickerExample />
        </StyledContent>
    </StyledCard>
</Container>
```

##### ColorPicker without default colors

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
    padding: 20px;
`;

const StyledContent = styled.div`
    width: 19rem;
`;

const StyledLabel = styled.span`
    color: ${props => props.theme.rainbow.palette.text.label};
    text-transform: uppercase;
`;

const ColorPickerExample = () => {
    const [color, setColor] = useState();
    return <ColorPicker value={color} onChange={setColor} defaultColors={[]} />;
}

<Container>
    <StyledCard>
        <StyledLabel>Color Picker</StyledLabel>
        <StyledContent>
            <ColorPickerExample />
        </StyledContent>
    </StyledCard>
</Container>
```

##### ColorPicker colors-fixed variant

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
    width: 20rem;
    padding: 10px;
`;

const StyledLabel = styled.label`
    color: ${props => props.theme.rainbow.palette.text.label};
    text-transform: uppercase;
`;

const ColorsFixedPicker = () => {
    const [color, setColor] = useState();
    return (
        <>
            <ColorPicker value={color} onChange={setColor} variant="colors-fixed"/>
            <span>{!!color && color.hex}</span>
        </>
    );
}

<Container>
    <StyledCard>
        <StyledLabel>Default Colors</StyledLabel>
        <ColorsFixedPicker />
    </StyledCard>
</Container>
```