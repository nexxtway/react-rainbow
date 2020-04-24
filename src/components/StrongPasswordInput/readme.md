##### StrongPasswordInput base

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
            return 'weak';
        }        
        if (length > 3 && length < 8) {
            return 'average';
        }        
        return 'strong';
    }

    const passwordState = getStrength();

    return (
        <StrongPasswordInput
            id="strong-password-input-1"
            label="Password"
            placeholder="Placeholder text"
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            style={containerStyles}
            value={value}
            passwordState={passwordState}
            onChange={handleOnChange}
        />
    )
}

<ControlledStrongPasswordInput />
```

##### StrongPasswordInput with icon

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

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
            return 'weak';
        }        
        if (length > 3 && length < 8) {
            return 'average';
        }        
        return 'strong';
    }

    const passwordState = getStrength();

    return (
        <StrongPasswordInput
            id="strong-password-input-3"
            label="Password"
            placeholder="Placeholder text"
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            style={containerStyles}
            value={value}
            passwordState={passwordState}
            onChange={handleOnChange}
            icon={<FontAwesomeIcon icon={faKey} />}
        />
    )
}

<ControlledStrongPasswordInput />
```

##### StrongPasswordInput with password state label

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

const passwordStateLabels = {
    weak: 'Weak',
    average: 'Average',
    strong: 'Strong',
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
            return 'weak';
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
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            style={containerStyles}
            value={value}
            passwordState={passwordState}
            passwordStateLabels={passwordStateLabels}
            onChange={handleOnChange}
        />
    )
}

<ControlledStrongPasswordInput />
```

##### StrongPasswordInput with error

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
            return 'weak';
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
            bottomHelpText="Your password must be at least 8 characters long."
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            error="This field is required"
            style={containerStyles}
            value={value}
            passwordState={passwordState}
            onChange={handleOnChange}
            required
        />
    )
}

<ControlledStrongPasswordInput />
```

##### StrongPasswordInput disabled

```js
import React from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

<StrongPasswordInput
    id="strong-password-input-9"
    label="Password"
    placeholder="Placeholder text"
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    style={containerStyles}
    disabled
/>
```
