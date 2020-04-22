##### TimeSelectInput base:

```js
import React from 'react';
import { TimeSelectInput } from 'react-rainbow-components';

const containerStyles = {
    display: "flex",
    justifyContent: "center",
};
<div style={containerStyles}>
    <TimeSelectInput
        id="time-select-input-1"
    />;
</div>
```

##### TimeSelectInput with initial value:

```js
import React from 'react';
import { TimeSelectInput } from 'react-rainbow-components';

const containerStyles = {
    display: "flex",
    justifyContent: "center",
};

<div style={containerStyles}>
    <TimeSelectInput
        id="time-select-input-2"
        value="08:00 AM"
    />;
</div>
```

##### TimeSelectInput with 24 hour format:

```js
import React from 'react';
import { TimeSelectInput } from 'react-rainbow-components';

const containerStyles = {
    display: "flex",
    justifyContent: "center",
};

<div style={containerStyles}>
    <TimeSelectInput
        id="time-select-input-2"
        hour24={true}
    />;
</div>
```