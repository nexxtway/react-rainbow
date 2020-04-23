##### StrongPasswordInput base

```js
import React from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

<StrongPasswordInput
    id="strong-password-input-1"
    label="Password"
    placeholder="Placeholder text"
    style={containerStyles}
    bottomHelpText="Your password must be at least 8 characters long."
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>
```

##### StrongPasswordInput with icon

```js
import React from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 500,
};

<StrongPasswordInput
    id="strong-password-input-3"
    label="Password"
    placeholder="Placeholder text"
    style={containerStyles}
    bottomHelpText="Your password must be at least 8 characters long."
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    icon={<FontAwesomeIcon icon={faKey} />}
/>
```

##### StrongPasswordInput working

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

function ControlledStrongPasswordInput(props) {
    const [value, setValue] = useState('');

    function handleOnChange(event) {
        setValue(event.target.value);
    }

    function getStrength() {
        const length = value.length;
        if (length === 0) {
            return undefined;
        }
        if (length <= 3) {
            return 'poor';
        }        
        if (length > 3 && length < 8) {
            return 'average';
        }        
        return 'strong';
    }

    const passwordState = getStrength();

    return (
        <StrongPasswordInput
            id="strong-password-input-5"
            label="Password"
            placeholder="Placeholder text"
            value={value}
            style={containerStyles}
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            passwordState={passwordState}
            passwordStateLabel={passwordState}
            onChange={handleOnChange}
            required
        />
    )
}

<ControlledStrongPasswordInput />
```

##### StrongPasswordInput working without password state label

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

function ControlledStrongPasswordInput(props) {
    const [value, setValue] = useState('');

    function handleOnChange(event) {
        setValue(event.target.value);
    }

    function getStrength() {
        const length = value.length;
        if (length === 0) {
            return undefined;
        }
        if (length <= 3) {
            return 'poor';
        }        
        if (length > 3 && length < 8) {
            return 'average';
        }        
        return 'strong';
    }

    const passwordState = getStrength();

    return (
        <StrongPasswordInput
            id="strong-password-input-7"
            label="Password"
            placeholder="Placeholder text"
            value={value}
            style={containerStyles}
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            passwordState={passwordState}
            onChange={handleOnChange}
            required
        />
    )
}

<ControlledStrongPasswordInput />
```
