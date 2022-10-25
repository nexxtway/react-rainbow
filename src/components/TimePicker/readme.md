# TimePicker base:
##### Use a `TimePicker` to allow users to pick a time with a friendly user interface.

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
    />
```

# TimePicker with initial value:
##### To set the initial time, just pass it in the `value` prop.

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { time: '13:32' };

    <TimePicker
        value={state.time}
        label="TimePicker Label"
        onChange={value => setState({ time: value })}
        style={containerStyles}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    />
```

# TimePicker with 24hr format:
##### Pass the `hour24` prop to format the time as 24hr clock.

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { time: '16:32' };

    <TimePicker
        value={state.time}
        label="TimePicker Label"
        onChange={value => setState({ time: value })}
        style={containerStyles}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        hour24
    />
```

# TimePicker required:
##### You can pass the `required` prop to mark the input as required.

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
    />
```

# TimePicker with error:
##### Pass the `error` prop to indicate that there is an error in the input.

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
    />
```

# TimePicker disabled:
##### Use the `disabled` prop to render the input as disabled.

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
    />
```

# TimePicker readOnly:
##### Pass the `readOnly` prop to prevent the user from modifying the value.

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
    />
```

# TimePicker with custom icon:
##### It is possible to provide a custom icon for the input if you pass the `icon` prop.

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 400,
};

    <TimePicker
        value="13:32"
        label="TimePicker Label"
        style={containerStyles}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        icon={<FontAwesomeIcon icon={faClock} />}
    />
```

# TimePicker with different border radius:
##### If you need to change the border radius of your TimePicker, you can do so using the `borderRadius` prop.

```js
import React from 'react';
import { TimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

    <>
        <TimePicker
            id="time-picker-1"
            value={state.time}
            label="TimePicker with border radius square"
            onChange={value => setState({ time: value })}
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="square"
        />
        <TimePicker
            id="time-picker-1"
            value={state.time}
            label="TimePicker with border radius semi-rounded"
            onChange={value => setState({ time: value })}
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="semi-rounded"
        />
        <TimePicker
            id="time-picker-1"
            value={state.time}
            label="TimePicker with border radius rounded"
            onChange={value => setState({ time: value })}
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            borderRadius="rounded"
        />
    </>
```