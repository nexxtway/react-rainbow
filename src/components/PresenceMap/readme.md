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
            path: 'M22.4583341,0.517171347 L22.6738571,0.628235481 L23.0744391,0.845949778 C25.2768986,2.04363106 26.8159779,4.16952492 27.2720419,6.62433046 L27.3198345,6.90900283 L27.3874119,7.35988939 C27.6913326,9.36827165 26.7853252,11.3595829 25.0912102,12.4538339 L24.8922619,12.5760626 L17.1845163,17.0650854 L14.416,19.369 L16.8460301,21.0905982 L15.7249598,21.8755801 C15.4169969,22.0906458 15.0203377,22.1198758 14.6878849,21.9613034 L14.5665235,21.8930317 L12.858,20.667 L10.5047073,22.6263028 C8.85790022,23.9961983 6.54290995,24.1987699 4.68977917,23.1572958 L4.48583382,23.036453 L2.84490614,22.0158738 C1.71890963,21.3149213 0.906444735,20.2112972 0.56884582,18.935411 L0.507705387,18.6780052 L0.112016799,16.7855001 C-0.331905197,14.6887939 0.56947996,12.545429 2.35725042,11.3922915 L2.55216813,11.2725774 L5.147,9.76 L4.63213477,7.70525434 C4.54530403,7.33530881 4.66883972,6.95103337 4.9465422,6.70086718 L5.04474248,6.62264908 L6.16581285,5.83766716 L6.888,8.746 L10.0643602,6.89644868 L16.9188661,1.18887322 C18.478691,-0.107325301 20.647476,-0.362887601 22.4583341,0.517171347 Z M8.9633346,10.0750287 L5.02529746,12.281722 L4.91968831,12.3495027 C4.65146557,12.5458278 4.49281762,12.8626043 4.50041807,13.1999964 L4.50041807,13.1999964 L4.50441251,13.3549516 L4.51605347,13.6246888 C4.68803263,16.4014219 6.45426247,18.8394888 9.05996524,19.8609552 L9.05996524,19.8609552 L9.20537523,19.9193717 L9.32488192,19.9580533 C9.64709372,20.0409336 9.99281234,19.9624501 10.2489562,19.7418798 L10.2489562,19.7418798 L13.6682918,16.7944039 L8.9633346,10.0750287 Z M19.0850833,3.51260446 C18.6951887,3.32313201 18.2281292,3.39982327 17.9187595,3.70344031 L17.9187595,3.70344031 L16.2093937,5.38098113 L20.9143509,12.1003563 L23.0747615,11.0669743 C23.4659265,10.8800718 23.6976888,10.4674427 23.6529948,10.0362582 L23.6529948,10.0362582 L23.535117,8.90527554 C23.3152115,6.79109843 22.0190072,4.93992695 20.1075427,4.01019222 L20.1075427,4.01019222 Z',
            fillColor: 'black',
            fillOpacity: 0.8,
            scale: 1,
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
            path: 'M22.4583341,0.517171347 L22.6738571,0.628235481 L23.0744391,0.845949778 C25.2768986,2.04363106 26.8159779,4.16952492 27.2720419,6.62433046 L27.3198345,6.90900283 L27.3874119,7.35988939 C27.6913326,9.36827165 26.7853252,11.3595829 25.0912102,12.4538339 L24.8922619,12.5760626 L17.1845163,17.0650854 L14.416,19.369 L16.8460301,21.0905982 L15.7249598,21.8755801 C15.4169969,22.0906458 15.0203377,22.1198758 14.6878849,21.9613034 L14.5665235,21.8930317 L12.858,20.667 L10.5047073,22.6263028 C8.85790022,23.9961983 6.54290995,24.1987699 4.68977917,23.1572958 L4.48583382,23.036453 L2.84490614,22.0158738 C1.71890963,21.3149213 0.906444735,20.2112972 0.56884582,18.935411 L0.507705387,18.6780052 L0.112016799,16.7855001 C-0.331905197,14.6887939 0.56947996,12.545429 2.35725042,11.3922915 L2.55216813,11.2725774 L5.147,9.76 L4.63213477,7.70525434 C4.54530403,7.33530881 4.66883972,6.95103337 4.9465422,6.70086718 L5.04474248,6.62264908 L6.16581285,5.83766716 L6.888,8.746 L10.0643602,6.89644868 L16.9188661,1.18887322 C18.478691,-0.107325301 20.647476,-0.362887601 22.4583341,0.517171347 Z M8.9633346,10.0750287 L5.02529746,12.281722 L4.91968831,12.3495027 C4.65146557,12.5458278 4.49281762,12.8626043 4.50041807,13.1999964 L4.50041807,13.1999964 L4.50441251,13.3549516 L4.51605347,13.6246888 C4.68803263,16.4014219 6.45426247,18.8394888 9.05996524,19.8609552 L9.05996524,19.8609552 L9.20537523,19.9193717 L9.32488192,19.9580533 C9.64709372,20.0409336 9.99281234,19.9624501 10.2489562,19.7418798 L10.2489562,19.7418798 L13.6682918,16.7944039 L8.9633346,10.0750287 Z M19.0850833,3.51260446 C18.6951887,3.32313201 18.2281292,3.39982327 17.9187595,3.70344031 L17.9187595,3.70344031 L16.2093937,5.38098113 L20.9143509,12.1003563 L23.0747615,11.0669743 C23.4659265,10.8800718 23.6976888,10.4674427 23.6529948,10.0362582 L23.6529948,10.0362582 L23.535117,8.90527554 C23.3152115,6.79109843 22.0190072,4.93992695 20.1075427,4.01019222 L20.1075427,4.01019222 Z',
            fillColor: 'red',
            fillOpacity: 0.8,
            scale: 1,
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
            path: 'M22.4583341,0.517171347 L22.6738571,0.628235481 L23.0744391,0.845949778 C25.2768986,2.04363106 26.8159779,4.16952492 27.2720419,6.62433046 L27.3198345,6.90900283 L27.3874119,7.35988939 C27.6913326,9.36827165 26.7853252,11.3595829 25.0912102,12.4538339 L24.8922619,12.5760626 L17.1845163,17.0650854 L14.416,19.369 L16.8460301,21.0905982 L15.7249598,21.8755801 C15.4169969,22.0906458 15.0203377,22.1198758 14.6878849,21.9613034 L14.5665235,21.8930317 L12.858,20.667 L10.5047073,22.6263028 C8.85790022,23.9961983 6.54290995,24.1987699 4.68977917,23.1572958 L4.48583382,23.036453 L2.84490614,22.0158738 C1.71890963,21.3149213 0.906444735,20.2112972 0.56884582,18.935411 L0.507705387,18.6780052 L0.112016799,16.7855001 C-0.331905197,14.6887939 0.56947996,12.545429 2.35725042,11.3922915 L2.55216813,11.2725774 L5.147,9.76 L4.63213477,7.70525434 C4.54530403,7.33530881 4.66883972,6.95103337 4.9465422,6.70086718 L5.04474248,6.62264908 L6.16581285,5.83766716 L6.888,8.746 L10.0643602,6.89644868 L16.9188661,1.18887322 C18.478691,-0.107325301 20.647476,-0.362887601 22.4583341,0.517171347 Z M8.9633346,10.0750287 L5.02529746,12.281722 L4.91968831,12.3495027 C4.65146557,12.5458278 4.49281762,12.8626043 4.50041807,13.1999964 L4.50041807,13.1999964 L4.50441251,13.3549516 L4.51605347,13.6246888 C4.68803263,16.4014219 6.45426247,18.8394888 9.05996524,19.8609552 L9.05996524,19.8609552 L9.20537523,19.9193717 L9.32488192,19.9580533 C9.64709372,20.0409336 9.99281234,19.9624501 10.2489562,19.7418798 L10.2489562,19.7418798 L13.6682918,16.7944039 L8.9633346,10.0750287 Z M19.0850833,3.51260446 C18.6951887,3.32313201 18.2281292,3.39982327 17.9187595,3.70344031 L17.9187595,3.70344031 L16.2093937,5.38098113 L20.9143509,12.1003563 L23.0747615,11.0669743 C23.4659265,10.8800718 23.6976888,10.4674427 23.6529948,10.0362582 L23.6529948,10.0362582 L23.535117,8.90527554 C23.3152115,6.79109843 22.0190072,4.93992695 20.1075427,4.01019222 L20.1075427,4.01019222 Z',
            fillColor: 'red',
            fillOpacity: 0.8,
            scale: 1,
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
