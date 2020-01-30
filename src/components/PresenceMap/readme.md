##### PresenceMap:

```js
import React from 'react';
import { PresenceMap } from 'react-rainbow-components';

const objects = [
    {
        position: {
            lat: -33.836538,
            lng: 151.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 270,
    },
    {
        position: {
            lat: -34.840538,
            lng: 150.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 45,
    },
    {
        position: {
            lat: -35.850538,
            lng: 151.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
    },
];

<div>
    <div className="rainbow-p-around_small">
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            objects={objects}
        >
        </PresenceMap>
    </div>
</div>
```
