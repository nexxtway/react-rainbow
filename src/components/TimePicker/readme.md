##### TimePicker base:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<TimePicker
    id="time-picker-1"
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker with initial value:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { time: '13:32' };

<TimePicker
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker with 24hr format:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { time: '16:32' };

<TimePicker
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    hour24
/>;
```

##### TimePicker required:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<TimePicker
    required
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker with error:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<TimePicker
    required
    error="Select a time is Required"
    value={state.time}
    label="TimePicker Label"
    onChange={value => setState({ time: value })}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker disabled:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<TimePicker
    disabled
    value="-- : -- --"
    label="TimePicker Label"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### TimePicker readOnly:

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<TimePicker
    readOnly
    value="13:32"
    label="TimePicker Label"
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```
