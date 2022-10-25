# DatePicker base
##### Use a `DatePicker` to allow users to select a date with a friendly user interface.

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
    </div>
```

# DatePicker with different border radius
##### Use the `borderRadius` prop to change the border radius of the DatePicker.

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
                label="DatePicker Border Radius Square"
                formatStyle="large"
                locale={state.locale.name}
                borderRadius="square"
            />
        </div>
        <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
        >
            <DatePicker
                id="datePicker-1"
                value={state.date}
                onChange={value => setState({ date: value })}
                label="DatePicker Border Radius Semi-Rounded"
                formatStyle="large"
                locale={state.locale.name}
                borderRadius="semi-rounded"
            />
        </div>
        <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
        >
            <DatePicker
                id="datePicker-1"
                value={state.date}
                onChange={value => setState({ date: value })}
                label="DatePicker Border Radius Rounded"
                formatStyle="large"
                locale={state.locale.name}
                borderRadius="rounded"
            />
        </div>
    </div>
```

# DatePicker with date constraints
##### Use `minDate` and `maxDate` to limit the available dates.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { date: new Date() };

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

# DatePicker with different date formats
##### Use the `formatStyle` prop to customize the date format.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const initialState = { date: new Date() };

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

# DatePicker required
##### You can pass the `required` prop to mark the input as required.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { date: new Date() };

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

# DatePicker with error
##### Pass the `error` prop to indicate that there is an error in the input.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const initialState = { date: undefined };

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

# DatePicker disabled
##### Use the `disabled` prop to render the input as disabled.

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
    </div>;
```

# DatePicker readOnly
##### Pass the `readOnly` prop to prevent the user from modifying the value.

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

# DatePicker with range selection
##### You can allow the users to select a date range passing the `selectionType` prop as 'range'.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const initialState = {
    range: undefined,
};
const containerStyles = {
    maxWidth: 400,
};

    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DatePicker
            id="datePicker-15"
            label="DatePicker Label"
            placeholder="Select range of dates"
            selectionType="range"
            formatStyle="large"
            variant="single"
            value={state.range}
            onChange={value => setState({ range: value })}
        />
    </div>
```

# DatePicker with variant double
##### Use the 'double' variant to show two months side by side.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';

const initialState = {
    date: undefined,
};
const containerStyles = {
    maxWidth: 400,
};

    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DatePicker
            id="datePicker-17"
            label="DatePicker Label"
            placeholder="Select date"
            variant="double"
            value={state.date}
            onChange={date => setState({ date })}
        />
    </div>
```

# DatePicker with custom icon
##### It is possible to provide a custom icon for the input if you pass the `icon` prop.

```js
import React from 'react';
import { DatePicker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    date: undefined,
};
const containerStyles = {
    maxWidth: 400,
};

    <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
    >
        <DatePicker
            id="datePicker-19"
            label="DatePicker Label"
            placeholder="Select date"
            value={state.date}
            onChange={date => setState({ date })}
            icon={<FontAwesomeIcon icon={faCalendar} />}
        />
    </div>
```

# DatePicker select date
##### This is an example use case for the DatePicker component

```js
import React from 'react';
import { DatePicker, Input, Avatar } from 'react-rainbow-components';
import styled from 'styled-components';

const initialState = {
    date: '',
};

const Title = styled.h2`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 2rem;
    margin: 0 0.5rem 0 1rem;
`;

const Name = styled.h1`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 2rem;
    margin: 0 0.5rem 0 1rem;
    font-weight: 800;
`;

const Email = styled.p`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 1rem;
    margin: 0 0.5rem 0 1rem;
`;

const StyledAvatar = styled(Avatar)`
    width: 100px;
    height: 100px;
    box-shadow: 0 2px 4px 0 rgba(6, 28, 63, 0.3);
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const StyledDatePicker = styled.div`
    max-width: 400px;
    min-width: 250px;
`;

const StyledInput = styled.div`
    max-width: 400px;
    min-width: 250px;
`;

    <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_column">
        <div className="rainbow-m-vertical_medium">
            <Title>Complete your Information</Title>
        </div>
        <div className="rainbow-flex rainbow-align_center rainbow-m-vertical_medium">
            <div>
                <StyledAvatar src="images/user/avatar-5.svg" />
            </div>
            <div>
                <Name>Ana Doe</Name>
                <Email>ana@gmail.com</Email>
            </div>
        </div>
        <StyledDatePicker className="rainbow-m-vertical_medium">
            <DatePicker
                id="datePicker-1"
                placeholder="Select your DOB"
                value={state.date}
                onChange={value => setState({ date: value })}
                label="Birthday"
                formatStyle="medium"
                locale="en-US"
            />
        </StyledDatePicker>
        <StyledInput className="rainbow-m-vertical_medium">
            <Input id="input-component-1" label="Company Name" placeholder="Enter company name" />
        </StyledInput>
    </div>
```
