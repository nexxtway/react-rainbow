##### input base

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Input
    id="input-component-1"
    label="Input Label"
    placeholder="Placeholder text"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### type of the inputs

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const inputStyles = {
    width: 300,
};

<div className="rainbow-m-vertical_x-large rainbow-m_auto">
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Text"
            placeholder="Placeholder text"
            type="text"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Paassword"
            placeholder="**********"
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input DateTime"
            value="02/12/2018"
            type="datetime"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input DateTime Local"
            type="datetime-local"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Date"
            type="date"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Month"
            type="month"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Time"
            type="time"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Week"
            type="week"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Email"
            placeholder="inputEmail@gmail.com"
            type="email"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Number"
            placeholder="1234567890"
            type="number"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Url"
            placeholder="https://react-rainbow-components.com"
            type="url"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Search"
            placeholder="Search"
            type="search"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
    <div className="rainbow-align-content_center rainbow-flex_wrap">
        <Input
            label="Input Phone"
            placeholder="111-111-1111"
            type="tel"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />

        <Input
            label="Input Color"
            type="color"
            className="rainbow-p-around_medium"
            style={inputStyles}
        />
    </div>
</div>
```

##### input radio

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

<div className="rainbow-p-around_x-large rainbow-flex rainbow-justify_space-around rainbow-flex_wrap">
    <Input className="rainbow-m-around_medium" type="radio" label="Input Radio Label" />
    <Input
        className="rainbow-m-around_medium"
        type="radio"
        error="This Field is Required"
        label="Input Radio Label"
    />
    <Input className="rainbow-m-around_medium" disabled type="radio" label="Input Radio Label" />
    <Input
        className="rainbow-m-around_medium"
        type="radio"
        bottomHelpText="ex: (111) 111 1111"
        label="Input Radio Label"
    />
</div>
```

##### input type checkbox

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

<div className="rainbow-p-around_x-large rainbow-flex rainbow-justify_space-around rainbow-flex_wrap">
    <Input className="rainbow-m-around_medium" type="checkbox" label="Input Checkbox Label" />
    <Input
        className="rainbow-m-around_medium"
        type="checkbox"
        error="This Field is Required"
        label="Input Checkbox Label"
    />
    <Input
        className="rainbow-m-around_medium"
        disabled
        type="checkbox"
        label="Input Checkbox Label"
    />
    <Input
        className="rainbow-m-around_medium"
        type="checkbox"
        bottomHelpText="ex: (111) 111 1111"
        label="Input Checkbox Label"
    />
</div>
```

##### input with icons

```js
import React from 'react';
import { Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const inputStyles = {
    width: 300,
};

<div className="rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap">
    <Input
        className="rainbow-p-around_medium"
        style={inputStyles}
        label="Input label"
        placeholder="Input with left icon"
        icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />}
    />
    <Input
        className="rainbow-p-around_medium"
        style={inputStyles}
        label="Input label"
        placeholder="Input with right icon"
        iconPosition="right"
        icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />}
    />
</div>
```

##### input with help

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Input
    label="Input label"
    placeholder="Input with inline help"
    bottomHelpText="ex: (111) 111 1111"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### input required

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Input
    label="Input label"
    placeholder="Input required"
    required
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### input disabled

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Input
    label="Input label"
    value="Input disabled"
    disabled
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### input centered

```js
import React from 'react';
import { Input } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

<Input
    label="Input label"
    placeholder="center"
    isCentered
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### input error

```js
import React from 'react';
import { Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const inputStyles = {
    width: 300,
};

<div className="rainbow-align-content_center rainbow-m-vertical_x-large rainbow-flex_wrap">
    <Input
        label="Input label"
        placeholder="Placeholder text"
        error="This Field is Required"
        className="rainbow-p-around_medium"
        style={inputStyles}
    />

    <Input
        label="Input label"
        placeholder="Placeholder text with icon"
        error="This Field is Required"
        icon={<FontAwesomeIcon icon={faBan} />}
        className="rainbow-p-around_medium"
        style={inputStyles}
    />
</div>
```

##### input read only

```js
import React from 'react';
import { Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const inputStyles = {
    width: 300,
};

<div className="rainbow-align-content_center rainbow-m-vertical_x-large rainbow-flex_wrap">
    <Input
        label="Input Label"
        readOnly
        value="Read Only"
        className="rainbow-p-around_medium"
        style={inputStyles}
    />

    <Input
        label="Input Label"
        readOnly
        value="Read Only with icon left"
        icon={<FontAwesomeIcon icon={faStar} />}
        className="rainbow-p-around_medium"
        style={inputStyles}
    />
</div>
```
