##### StrongPasswordInput base

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

function ControlledStrongPasswordInput() {
    const [value, setValue] = useState('');

    const handleOnChange = event => {
        setValue(event.target.value);
    }

    const getStrength = () => {
        const { length } = value;
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

function ControlledStrongPasswordInput() {
    const [value, setValue] = useState('');

    const handleOnChange = event => {
        setValue(event.target.value);
    }

    const getStrength = () => {
        const { length } = value;
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

function ControlledStrongPasswordInput() {
    const [value, setValue] = useState('');

    const handleOnChange = event => {
        setValue(event.target.value);
    }

    const getStrength = () => {
        const { length } = value;
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

function ControlledStrongPasswordInput() {
    const [value, setValue] = useState('');

    const handleOnChange = event => {
        setValue(event.target.value);
    }

    const getStrength = () => {
        const { length } = value;
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

##### StrongPasswordInput with different border radius

```js
import React, { useState } from 'react';
import { StrongPasswordInput } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 500,
};

function ControlledStrongPasswordInput() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const handleOnChange1 = event => {
        setValue1(event.target.value);
    }
    const handleOnChange2 = event => {
        setValue2(event.target.value);
    }
    const handleOnChange3 = event => {
        setValue3(event.target.value);
    }

    const getStrength = value => {
        const { length } = value;
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

    const passwordState1 = getStrength(value1);
    const passwordState2 = getStrength(value2);
    const passwordState3 = getStrength(value3);

    return (
        <>
            <StrongPasswordInput
                id="strong-password-input-1"
                label="Password with border radius square"
                placeholder="Placeholder text"
                bottomHelpText="Your password must be at least 8 characters long."
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                value={value1}
                passwordState={passwordState1}
                onChange={handleOnChange1}
                borderRadius="square"
            />
            <StrongPasswordInput
                id="strong-password-input-2"
                label="Password with border radius semi-rounded"
                placeholder="Placeholder text"
                bottomHelpText="Your password must be at least 8 characters long."
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                value={value2}
                passwordState={passwordState2}
                onChange={handleOnChange2}
                borderRadius="semi-rounded"
            />
            <StrongPasswordInput
                id="strong-password-input-3"
                label="Password with border radius rounded"
                placeholder="Placeholder text"
                bottomHelpText="Your password must be at least 8 characters long."
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                value={value3}
                passwordState={passwordState3}
                onChange={handleOnChange3}
                borderRadius="rounded"
            />
        </>
    )
}

    <ControlledStrongPasswordInput />
```