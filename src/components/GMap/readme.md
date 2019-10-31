##### GMap base:

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

##### GMap inside a card:

```js
import React from 'react';
import { MapMarker, GMap, Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const containerStyles = {
    maxWidth: 720,
};

const iconContainerStyles = {
    backgroundColor: '#5c56b6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.125rem',
    width: '2.125rem',
};
const ICON = (
    <span style={iconContainerStyles}>
        <FontAwesomeIcon color="white" icon={faMap} />
    </span>
);

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <Card
        className="rainbow-m-vertical_x-large rainbow-m_auto"
        title="Map"
        icon={ICON}
        style={containerStyles}
    >
        <GMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            zoom={10}
            latitude={-33.836538}
            longitude={151.1279}
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
    </Card>
</div>
```
