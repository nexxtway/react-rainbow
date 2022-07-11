# Base Calendar
##### To pick a single date you can use a basic calendar.

```js
import React from 'react';
import { Card, Calendar, Picklist, PicklistOption } from 'react-rainbow-components';

const  initialState = {
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

# Calendar with dates contrains
##### If you need to limit the available dates you can do so with `minDate` and `maxDate` props

```js
import React from 'react';
import { Card, Calendar } from 'react-rainbow-components';

const initialState = { date: new Date('2019-11-11 00:00:00') };
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

# Calendar with disabled days
##### If more control over the available dates is needed, the `disabledDays` prop provides a way to disable individual days

```js
import React from 'react';
import { Card, Calendar } from 'react-rainbow-components';

const initialState = { date: new Date('2019-11-11 00:00:00') };
const calendarContainerStyles = {
    width: '28rem',
    height: '27rem',
};

    <div>
        <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
            <Card style={calendarContainerStyles} className="rainbow-p-around_large">
                <Calendar
                    id="calendar-5"
                    value={state.date}
                    onChange={value => setState({ date: value })}
                    disabledDays={['2019/11/15', new Date('2019/11/20')]}
                />
            </Card>
        </div>
    </div>
```

# Calendar with range selection
##### Use `selectionType = 'range'` to allow your users to pick a range of dates

```js
import React from 'react';
import { Card, Calendar } from 'react-rainbow-components';

const initialState = { range: [
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
                    id="calendar-7"
                    selectionType="range"
                    value={state.range}
                    onChange={value => setState({ range: value })}
                    disabledDays={['2019/01/23']}
                />
            </Card>
        </div>
    </div>
```

# Calendar with variant double
##### Set the `variant` prop to 'double' if you want to show two months side by side

```js
import React from 'react';
import { Calendar } from 'react-rainbow-components';

const initialState = { date: new Date('2019-12-11 00:00:00') };
const calendarContainerStyles = {
    maxWidth: '820px'
};

    <div>
        <div className="rainbow-m_auto rainbow-align-content_center rainbow-p-vertical_xx-large"
            style={calendarContainerStyles}
        >
            <Calendar
                id="calendar-9"
                variant="double"
                value={state.date}
                onChange={value => setState({ date: value })}
            />
        </div>
    </div>
```

# Calendar with variant double and range selection
##### The best use case for double variant is to ease the selection of large date ranges

```js
import React from 'react';
import { Calendar } from 'react-rainbow-components';

const initialState = {
    range: [
        new Date(2019, 11, 23),
        new Date(2020, 0, 15)
    ]
};
const calendarContainerStyles = {
    maxWidth: '820px'
};

    <div>
        <div className="rainbow-m_auto rainbow-align-content_center rainbow-p-vertical_xx-large"
            style={calendarContainerStyles}
        >
            <Calendar
                id="calendar-11"
                variant="double"
                selectionType="range"
                value={state.range}
                onChange={value => setState({ range: value })}
                disabledDays={['2020/01/23']}
            />
        </div>
    </div>
```
