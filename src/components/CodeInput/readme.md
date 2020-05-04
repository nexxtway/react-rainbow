##### CodeInput base:

```js
import React, { useEffect, useRef, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputBase() {
    const [code, setCode] = useState();
    const inputRef = useRef();

    const handleOnChange = (code) => {
        console.log('CODE', code);
        setCode(code);
    };


    return (
        <CodeInput
            id="codeinput-1"
            value={code}
            label="Code"
            required={true}
            onChange={handleOnChange}
            bottomHelpText="Fill the validation code"
            ref={inputRef}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputBase  />
</div>
```

##### CodeInput base:

```js
import React, { useEffect, useRef, useState } from 'react';
import { CodeInput } from 'react-rainbow-components';

function CodeInputBase() {
    const [code, setCode] = useState('999999999');
    const inputRef = useRef();

    const handleOnChange = (code) => {
        console.log(code);
        setCode(code);
    };


    return (
        <CodeInput
            id="codeinput-1"
            value={code}
            label="Code"
            length={6}
            required={true}
            onChange={handleOnChange}
            bottomHelpText="Fill the validation code"
            ref={inputRef}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <CodeInputBase  />
</div>
```
 No newline at end of file
