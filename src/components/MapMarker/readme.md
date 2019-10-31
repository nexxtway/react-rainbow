##### MapMarker base:

```js
import React from 'react';
import { MapMarker, GMap } from 'react-rainbow-components';

const styles = {
    maxWidth: 400,
    margin: 'auto',
};

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div className="rainbow-p-vertical_x-large rainbow-p-horizontal_small" style={styles}>
        <GMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            zoom={10}
            latitude={-33.836538}
            longitude={151.1279}
            header="Title"
        >
            <MapMarker
                latitude={-33.941264}
                longitude={151.2042969}
                label="Botany Bay"
                description=" Botany, New South Wales, Australia"
            />

            <MapMarker
                latitude={-33.940004}
                longitude={151.094593}
                label="Garema"
                description="Garema Circuit, Kingsgrove, Australia"
            />
        </GMap>
    </div>
</div>
```
