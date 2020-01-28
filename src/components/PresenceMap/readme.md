##### PresenceMap base:

```js
import React from 'react';
import { PresenceMap } from 'react-rainbow-components';

const styles = {
    maxWidth: 400,
    margin: 'auto',
};

const objects = [
    {
        position: {
            lat: -33.836538,
            lng: 151.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 45,
    },
    {
        position: {
            lat: -33.840538,
            lng: 151.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 160,
    },
    {
        position: {
            lat: -33.850538,
            lng: 151.1279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 270,
    },
];

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div className="rainbow-p-vertical_x-large rainbow-p-horizontal_small" style={styles}>
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            objects={objects}
            // zoom={8}
            // center={{lat: 26.1267513, lng: -80.298911}}
            // showTraffic={true}
            // showTransit={true}
        >
        </PresenceMap>
    </div>
</div>
```
