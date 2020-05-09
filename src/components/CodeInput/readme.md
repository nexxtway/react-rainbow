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
import React, { useRef, useState } from 'react';
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

function CodeInputBase() {
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
    <CodeInputBase  />
</div>
```