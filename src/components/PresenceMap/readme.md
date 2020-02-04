##### PresenceMap:

```js
import React, { useState, useEffect } from 'react';
import { PresenceMap, Input } from 'react-rainbow-components';
import styled from 'styled-components';
import { COLOR_WHITE } from '../../styles/colors';
import { SHADOW_1 } from '../../styles/shadows';
import { BORDER_RADIUS_1 } from '../../styles/borderRadius';

const StyledControl = styled(Input)`
    background-color: ${COLOR_WHITE};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_1};
    cursor: pointer;
    margin: 10px;
    text-align: center;
    padding: 5px;
    width: fit-content;
    float: left;
`;

const PresenceMapExample = () => {
    const [showTrafficState, setShowTraffic] = useState(false);
    const [showTransitState, setShowTransit] = useState(false);
    const [zoomState, setZoom] = useState('auto');
    const [centerState, setCenter] = useState('auto');

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
            heading: 90,
        },
        {
            position: {
                lat: -35.850538,
                lng: 151.1279,
            },
            image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        },
    ];

    useEffect(() => {
        setShowTraffic(showTrafficState);
    }, [showTrafficState]);

    useEffect(() => {
        setShowTransit(showTransitState);
    }, [showTransitState]);

    useEffect(() => {
        setZoom(zoomState);
    }, [zoomState]);

    useEffect(() => {
        setCenter(centerState);
    }, [centerState]);

    const handleShowTraffic = () => {
        setShowTraffic(!showTrafficState)
    }

    const handleShowTransit = () => {
        setShowTransit(!showTransitState)
    }

    return (
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            objects={objects}
            showTraffic={showTrafficState}
            showTransit={showTransitState}
            zoom={zoomState}
            center={centerState}
        >
            <StyledControl
                className="rainbow-m-around_medium"
                type="checkbox"
                label="Show Traffic"
                onClick={handleShowTraffic}
                checked={showTrafficState} />
            <StyledControl
                className="rainbow-m-around_medium"
                style={{ float: "right" }}
                type="checkbox"
                label="Show Transit"
                onClick={handleShowTransit}
                checked={showTransitState} />
        </PresenceMap>
    );
}

<PresenceMapExample />
```
