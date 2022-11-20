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

# ColorInput with different border radius
##### Use the `borderRadius` prop to change the border radius of the ColorInput.
```js
import React, { useState } from 'react';
import { ColorInput } from 'react-rainbow-components';

const containerStyles = {
    gap: 20,
    maxWidth: 250,
};

const ColorInputExample = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
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
    </div>
}
    <ColorInputExample />

```