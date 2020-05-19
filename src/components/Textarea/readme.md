##### Textarea base

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    id="example-textarea-1"
    label="Textarea Label"
    rows={4}
    placeholder="Placeholder Text"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea required

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    label="Textarea Label"
    required
    rows={4}
    placeholder="Placeholder Text Required"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea disabled

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    label="Textarea Label"
    disabled
    rows={4}
    placeholder="Textarea disabled"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea with bottom help

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    label="Textarea Label"
    bottomHelpText="This is the bottom help"
    placeholder="Placeholder Text"
    rows={4}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea error

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    label="Textarea Label Error"
    error="This Field is Required"
    rows={4}
    placeholder="Placeholder Text Error"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea read only

```js
import React from 'react';
import { Textarea } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Textarea
    label="Textarea read only Label"
    rows={4}
    value="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun."
    readOnly
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### Textarea with footer

```js
import React, { useState } from 'react';
import { Textarea } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledFooter = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    font-size: 12px;
    color: ${props => props.text.header};
    text-align: right;
    padding: 10px;
    border-radius: 0 0 0.875rem 0.875rem;
    background-color: #F6F7F9;
    padding: 16px;
`;

const containerStyles = {
    maxWidth: 700,
};

function TextareaExample(props) {
    const [count, setCount] = useState(0);
    const maxLength = props.maxLength;
    
    return (
        <Textarea
            label="Textarea Label"
            rows={4}
            onChange={(event) => setCount(event.target.value.length)}
            maxLength={maxLength}
            placeholder="Placeholder Text"
            style={containerStyles}
            footer={
                <StyledFooter>
                    {`${count}/${maxLength}`}
                </StyledFooter>}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
    );
}

<TextareaExample maxLength={160} />
```
