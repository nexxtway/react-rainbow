##### DateTimePicker base:

```js
import React from 'react';
import { DateTimePicker, Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = {
    value: new Date('2019-10-25 10:44'),
    locale: { name: 'en-US', label: 'English (US)' },
};

const okButtonLocalizedLabel = {
    'en-US': 'OK',
    'es-ES': 'Aceptar',
    'fr-Fr': "D'accord",
};

const cancelButtonLocalizedLabel = {
    'en-US': 'Cancel',
    'es-ES': 'Cancelar',
    'fr-Fr': 'Annuler',
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
        <DateTimePicker
            id="datetimepicker-1"
            label="DateTimePicker label"
            value={state.value}
            onChange={value => setState({ value })}
            formatStyle="large"
            locale={state.locale.name}
            okLabel={okButtonLocalizedLabel[state.locale.name]}
            cancelLabel={cancelButtonLocalizedLabel[state.locale.name]}
        />
    </div>
</div>;
```

##### DateTimePicker with date constraints:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        value={state.value}
        minDate={new Date(2018, 0, 4)}
        maxDate={new Date(2020, 0, 4)}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>
```

##### DateTimePicker with different date formats:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const inputStyles = {
    maxWidth: 320,
};

initialState = { value: new Date() };

<div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-flex_wrap">
    <DateTimePicker
        formatStyle="small"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
    <DateTimePicker
        formatStyle="medium"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
    <DateTimePicker
        formatStyle="large"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        style={inputStyles}
    />
</div>
```

##### DateTimePicker with time in 24h format:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { value: new Date('2019-10-25 18:44') };

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
        className="rainbow-m-around_small"
        hour24
    />
</div>
```

##### DateTimePicker required:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { value: new Date() };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        required
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>
```

##### DateTimePicker with error:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

initialState = { value: undefined };
<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker
        id="datetimepicker-11"
        required
        error="Field is required"
        placeholder="Select date and time"
        value={state.value}
        label="DateTimePicker Label"
        onChange={value => setState({ value })}
    />
</div>
```

##### DateTimePicker disabled:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker disabled value={new Date()} label="DateTimePicker Label" />
</div>
```

##### DateTimePicker readOnly:

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

<div
    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
    style={containerStyles}
>
    <DateTimePicker readOnly value={new Date()} label="DateTimePicker Label" />
</div>
```
