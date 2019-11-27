##### DatePicker base:

```js
import React from 'react';
import { Picklist, PicklistOption, DatePicker } from 'react-rainbow-components';

const initialState = {
    date: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};

const containerStyles = {
    maxWidth: 400,
};

<div>
    <GlobalHeader src="images/user/user2.jpg">
        <div className="rainbow-flex rainbow-align_right">
            <Picklist value={state.locale} onChange={value => setState({ locale: value })}>
                <PicklistOption name="en-US" label="English (US)" />
                <PicklistOption name="es-ES" label="Spanish (Spain)" />
                <PicklistOption name="fr-Fr" label="French" />
            </Picklist>
        </div>
    </GlobalHeader>
    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DatePicker
            id="datePicker-1"
            value={state.date}
            onChange={value => setState({ date: value })}
            label="DatePicker Label"
            formatStyle="large"
            locale={state.locale.name}
        />
    </div>
</div>;
```

##### DatePicker with date constraints:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { date: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        value={state.date}
        minDate={new Date(2018, 0, 4)}
        maxDate={new Date(2020, 0, 4)}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>
```

##### DatePicker with different date formats:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

initialState = { date: new Date() };
<div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-flex_wrap">
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="small"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="medium"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
    <div className="rainbow-m-around_small">
        <DatePicker
            formatStyle="large"
            value={state.date}
            label="DatePicker Label"
            onChange={value => setState({ date: value })}
        />
    </div>
</div>
```

##### DatePicker required:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { date: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        required
        value={state.date}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>
```

##### DatePicker with error:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { date: undefined };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker
        required
        error="Select a date is Required"
        placeholder="Select a date"
        value={state.date}
        label="DatePicker Label"
        onChange={value => setState({ date: value })}
    />
</div>
```

##### DatePicker disabled:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker disabled value={new Date()} label="DatePicker Label" />
</div>
```

##### DatePicker readOnly:

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DatePicker id="datePicker-13" readOnly value={new Date()} label="DatePicker Label" />
</div>
```
