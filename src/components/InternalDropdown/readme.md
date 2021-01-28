##### Basic:

```js
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { PicklistOption } from 'react-rainbow-components';

function BasicInternalDropdown() {
    const [value, setValue] = useState();
    return (
        <div className="rainbow-m-around_xx-large">
            <InternalDropdown id="internal-dropdown-1" value={value} onChange={setValue}>
                <PicklistOption name="option-1" label="All Buildings" icon={<DashboardIcon />} />
                <PicklistOption name="option-2" label="New Building" icon={<AddFilledIcon />} />
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option-3" label="Experimental" icon={<BuildingIcon />} />
                <PicklistOption name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
                <PicklistOption name="option-5" label="Empire State" icon={<BuildingIcon />} />
                <PicklistOption name="option-6" label="Central Park" icon={<BuildingIcon />} />
                <PicklistOption name="option-7" label="Chrysler" icon={<BuildingIcon />} />
                <PicklistOption name="option-8" label="Plaza" icon={<BuildingIcon />} />
            </InternalDropdown>
        </div>
    );
}

    <BasicInternalDropdown />
```

##### With search input:

```js
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { PicklistOption } from 'react-rainbow-components';

function InternalDropdownWithSearch() {
    const [value, setValue] = useState();
    return (
        <div className="rainbow-m-around_xx-large">
            <InternalDropdown id="internal-dropdown-3" value={value} onChange={setValue} enableSearch>
                <PicklistOption name="option-1" label="All Buildings" icon={<DashboardIcon />} />
                <PicklistOption name="option-2" label="New Building" icon={<AddFilledIcon />} />
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option-3" label="Experimental" icon={<BuildingIcon />} />
                <PicklistOption name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
                <PicklistOption name="option-5" label="Empire State" icon={<BuildingIcon />} />
                <PicklistOption name="option-6" label="Central Park" icon={<BuildingIcon />} />
                <PicklistOption name="option-7" label="Chrysler" icon={<BuildingIcon />} />
                <PicklistOption name="option-8" label="Plaza" icon={<BuildingIcon />} />
            </InternalDropdown>
        </div>
    );
}

    <InternalDropdownWithSearch />
```

##### With search input and custom search:

```js
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Option } from 'react-rainbow-components';

const initialOptions = [
    {
        name: 'option-1',
        label: 'Experimental'
    },
    {
        name: 'option-2',
        label: 'Bennet Towers'
    },
    {
        name: 'option-3',
        label: 'Empire State'
    },
    {
        name: 'option-4',
        label: 'Central Park'
    },
    {
        name: 'option-5',
        label: 'Chrysler'
    },
    {
        name: 'option-6',
        label: 'Empire State'
    },
    {
        name: 'option-7',
        label: 'Empire State'
    },
    {
        name: 'option-8',
        label: 'Empire State'
    },
    {
        name: 'option-9',
        label: 'Empire State'
    },
    {
        name: 'option-10',
        label: 'Empire State'
    },
    {
        name: 'option-11',
        label: 'Empire State'
    },
    {
        name: 'option-12',
        label: 'Empire State'
    },
]

function InternalDropdownWithSearch() {
    const [value, setValue] = useState();
    const [options, setOptions] = useState(initialOptions);
    const onSearch = query => {
        if (query) {
            return setOptions(initialOptions.filter(opt => opt.label.startsWith(query)));
        }
        return setOptions(initialOptions);
    }

    return (
        <div className="rainbow-m-around_xx-large">
            <InternalDropdown id="internal-dropdown-5" value={value} onChange={setValue} enableSearch onSearch={onSearch}>
                {options.map(option => <Option key={option.name} name={option.name} label={option.label} />)}
            </InternalDropdown>
        </div>
    );
}

    <InternalDropdownWithSearch />
```

##### With multiple selection:

```js
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { PicklistOption } from 'react-rainbow-components';

function InternalDropdownWithMultipleSelection() {
    const [value, setValue] = useState();
    return (
        <div className="rainbow-m-around_xx-large">
            <InternalDropdown value={value} onChange={setValue} enableSearch multiple='true'>
                <PicklistOption name="option-1" label="All Buildings" icon={<DashboardIcon />} />
                <PicklistOption name="option-2" label="New Building" icon={<AddFilledIcon />} />
                <PicklistOption name="header" label="Your Buildings" variant="header" />
                <PicklistOption name="option-3" label="Experimental" icon={<BuildingIcon />} />
                <PicklistOption name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
                <PicklistOption name="option-5" label="Empire State" icon={<BuildingIcon />} />
                <PicklistOption name="option-6" label="Central Park" icon={<BuildingIcon />} />
                <PicklistOption name="option-7" label="Chrysler" icon={<BuildingIcon />} />
                <PicklistOption name="option-8" label="Plaza" icon={<BuildingIcon />} />
            </InternalDropdown>
        </div>
    );
}

    <InternalDropdownWithMultipleSelection />
```
