# Basic slider
##### The slider input lets the user specify a numeric value between a range.

```js
import React, { useState } from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const SliderExample = () => {
    const [value, setValue] = useState(50);

    const onChange = event => setValue(event.target.value);

    return (
        <div
            className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
            style={containerStyles}
        >
            <Slider label="Slider label" value={value} onChange={onChange} />
        </div>
    );
}

    <SliderExample />;
```

# Slider with min, max and step properties
##### Use the min, max and step props to control the slider behavior.

```js
import React, { useState } from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const SliderExample = () => {
    const [value, setValue] = useState(50);

    const onChange = event => setValue(event.target.value);

    return (
        <div
            className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
            style={containerStyles}
        >
            <Slider
                label="Slider label"
                min="100"
                max="400"
                step="50"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

    <SliderExample />;
```

# Slider with error
##### Pass the error prop to show an error message under the input.

```js
import React, { useState } from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const SliderExample = () => {
    const [value, setValue] = useState(50);

    const onChange = event => setValue(event.target.value);

    return (
        <div
            className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
            style={containerStyles}
        >
            <Slider label="Slider label" value={value} onChange={onChange} error="This field is required" />
        </div>
    );
}

    <SliderExample />;
```

# Slider disabled
##### Pass the disabled prop as true if you want to show the slider input as disabled.

```js
import React, { useState } from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const SliderExample = () => {
    const [value, setValue] = useState(50);

    const onChange = event => setValue(event.target.value);

    return (
        <div
            className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
            style={containerStyles}
        >
            <Slider label="Slider label" value={value} onChange={onChange} disabled />
        </div>
    );
}

    <SliderExample />;
```

# Slider required
##### Pass the required prop to mark the slider input as required.

```js
import React, { useState } from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

const SliderExample = () => {
    const [value, setValue] = useState(50);

    const onChange = event => setValue(event.target.value);

    return (
        <div
            className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
            style={containerStyles}
        >
            <Slider label="Slider label" value={value} onChange={onChange} required />
        </div>
    );
}

    <SliderExample />;
```
