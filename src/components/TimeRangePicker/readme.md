##### TimeRangePicker base:

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    margin: '48px auto',
    maxWidth: 300,
};

<div style={containerStyle}>
    <TimeRangePicker
        id="time-range-picker-1"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
    />
</div>
```

##### TimeRangePicker with 30 min range:

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    margin: '48px auto',
    maxWidth: 300,
};

<div style={containerStyle}>
    <TimeRangePicker
        id="time-range-picker-2"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        sharpHours={false}
    />
</div>
```

##### TimeRangePicker with custom time allowed

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    margin: '48px auto',
    maxWidth: 300,
};

<div style={containerStyle}>
    <TimeRangePicker
        id="time-range-picker-3"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        allowCustomTime={true}
    />
</div>
```

##### TimeRangePicker 24hours

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    margin: '48px auto',
    maxWidth: 300,
};

<div style={containerStyle}>
    <TimeRangePicker
        id="time-range-picker-3"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        hour24
    />
</div>
```


##### TimeRangePicker disabled

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    margin: '48px auto',
    maxWidth: 300,
};

<div style={containerStyle}>
    <TimeRangePicker
        id="time-range-picker-3"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        disabled
    />
</div>
```
