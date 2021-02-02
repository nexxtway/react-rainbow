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
/* eslint-disable no-undef, react/jsx-no-undef */
import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Option } from 'react-rainbow-components';

const client = algoliasearch(LIBRARY_ALGOLIA_APP_ID, LIBRARY_ALGOLIA_SEARCH_KEY);
const index = client.initIndex(LIBRARY_ALGOLIA_SEARCH_COMPONENTS_INDEX);

const search = async ({ query, page = 1 }) => {
    const result = await index.search(query, {
        page: page - 1,
    });
    const { hits } = result;
    return hits.map(hit => ({
        label: hit.text,
        name: hit.objectID,
    }));
};

function InternalDropdownWithAlgoliaSearch() {
    const [value, setValue] = useState();
    const [isLoading, setIsLoading] = useState();
    const [options, setOptions] = useState([]);
    const onSearch = async query => {
        if (!query) {
            setOptions([]);
            return;
        }
        setIsLoading(true);
        const result = await search({ query });
        setOptions(result);
        setIsLoading(false);
    };

    return (
        <div className="rainbow-m-around_xx-large">
            <InternalDropdown id="internal-dropdown-5" isLoading={isLoading} value={value} onChange={setValue} enableSearch onSearch={onSearch}>
                {options.map(option => <Option key={option.name} name={option.name} label={option.label} />)}
            </InternalDropdown>
        </div>
    );
}

    <InternalDropdownWithAlgoliaSearch />

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
            <InternalDropdown value={value} onChange={setValue} enableSearch multiple>
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
