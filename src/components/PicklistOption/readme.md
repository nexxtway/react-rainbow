##### PicklistOption base

```js
import React from 'react';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 1', label: 'Experimental Building' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                style={containerStyles}
                onChange={value => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
            >
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option 1" label="Experimental Building" />
                <PicklistOption name="option 2" label="Empire State" />
                <PicklistOption name="option 3" label="Plaza" />
                <PicklistOption name="option 4" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>
```

##### PicklistOption with icons

```js
import React from 'react';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: null };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                style={containerStyles}
                placeholder="Choose Building"
                onChange={value => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
            >
                <PicklistOption name="option 1" label="Empire State" icon={<BuildingIcon />} />
                <PicklistOption name="option 2" label="Chrysler Building" icon={<BuildingIcon />} />
                <PicklistOption name="option 3" label="Plaza" icon={<BuildingIcon />} />
                <PicklistOption name="option 4" label="Central Park" icon={<BuildingIcon />} />
            </Picklist>
        </div>
    </GlobalHeader>
</div>
```
