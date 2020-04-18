##### TimeRangePicker base:

```js
import React from 'react';
import { TimeRangePicker } from 'react-rainbow-components';

const containerStyle = {
    width: "280px"
};

<div className="rainbow-m-around_medium rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <TimeRangePicker
        style={containerStyle}
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
    width: "280px"
};

<div className="rainbow-m-around_medium rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <TimeRangePicker
        style={containerStyle}
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
    width: "280px"
};

<div className="rainbow-m-around_medium rainbow-p-horizontal_large rainbow-align-content_center">
    <TimeRangePicker
        style={containerStyle}
        className="rainbow-m-horizontal_x-large"
        id="time-range-picker-3"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        allowCustomTime={true}
    />
    <TimeRangePicker
        className="rainbow-m-horizontal_x-large"
        style={containerStyle}
        id="time-range-picker-4"
        label="TimeRangePicker Label"
        value="08:00 - 16:00"
        allowCustomTime={true}
    />
</div>
```