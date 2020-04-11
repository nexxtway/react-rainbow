##### WeekDayPicker base:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

const SimpleWeekDayPicker = (props) => {
    const [day, setDay] = useState('');

    const handleOnChange = e => {
        const weekDay = e.currentTarget.value;
        setDay(weekDay);
        console.log(weekDay);
    };

    return (
        <WeekDayPicker 
            label="Select a day" 
            value={day}
            onChange={(e) => handleOnChange(e)}
        /> 
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <SimpleWeekDayPicker  />
</div>
```

##### WeekDayPicker multiple selection:

```js
import React, { useState, useEffect } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

const MultipleWeekDayPicker = (props) => {
    const [days, setDays] = useState([]);

    useEffect( () => {
        console.log(days);
    }, [days])

    const handleOnChange = e => {
        const weekDay = e.currentTarget.value;
        const isChecked = e.currentTarget.checked;

        if (isChecked && !days.includes(weekDay)) {
            setDays([...days, weekDay]);
        } else {
            setDays(days.filter(day => day !== weekDay))
        }
    };

    return (
        <WeekDayPicker 
            label="Select active days" 
            value={days}
            multiple={true}
            onChange={(e) => handleOnChange(e)}
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

const ReadOnlyWeekDayPicker = (props) => {
    const [day, setDay] = useState('tuesday');

    return (
        <WeekDayPicker 
            label="Select a day (readOnly)" 
            value={day}
            readOnly={true}
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

const RequiredWeekDayPicker = (props) => {
    const [day, setDay] = useState('');

    const handleOnChange = e => {
        const weekDay = e.currentTarget.value;
        setDay(weekDay);
        console.log(weekDay);
    };

    return (
        <WeekDayPicker 
            label="Select a day" 
            value={day}
            required={true}
            onChange={(e) => handleOnChange(e)}
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

const ErrorWeekDayPicker = (props) => {
    const [day, setDay] = useState('');
    const [error, setError] = useState('This field is required');

    const handleOnChange = e => {
        const weekDay = e.currentTarget.value;
        setDay(weekDay);
        setError(null);
    };

    return (
        <WeekDayPicker 
            label="Select a day" 
            value={day}
            required={true}
            error={error}
            onChange={(e) => handleOnChange(e)}
        /> 
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <ErrorWeekDayPicker  />
</div>
```

##### WeekDayPicker disabled:

```js
import React, { useState } from 'react';
import { WeekDayPicker } from 'react-rainbow-components';

const DisabledWeekDayPicker = (props) => {

    return (
        <WeekDayPicker 
            label="Select a day" 
            value={['monday', 'saturday']}
            multiple={true}
            disabled={true}
        /> 
    );
};

<div className="rainbow-align-content_center rainbow-m-around_xx-large">
    <DisabledWeekDayPicker  />
</div>
```