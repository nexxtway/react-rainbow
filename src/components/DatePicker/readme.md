# The basic DatePicker
##### Our DatePicker component comes, of course, with our rainbow styles out of the box, as you can see in the example below.
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

# DatePicker with date constraints
##### In our DatePicker, you can also restrict the date range using the props `minDate` and `maxDate`. An example of how to
##### use it can be seen below.
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
##### You can also modify the style of the selected date with the prop `formatStyle`. So far we have 3 formats: small, medium,
##### and large.
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
##### If you need the DatePicker to be a required field in a form, the only thing you have to do is to pass it the
##### `required` prop and it will be marked as required using a red asterisk in the upper right corner of the label.
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
##### Another thing that you may need is to show an error message in case of failure of some validation in a form.
##### You can do it by simply passing this message to the `error` prop. The error will also be indicated on the DatePicker
##### with a red border to highlight that there was an error.

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
##### The DatePicker can be displayed as disabled. With the `disabled` prop, all the functionalities will be deactivated.
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

# DatePicker with readOnly
##### Another way to acquire an effect similar to disabled is with the `readOnly` prop, as you can see in the example below.
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
##### An additional cool feature is the ability to choose a date range and not a specific one.
##### You can do this with `selectionType` prop, as you can see below.
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

# DatePicker with double variant
##### Finally, if you need to choose date ranges in two different months, you could use the `variant` prop to
##### show two consecutive months at the same time.
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

# Example of a DatePicker usage
##### The example below shows a real use case with most DatePicker functionalities.
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
