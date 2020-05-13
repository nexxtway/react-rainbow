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
            label="Code"
            required
            onChange={setCode}
            bottomHelpText="Fill the validation code"
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
                    label="CONTINUE"
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

##### CodeInput events:

```js
import React, { useEffect, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputEvents() {
    const [code, setCode] = useState();
    const [eventName, setEventName] = useState('interact to see events in action');

    return (
        <>
            <div>
                <CodeInput
                    className="rainbow-m-bottom_large"
                    id="codeinput-5"
                    value={code}
                    label="Code"
                    onChange={code => setCode(code)}
                    onClick={(e) => setEventName('onClick')}
                    onFocus={(e) => setEventName('onFocus')}
                    onBlur={(e) => setEventName('onBlur')}
                    onKeyDown={(e) => setEventName('onKeyDown')}
                />
                <p className="rainbow-align-content_center">
                    Event -- {eventName}
                </p>
            </div>
        </>
    
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputEvents  />
</div>
```

##### CodeInput readOnly:

```js
import React from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputReadOnly() {
    return (
        <CodeInput
            id="codeinput-7"
            label="Code"
            readOnly
            bottomHelpText="This is a readOnly CodeInput"
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputReadOnly  />
</div>
```