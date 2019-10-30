##### GoogleAddressLookup base

```js
import React from 'react';
import { GoogleAddressLookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: null };

<GoogleAddressLookup
    id="gaddresslookup-1"
    label="GoogleAddressLookup label"
    onChange={value => setState({ value })}
    value={state.value}
    placeholder="Enter location"
    apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### GoogleAddressLookup disabled

```js
import React from 'react';
import { GoogleAddressLookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: null };

<GoogleAddressLookup
    id="gaddresslookup-2"
    label="GoogleAddressLookup label"
    onChange={value => setState({ value })}
    value={state.value}
    placeholder="Enter location"
    apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
    disabled
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
/>;
```

##### GoogleAddressLookup with custom search params (bounds, types)

```js
import React from 'react';
import { GoogleAddressLookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: null };

<GoogleAddressLookup
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    id="gaddresslookup-3"
    label="GoogleAddressLookup label"
    placeholder="Enter location"
    onChange={value => setState({ value })}
    value={state.value}
    apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
    searchOptions={{
        bounds: {
            sw: {
                latitude: -63.941264,
                longitude: 151.2042969,
            },
            ne: {
                latitude: 63.941264,
                longitude: -151.2042969,
            },
        },
        types: ['address'],
    }}
/>;
```

##### GoogleAddressLookup with custom search params (location, radius, types, country)

```js
import React from 'react';
import { GoogleAddressLookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: null };

<GoogleAddressLookup
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    id="gaddresslookup-4"
    label="GoogleAddressLookup label"
    placeholder="Enter location"
    onChange={value => setState({ value })}
    value={state.value}
    apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
    searchOptions={{
        location: {
            latitude: -33.941264,
            longitude: 151.2042969,
        },
        country: 'us',
        radius: 150000,
        types: ['address'],
    }}
/>;
```

##### GoogleAddressLookup required with error

```js
import React from 'react';
import { GoogleAddressLookup } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: null };

<GoogleAddressLookup
    style={containerStyles}
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    id="gaddresslookup-5"
    required
    label="GoogleAddressLookup label"
    placeholder="Enter location"
    onChange={value => setState({ value })}
    value={state.value}
    apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
    error="This field is required"
/>;
```
