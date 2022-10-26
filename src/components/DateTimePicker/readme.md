# DateTimePicker base
##### Use a `DateTimePicker` to allow users to select a date and time with a friendly user interface.

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

# DateTimePicker with date constraints
##### Use `minDate` and `maxDate` to limit the available dates.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { value: new Date() };

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

# DateTimePicker with different date formats
##### Use the `formatStyle` prop to customize the date format.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const inputStyles = {
    maxWidth: 320,
};

const initialState = { value: new Date() };

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

# DateTimePicker with time in 24h format
##### Pass the `use24` prop to show the time in 24H format.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { value: new Date('2019-10-25 18:44') };

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

# DateTimePicker required
##### You can pass the `required` prop to mark the input as required.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { value: new Date() };
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

# DateTimePicker with error
##### Pass the `error` prop to indicate that there is an error in the input.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { value: undefined };
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

# DateTimePicker disabled
##### Use the `disabled` prop to render the input as disabled.

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

# DateTimePicker readOnly
##### Pass the `readOnly` prop to prevent the user from modifying the value.

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

# DateTimePicker with custom FontAwesome icon
##### It is possible to provide a custom icon for the input if you pass the `icon` prop.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 400,
};

    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DateTimePicker
            value={new Date()}
            label="DateTimePicker Label"
            icon={<FontAwesomeIcon icon={faCalendar} />}
        />
    </div>
```

# DateTimePicker with custom SVG icon
##### It is possible to provide a custom icon for the input if you pass the `icon` prop.

```js
import React from 'react';
import { DateTimePicker } from 'react-rainbow-components';
import styled from 'styled-components';
import { Picture } from '@rainbow-modules/icons'

const containerStyles = {
    maxWidth: 400,
};

const PictureIcon = styled(Picture)`
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DateTimePicker
            value={new Date()}
            label="DateTimePicker Label"
            icon={<PictureIcon />}
        />
    </div>
```


# DateTimePicker with different border radius
##### Use the `borderRadius` prop to change the border radius of the DateTimePicker.

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
                label="DateTimePicker with border radius square"
                value={state.value}
                onChange={value => setState({ value })}
                formatStyle="large"
                locale={state.locale.name}
                okLabel={okButtonLocalizedLabel[state.locale.name]}
                cancelLabel={cancelButtonLocalizedLabel[state.locale.name]}
                borderRadius="square"
            />
        </div>
        <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
        >
            <DateTimePicker
                id="datetimepicker-1"
                label="DateTimePicker with border radius semi-rounded"
                value={state.value}
                onChange={value => setState({ value })}
                formatStyle="large"
                locale={state.locale.name}
                okLabel={okButtonLocalizedLabel[state.locale.name]}
                cancelLabel={cancelButtonLocalizedLabel[state.locale.name]}
                borderRadius="semi-rounded"
            />
        </div>
        <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
        >
            <DateTimePicker
                id="datetimepicker-1"
                label="DateTimePicker with border radius rounded"
                value={state.value}
                onChange={value => setState({ value })}
                formatStyle="large"
                locale={state.locale.name}
                okLabel={okButtonLocalizedLabel[state.locale.name]}
                cancelLabel={cancelButtonLocalizedLabel[state.locale.name]}
                borderRadius="rounded"
            />
        </div>
    </div>;
```