##### Picklist base

```js
import React from 'react';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 3', label: 'Central Park' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-1"
                style={containerStyles}
                onChange={value => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
            >
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option 1" label="Experimental Building" />
                <PicklistOption name="option 2" label="Empire State" />
                <PicklistOption name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist with multiple options

```js
import React from 'react';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: null };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user1.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-3"
                style={containerStyles}
                placeholder="Choose Building"
                onChange={value => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
            >
                <PicklistOption name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                <PicklistOption name="option 2" label="New Building" icon={<AddFilledIcon />} />
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option 3" label="Experimental" icon={<BuildingIcon />} />
                <PicklistOption name="option 4" label="Bennet Towers" icon={<BuildingIcon />} />
                <PicklistOption name="option 5" label="Empire State" icon={<BuildingIcon />} />
                <PicklistOption name="option 6" label="Central Park" icon={<BuildingIcon />} />
                <PicklistOption name="option 7" label="Chrysler" icon={<BuildingIcon />} />
                <PicklistOption name="option 8" label="Plaza" icon={<BuildingIcon />} />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist disabled

```js
import React from 'react';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    width: '180px',
};

initialState = { value: { name: 'option 1', label: 'All Buildings' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                disabled
                value={state.value}
                label="Select Building"
                hideLabel
                style={containerStyles}
            >
                <PicklistOption name="option 1" label="Experimental Building" />
                <PicklistOption name="option 2" label="Empire State" />
                <PicklistOption name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist with redux-form

```js
import React from 'react';
import { Picklist, PicklistOption, Button } from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';

const containerStyles = {
    width: '140px',
};

function Form({ handleSubmit, onSubmit }) {
    return (
        <form
            className="rainbow-flex rainbow-align_right rainbow-flex_wrap"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Field
                style={containerStyles}
                component={Picklist}
                name="option"
                placeholder="Choose"
                label="Select Building"
                hideLabel
            >
                <PicklistOption name="option 1" label="All Buildings" />
                <PicklistOption name="option 2" label="New Building" />
                <PicklistOption name="header 2" label="Your Buildings" variant="header" />
                <PicklistOption name="option 3" label="Experimental" />
                <PicklistOption name="option 4" label="Empire State" />
            </Field>
            <Button className="rainbow-m-left_small" label="Send" type="submit" />
        </form>
    );
}

const PicklistForm = reduxForm({
    form: 'picklist-form',
    touchOnBlur: false,
})(Form);

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <PicklistForm onSubmit={values => console.log(values)} />
    </GlobalHeader>
</div>;
```
