##### PresenceMap:

```js
import React, { useState, useEffect } from 'react';
import { PresenceMap, Input, Picklist, PicklistOption, ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import LocationIcon from './icons/locationIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { COLOR_WHITE } from '../../styles/colors';
import { SHADOW_1 } from '../../styles/shadows';
import { BORDER_RADIUS_2 } from '../../styles/borderRadius';

const RegularControl = styled(Input).attrs(props => {
    return props.theme.rainbow;
})`
    background-color: ${props => props.palette.background.main};
    border-radius: ${BORDER_RADIUS_2};
    box-shadow: ${props => props.shadows.shadow_1};
    cursor: pointer;
    margin: 10px 10px;
    text-align: center;
    padding: 5px;
    width: fit-content;
    display: inline-block;
    flex-grow: 0;
`;

const CircularControl = styled(ButtonIcon).attrs(props => {
    return props.theme.rainbow;
})`
    margin: 10px 10px;
    display: inline-block;
    flex-grow: 0;
`;

const MenuControl = styled(Picklist)`
    cursor: pointer;
    margin: 10px 10px 10px;
    text-align: center;
    padding: 5px;
    width: 170px;
    display: inline-block;
    flex-grow: 0;
`;

const Icon = styled(FontAwesomeIcon)`
    vertical-align: bottom;
    margin-top: 20%;
`;

const markers = [
    {
        position: {
            lat: -32.836538,
            lng: 151.1279,
        },
        icon: {
            path: 'M16 48 L48 48 L32 12 Z',
            fillColor: 'red',
            fillOpacity: 0.8,
            scale: 0.4,
            strokeColor: 'black',
            strokeWeight: 1,
            rotation: 45,
        },
    },
    {
        position: {
            lat: -33.850538,
            lng: 151.279,
        },
        icon: {
            path: 'M16 48 L48 48 L32 12 Z',
            fillColor: 'red',
            fillOpacity: 0.8,
            scale: 0.4,
            strokeColor: 'black',
            strokeWeight: 1,
        },
    },
    {
        position: {
            lat: -31.860538,
            lng: 151.1479,
        },
        icon: {
            path: 'M16 48 L48 48 L32 12 Z',
            fillColor: 'red',
            fillOpacity: 0.8,
            scale: 0.4,
            strokeColor: 'black',
            strokeWeight: 1,
            rotation: 60,
        },
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
    const [mapTypeState, setMapType] = useState({ name: 'roadmap', label: 'Roadmap', icon: <LocationIcon /> });

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

    const handleMarkerClick = (marker, idx) => {
        switch (idx) {
            case 0:
                alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
                break;
            case 1:
                alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
                break;
            case 2:
                alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
                break;
            default:
                alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
                break;
        }
    };

    return (
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            markers={markers}
            showTraffic={showTrafficState}
            showTransit={showTransitState}
            center={centerState}
            type={mapTypeState.name}
            onMarkerClick={(marker, idx) => handleMarkerClick(marker, idx)}
        >
            <CircularControl
                size="medium"
                icon={<FontAwesomeIcon icon={faCrosshairs} className="rainbow-color_brand" />}
                variant="border-filled"
                onClick={handleCenterGeolocation}
            />
            <RegularControl
                className="rainbow-m-around_medium"
                type="checkbox"
                label="Show Traffic"
                onClick={handleShowTraffic}
                checked={showTrafficState} />
            <RegularControl
                className="rainbow-m-around_medium"
                type="checkbox"
                label="Show Transit"
                onClick={handleShowTransit}
                checked={showTransitState} />
            <MenuControl
                id="picklist-mapstyle-1"
                onChange={handleMapStyle}
                value={mapTypeState}
                label="Select Map Type"
                hideLabel
            >
                <PicklistOption name="roadmap" label="Roadmap" icon={<LocationIcon />} />
                <PicklistOption name="satellite" label="Satellite" icon={<LocationIcon />} />
                <PicklistOption name="hybrid" label="Hybrid" icon={<LocationIcon />} />
                <PicklistOption name="terrain" label="Terrain" icon={<LocationIcon />} />
            </MenuControl>
        </PresenceMap>
    );
}

<PresenceMapExample />
```
