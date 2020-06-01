##### Calendar base:

```js
import React from 'react';
import { Card, Calendar, Avatar, Picklist, PicklistOption } from 'react-rainbow-components';

initialState = {
    date: new Date('2019-12-06 00:00:00'),
    locale: { name: 'en-US', label: 'English' },
};

const calendarContainerStyles = {
    width: '28rem',
    height: '27rem',
};
const selectStyles = {
    width: '8rem',
};

<div>
    <GlobalHeader src="images/user/user2.jpg">
        <div className="rainbow-flex rainbow-align_right" style={selectStyles}>
            <Picklist value={state.locale} onChange={value => setState({ locale: value })}>
                <PicklistOption name="en-US" label="English" />
                <PicklistOption name="es-ES" label="Español" />
                <PicklistOption name="ja" label="日本語" />
                <PicklistOption name="fr-Fr" label="Français" />
                <PicklistOption name="zh" label="日文" />
                <PicklistOption name="de" label="Deutsch" />
            </Picklist>
        </div>
    </GlobalHeader>
    <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
        <Card style={calendarContainerStyles} className="rainbow-p-around_large">
            <Calendar
                id="calendar-1"
                locale={state.locale.name}
                value={state.date}
                onChange={value => setState({ date: value })}
            />
        </Card>
    </div>
</div>
```

##### Calendar with dates contrains:

```js
import React from 'react';
import { Card, Calendar, Avatar } from 'react-rainbow-components';

initialState = { date: new Date('2019-11-11 00:00:00') };
const calendarContainerStyles = {
    width: '28rem',
    height: '27rem',
};

<div>
    <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <Card style={calendarContainerStyles} className="rainbow-p-around_large">
            <Calendar
                id="calendar-3"
                value={state.date}
                minDate={new Date(2018, 0, 4)}
                maxDate={new Date(2020, 0, 4)}
                onChange={value => setState({ date: value })}
            />
        </Card>
    </div>
</div>
```

##### Calendar with range selection:

```js
import React from 'react';
import { Card, Calendar, Avatar } from 'react-rainbow-components';

initialState = { range: [
    new Date(2019, 0, 3),
    new Date(2019, 0, 15)
] };
const calendarContainerStyles = {
    width: '28rem',
    height: '27rem',
};

<div>
    <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <Card style={calendarContainerStyles} className="rainbow-p-around_large">
            <Calendar
                selectionType="range"
                value={state.range}
                onChange={value => setState({ range: value })}
            />
        </Card>
    </div>
</div>
```

##### Calendar with variant double:

```js
import React from 'react';
import { Calendar } from 'react-rainbow-components';

initialState = { date: new Date('2019-12-11 00:00:00') };
const calendarContainerStyles = {
    width: '80%',
};

<div>
    <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_small">
        <div style={calendarContainerStyles}>
            <Calendar
                variant="double"
                value={state.date}
                onChange={value => setState({ date: value })}
            />
        </div>
    </div>
</div>
```

##### Calendar with variant double and range selection:

```js
import React from 'react';
import { Calendar } from 'react-rainbow-components';

initialState = {
    range: [
        new Date(2019, 11, 23),
        new Date(2020, 0, 15)
    ]
};
const calendarContainerStyles = {
    width: '80%',
};

<div>
    <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_small">
        <div style={calendarContainerStyles}>
            <Calendar
                variant="double"
                selectionType="range"
                value={state.range}
                onChange={value => setState({ range: value })}
            />
        </div>
    </div>
</div>
```
