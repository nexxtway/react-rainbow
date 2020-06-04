##### MultiSelect base

```js
import React, { useState } from 'react';
import { MultiSelect, Option } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const MultiSelectExample = props => {
    const [value, setValue] = useState([]);

    const handleChange = val => {
        setValue(val);
    }

    return (
        <MultiSelect
            id="input-component-1"
            label="MultiSelect Label"
            placeholder="Placeholder text"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            value={value}
            onChange={setValue}
            bottomHelpText="You can select several options"
        >
            <Option name="option-1" label="All Buildings" icon={<DashboardIcon />} />
            <Option name="option-2" label="New Building" icon={<AddFilledIcon />} />
            <Option name="header" label="Your Buildings" variant="header" />
            <Option name="option-3" label="Experimental" icon={<BuildingIcon />} />
            <Option name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
            <Option name="option-5" label="Empire State" icon={<BuildingIcon />} />
            <Option name="option-6" label="Central Park" icon={<BuildingIcon />} />
            <Option name="option-7" label="Chrysler" icon={<BuildingIcon />} />
            <Option name="option-8" label="Plaza" icon={<BuildingIcon />} />
        </MultiSelect>          
    )
}

<MultiSelectExample />
```

##### MultiSelect bare

```js
import React, { useState } from 'react';
import { MultiSelect, Option } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const MultiSelectExample = props => {
    const [value, setValue] = useState([]);

    const handleChange = val => {
        setValue(val);
    }

    return (
        <MultiSelect
            id="input-component-1"
            label="Input Label"
            placeholder="Placeholder text"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            value={value}
            onChange={handleChange}
            bottomHelpText="You can select several options"
            variant="bare"
        >
            <Option name="option-1" label="All Buildings" icon={<DashboardIcon />} />
            <Option name="option-2" label="New Building" icon={<AddFilledIcon />} />
            <Option name="header" label="Your Buildings" variant="header" />
            <Option name="option-3" label="Experimental" icon={<BuildingIcon />} />
            <Option name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
            <Option name="option-5" label="Empire State" icon={<BuildingIcon />} />
            <Option name="option-6" label="Central Park" icon={<BuildingIcon />} />
            <Option name="option-7" label="Chrysler" icon={<BuildingIcon />} />
            <Option name="option-8" label="Plaza" icon={<BuildingIcon />} />
        </MultiSelect>
    )
}

<MultiSelectExample />
```

##### MultiSelect with error

```js
import React, { useState } from 'react';
import { MultiSelect, Option } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const MultiSelectExample = props => {
    const [value, setValue] = useState([]);

    const handleChange = val => {
        setValue(val);
    }

    return (
        <MultiSelect
            id="input-component-1"
            label="MultiSelect Label"
            placeholder="Placeholder text"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            value={value}
            onChange={handleChange}
            error="This field is required"
        >
            <Option name="option-1" label="All Buildings" icon={<DashboardIcon />} />
            <Option name="option-2" label="New Building" icon={<AddFilledIcon />} />
            <Option name="header" label="Your Buildings" variant="header" />
            <Option name="option-3" label="Experimental" icon={<BuildingIcon />} />
            <Option name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
            <Option name="option-5" label="Empire State" icon={<BuildingIcon />} />
            <Option name="option-6" label="Central Park" icon={<BuildingIcon />} />
            <Option name="option-7" label="Chrysler" icon={<BuildingIcon />} />
            <Option name="option-8" label="Plaza" icon={<BuildingIcon />} />
        </MultiSelect>          
    )
}

<MultiSelectExample />
```

##### MultiSelect disabled

```js
import React, { useState } from 'react';
import { MultiSelect, Option } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 400,
};

const MultiSelectExample = props => {
    const [value, setValue] = useState([]);

    const handleChange = val => {
        setValue(val);
    }

    return (
        <MultiSelect
            id="input-component-1"
            label="MultiSelect Label"
            placeholder="Placeholder text"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            value={value}
            onChange={handleChange}
            disabled
        >
            <Option name="option-1" label="All Buildings" icon={<DashboardIcon />} />
            <Option name="option-2" label="New Building" icon={<AddFilledIcon />} />
            <Option name="header" label="Your Buildings" variant="header" />
            <Option name="option-3" label="Experimental" icon={<BuildingIcon />} />
            <Option name="option-4" label="Bennet Towers" icon={<BuildingIcon />} />
            <Option name="option-5" label="Empire State" icon={<BuildingIcon />} />
            <Option name="option-6" label="Central Park" icon={<BuildingIcon />} />
            <Option name="option-7" label="Chrysler" icon={<BuildingIcon />} />
            <Option name="option-8" label="Plaza" icon={<BuildingIcon />} />
        </MultiSelect>          
    )
}

<MultiSelectExample />
```