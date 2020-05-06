##### CodeInput base:

```js
import React, { useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputBase() {
    const [code, setCode] = useState();

    return (
        <CodeInput
            id="codeinput-1"
            value={code}
            label="Code"
            required={true}
            onChange={(code) => { setCode(code); }}
            bottomHelpText="Fill the validation code"
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputBase  />
</div>
```
##### CodeInput base:

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

function CodeInputBase() {
    const [code, setCode] = useState();

    return (
        <Card style={cardStyle}>
            <CodeInput
                id="codeinput-3"
                value={code}
                label={<MyLabel />}
                codeLength={6}
                onChange={(code) => setCode(code)}
                style={codeInputStyle}
            />
            <div className="rainbow-flex rainbow-justify_center">
                <Button
                    label="CONTINUE"
                    onClick={() => alert(code)}
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
 No newline at end of file

 
