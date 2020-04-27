##### WeekDayPicker base:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function SimpleWeekDayPicker(props) {
    const [day, setDay] = useState('monday');

    const handleOnChange = weekDay => {
        setDay(weekDay);
    };

    return (
        <WeekDayPicker
            id="weekday-picker-1"
            label="Week Days"
            bottomHelpText="Select your working days"
            value={day}
            onChange={handleOnChange}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <SimpleWeekDayPicker  />
</div>
```


##### WeekDayPicker days available:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

const availableDates = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

function AvailableDaysWeekDayPicker(props) {
    const [day, setDay] = useState();

    const handleOnChange = weekDay => {
        setDay(weekDay);
    };

    return (
        <WeekDayPicker
            id="weekday-picker-3"
            label="Select a day"
            value={day}
            availableDates={availableDates}
            onChange={handleOnChange}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <AvailableDaysWeekDayPicker  />
</div>
```

##### WeekDayPicker multiple selection:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function MultipleWeekDayPicker(props) {
    const [days, setDays] = useState([]);

    const handleOnChange = weekDays => {
        setDays(weekDays);
    };

    return (
        <WeekDayPicker
            id="weekday-picker-5"
            label="Select your working days"
            value={days}
            multiple
            onChange={handleOnChange}
        /> 
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <MultipleWeekDayPicker  />
</div>
```

##### WeekDayPicker readOnly:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function ReadOnlyWeekDayPicker(props) {
    const [day, setDay] = useState('tuesday');

    return (
        <WeekDayPicker
            id="weekday-picker-7"
            label="Your wroking days"
            value={day}
            readOnly
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <ReadOnlyWeekDayPicker  />
</div>
```

##### WeekDayPicker required:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function RequiredWeekDayPicker(props) {
    const [day, setDay] = useState('monday');

    const handleOnChange = weekDay => {
        setDay(weekDay);
    };

    return (
        <WeekDayPicker
            label="Select a day"
            value={day}
            required
            onChange={handleOnChange}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <RequiredWeekDayPicker  />
</div>
```

##### WeekDayPicker error:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function ErrorWeekDayPicker(props) {
    const [day, setDay] = useState();
    const [error, setError] = useState('This field is required');

    const handleOnChange = weekDay => {
        setDay(weekDay);
        setError(null);
    };

    return (
        <WeekDayPicker
            label="Select a day"
            value={day}
            required
            error={error}
            onChange={handleOnChange}
        />
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <ErrorWeekDayPicker  />
</div>
```

##### WeekDayPicker disabled:

```js
import React from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <WeekDayPicker
        id="weekday-picker-13"
        label="Select a day"
        multiple
        disabled
    />
</div>
```

##### WeekDayPicker localization:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

function LocaleWeekDayPicker(props) {
    return (
        <>
            <div className="rainbow-m-vertical_x-large">
                <WeekDayPicker label="Spanish" locale="es-MX" id="weekday-picker-15"/>
            </div>
            <div className="rainbow-m-vertical_x-large">
                <WeekDayPicker label="Russian" locale="ru-RU" />
            </div>
            <div className="rainbow-m-vertical_x-large">
                <WeekDayPicker label="Japanese" locale="ja-JP" />
            </div>
        </>
    );
};

<div className="rainbow-m-around_xx-large">
    <LocaleWeekDayPicker  />
</div>
```