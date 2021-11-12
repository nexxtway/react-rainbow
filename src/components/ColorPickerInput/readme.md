# Basic ColorPickerInput
##### Use the `ColorPickerInput` to allow users to provide a color with ease.
```js
import React, { useState } from 'react';
import { ColorPickerInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorPickerInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorPickerInput label="Favorite color" value={value} onChange={setValue} />
    </div>
}
    <ColorPickerInputExample />

```

# Fixed colors
##### Pass a value of `colors-fixed` to enable the fixed colors variant
```js
import React, { useState } from 'react';
import { ColorPickerInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorPickerInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorPickerInput label="Favorite color" value={value} onChange={setValue} variant="colors-fixed" />
    </div>
}
    <ColorPickerInputExample />

```

# Input props
##### You can pass all the relevant props from the Input component to customize the `ColorPickerInput` 
```js
import React, { useState } from 'react';
import { ColorPickerInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 250,
};

const ColorPickerInputExample = () => {
    const [value, setValue] = useState();

    return <div className="rainbow-m-vertical_x-large rainbow-m_auto rainbow-align-content_center rainbow-flex_wrap" style={containerStyles}>
        <ColorPickerInput label="Favorite color" value={value} onChange={setValue} error="Your color is too beautiful" required />
    </div>
}
    <ColorPickerInputExample />

```