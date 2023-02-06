# Basic ColorInput
##### Use the `ColorInput` to allow users to provide a color with ease.
```js
import React, { useState } from 'react';
import { ColorInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorInput label="Favorite color" value={value} onChange={setValue} />
    </div>
}
    <ColorInputExample />

```

# Fixed colors
##### Pass a value of `colors-fixed` to enable the fixed colors variant
```js
import React, { useState } from 'react';
import { ColorInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorInput label="Favorite color" value={value} onChange={setValue} variant="colors-fixed" />
    </div>
}
    <ColorInputExample />

```

# Input props
##### You can pass all the relevant props from the Input component to customize the `ColorInput` 
```js
import React, { useState } from 'react';
import { ColorInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorInput label="Favorite color" value={value} onChange={setValue} error="Your color is too beautiful" required />
    </div>
}
    <ColorInputExample />

```

# ColorInput of different sizes
##### If you need to resize your input, you can do so using the `size` prop.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorInput } from 'react-rainbow-components';

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

const ColorInputExample = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();

    return (
        <Container>
            <ColorInput
                label="Input Label"
                size="small"
                value={value1}
                onChange={setValue1}
                style={inputStyles}
            />
            <ColorInput
                label="Input Label"
                value={value2}
                onChange={setValue2}
                style={inputStyles}
            />
            <ColorInput
                label="Input Label"
                size="large"
                value={value3}
                onChange={setValue3}
                style={inputStyles}
            />
        </Container>
    );
}

    <ColorInputExample />

```

# ColorInput with different border radius
##### Use the `borderRadius` prop to change the border radius of the ColorInput.
```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorInput } from 'react-rainbow-components';

const Container = styled.div`
    max-width: 480px;
    margin: 30px auto;
    padding: 20px 10px;
    min-height: 300px;
    gap: 20px
`;

const ColorInputExample = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();

    return (
        <Container>
            <ColorInput label="Border radius square" value={value1} onChange={setValue1} borderRadius="square" />
            <ColorInput
                label="Border radius semi-square"
                value={value2}
                onChange={setValue2}
                borderRadius="semi-square"
            />
            <ColorInput
                label="Border radius semi-rounded"
                value={value3}
                onChange={setValue3}
                borderRadius="semi-rounded"
            />
            <ColorInput label="Border radius rounded" value={value4} onChange={setValue4} borderRadius="rounded" />
        </Container>);
}
    <ColorInputExample />

```