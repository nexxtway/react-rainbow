##### CodeInput base:

```js
import React, { useEffect, useRef, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputBase() {
    const [code, setCode] = useState();
    const codeInputRef = useRef();

    useEffect(() => {
        codeInputRef.current.focus();
    }, []);

    return (
        <CodeInput
            id="codeinput-1"
            value={code}
            label="Enter your Code"
            onChange={setCode}
            ref={codeInputRef}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputBase  />
</div>
```

##### CodeInput with length:

```js
import React, { useState } from 'react';
import { Button, Card, CodeInput } from 'react-rainbow-components';

const labelStyle = {
    fontSize: '16px',
    maxWidth: '287px',
    marginBottom: '40px'
};

function MyLabel() {
    return (
        <div className="rainbow-flex rainbow-justify_center">
            <div style={labelStyle}>To continue, please enter the 6-digit verification code.</div>
        </div>
    );
};

const cardStyle = { padding: '40px' };
const codeInputStyle = { marginBottom: '41px' };

function CodeInputWithLength() {
    const [code, setCode] = useState();
    const [error, setError] = useState();

    const handleOnSubmit = () => {
        const isValid = code.length === 6;
        if(!isValid) {
            setError('Invalid Code');
        }else{
            setError();
        }
    };

    return (
        <Card style={cardStyle}>
            <CodeInput
                id="codeinput-3"
                value={code}
                label={<MyLabel />}
                length={6}
                onChange={setCode}
                style={codeInputStyle}
                error={error}
            />
            <div className="rainbow-flex rainbow-justify_center">
                <Button
                    label="Continue"
                    onClick={handleOnSubmit}
                    variant="brand"
                />
            </div>
        </Card>
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputWithLength  />
</div>
```

##### CodeInput disabled:

```js
import React from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputDisabled() {
    return (
        <CodeInput
            id="codeinput-5"
            label="Enter your Code"
            disabled
            bottomHelpText="This is a disabled CodeInput"
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputDisabled  />
</div>
```

##### CodeInput error:

```js
import React from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputError() {
    return (
        <CodeInput
            id="codeinput-7"
            label="Enter your Code"
            error="Looks like the code is invalid"
            required
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputError  />
</div>
```

##### CodeInput readOnly:

```js
import React from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputReadOnly() {
    return (
        <CodeInput
            id="codeinput-9"
            label="Enter your Code"
            value="1234"
            readOnly
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputReadOnly  />
</div>
```
