##### PresenceMap:

```js
import React, { useState, useEffect } from 'react';
import { PresenceMap, Input, Picklist, PicklistOption } from 'react-rainbow-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { COLOR_WHITE } from '../../styles/colors';
import { SHADOW_1 } from '../../styles/shadows';
import { BORDER_RADIUS_1 } from '../../styles/borderRadius';

const RegularControl = styled(Input)`
    background-color: ${COLOR_WHITE};
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_1};
    cursor: pointer;
    margin: 10px 10px 10px;
    text-align: center;
    padding: 5px;
    width: fit-content;
    float: left;
`;

const CircularControl = styled.div`
    background-color: ${COLOR_WHITE};
    border-radius: 20px;
    box-shadow: ${SHADOW_1};
    cursor: pointer;
    margin: 10px 10px 10px;
    text-align: center;
    padding: 5px;
    width: 40px;
    height: 40px;
    float: left;
`;

const MenuControl = styled(Picklist)`
    cursor: pointer;
    margin: 10px 10px 10px;
    text-align: center;
    padding: 5px;
    width: fit-content;
    float: left;
`;

const Icon = styled(FontAwesomeIcon)`
    vertical-align: bottom;
    margin-top: 20%;
`;

const objects = [
    {
        position: {
            lat: -33.836538,
            lng: 151.1279,
        },
        image: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        heading: 270,
    },
    {
        position: {
            lat: -33.850538,
            lng: 151.279,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        heading: 90,
    },
    {
        position: {
            lat: -33.860538,
            lng: 151.1479,
        },
        image: "http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png",
        onClick: () => alert('ddsadsa'),
    },
];

function geoError() {
    alert("Sorry, no position available.");
};

const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

const PresenceMapExample = () => {
    const [showTrafficState, setShowTraffic] = useState(false);
    const [showTransitState, setShowTransit] = useState(false);
    const [centerState, setCenter] = useState('auto');
    const [mapTypeState, setMapType] = useState({ name: 'roadmap', label: 'ROADMAP' });

    const handleShowTraffic = () => {
        setShowTraffic(!showTrafficState);
    };

    const handleShowTransit = () => {
        setShowTransit(!showTransitState);
    };

    const handleCenterGeolocation = () => {
        const geoSuccess = position => {
            setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        };

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    };

    const handleMapStyle = value => {
        setMapType(value);
    };

    return (
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            objects={objects}
            showTraffic={showTrafficState}
            showTransit={showTransitState}
            zoom="auto"
            center={centerState}
            type={mapTypeState.name}
        >
            <MenuControl
                id="picklist-mapstyle-1"
                style={{ float: "right" }}
                onChange={handleMapStyle}
                value={mapTypeState}
                label=""
                hideLabel
            >
                <PicklistOption name="roadmap" label="ROADMAP" />
                <PicklistOption name="satellite" label="SATELLITE" />
                <PicklistOption name="hybrid" label="HYBRID" />
                <PicklistOption name="terrain" label="TERRAIN" />
            </MenuControl>
            <RegularControl
                className="rainbow-m-around_medium"
                style={{ float: "right" }}
                type="checkbox"
                label="Show Traffic"
                onClick={handleShowTraffic}
                checked={showTrafficState} />
            <RegularControl
                className="rainbow-m-around_medium"
                style={{ float: "right" }}
                type="checkbox"
                label="Show Transit"
                onClick={handleShowTransit}
                checked={showTransitState} />
            <CircularControl
                className="rainbow-m-around_medium"
                style={{ float: "right" }}
                onClick={handleCenterGeolocation}
            >
                <Icon icon={faCrosshairs}  className="rainbow-color_brand" size="lg" />
            </CircularControl>
        </PresenceMap>
    );
}

<PresenceMapExample />
```
