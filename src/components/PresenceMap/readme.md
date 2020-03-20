##### PresenceMap:

```js
import React, { useState, useEffect, useCallback } from 'react';
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
    text-align: center;
    padding: 0 16px 0 10px;
    width: fit-content;
    display: inline-block;
    height: 40px;
    line-height: 36px;
`;

const MenuControl = styled(Picklist).attrs(props => {
    return props.theme.rainbow;
})`
    cursor: pointer;
    text-align: center;
    width: 170px;
    display: inline-block;
    flex-grow: 0;
    box-shadow: ${props => props.shadows.shadow_1};
    border-radius: ${BORDER_RADIUS_2};
`;

const Icon = styled(FontAwesomeIcon).attrs(props => {
    return props.theme.rainbow;
})`
    color: ${props => props.palette.brand.main};
`;

const ControlsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 12px;
`;

const iconPath = 'M11.9871,1.1364008 L12.2359799,1.23823648 L14.0335516,2.03050425 C16.0283994,2.90377682 17.2557593,4.892851 17.135574,7.01698489 L17.1175141,7.2450428 L16.8094642,10.2327009 L18.8129612,11.0245911 C19.1700297,11.1717921 19.4128857,11.497606 19.4527982,11.869316 L19.4584642,11.9947371 L19.4341199,13.3631029 L16.6024642,12.2377009 L16.2254869,15.8947578 L16.8253555,24.7949983 C16.9600791,26.8245918 15.8648963,28.7344927 14.0450438,29.6794384 L13.8398814,29.7804184 L13.4203739,29.9765267 C11.120417,31.0510581 8.45476232,31.0499638 6.16211892,29.9858947 L5.87753469,29.8473506 L5.46525847,29.6369974 C3.62458934,28.7010932 2.52488516,26.7937071 2.64100824,24.7768867 L2.65893833,24.552389 L3.57502992,15.6781104 L3.33246422,12.0837009 L0.458464218,13.0381323 L0.482808549,11.6697665 C0.490057388,11.2895124 0.708871066,10.9476756 1.04585182,10.773854 L1.16242717,10.722314 L3.19646422,10.0607009 L2.99118567,7.0052298 C2.84800457,4.86500063 4.07115914,2.87070772 6.04455953,1.98535103 L6.25883806,1.89477863 L8.08345047,1.16712168 C9.336015,0.668180913 10.7327797,0.659576945 11.9871,1.1364008 Z M5.43432624,21.6138045 L4.99214774,23.9690201 C4.91192007,24.3953378 5.1133182,24.8253748 5.49563931,25.0426604 L5.49563931,25.0426604 L6.49884237,25.6120702 C8.37388993,26.676845 10.6768698,26.716285 12.58865,25.7163621 L12.58865,25.7163621 L13.6114962,25.1816498 C14.0013135,24.9775875 14.2178867,24.5546505 14.1528713,24.1259036 L14.1528713,24.1259036 L13.7936737,21.7569638 L5.43432624,21.6138045 Z M6.1369628,7.46183948 L6.00168005,7.5451423 C5.67508258,7.74976448 5.49085898,8.11476234 5.52283591,8.49374411 L5.90476667,12.9925276 L14.2641141,13.135687 L14.8037659,8.65268616 C14.8496682,8.27556091 14.679132,7.90448755 14.3610275,7.68830165 L14.2308618,7.60045284 C11.8074644,5.96017523 8.61782169,5.90555049 6.1369628,7.46183948 Z';

const markers = [
    {
        position: {
            lat: 41.878113,
            lng: -87.629799,
        },
        icon: {
            path: iconPath,
            fillColor: '#fe4849',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
            rotation: 45,
        },
    },
    {
        position: {
            lat: 41.878189,
            lng: -87.627691,
        },
        icon: {
            path: iconPath,
            fillColor: '#01B6F5',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
        },
    },
    {
        position: {
            lat: 41.872125,
            lng: -87.633570,
        },
        icon: {
            path: iconPath,
            fillColor: '#454B4D',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
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
        alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
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
            <ControlsContainer>
                <ButtonIcon
                    size="medium"
                    icon={<Icon icon={faCrosshairs} />}
                    variant="border-filled"
                    onClick={handleCenterGeolocation}
                    className="rainbow-m-right_medium"
                />
                <RegularControl
                    className="rainbow-m-right_medium"
                    type="checkbox"
                    label="Traffic"
                    onClick={handleShowTraffic}
                    checked={showTrafficState} />
                <RegularControl
                    className="rainbow-m-right_medium"
                    type="checkbox"
                    label="Transit"
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
            </ControlsContainer>
        </PresenceMap>
    );
}

<PresenceMapExample />
```

##### Interactive PresenceMap:

```js
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { PresenceMap, Input, Picklist, PicklistOption, ButtonIcon, RenderIf } from 'react-rainbow-components';
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
    text-align: center;
    padding: 0 16px 0 10px;
    width: fit-content;
    display: inline-block;
    height: 40px;
    line-height: 36px;
`;

const MenuControl = styled(Picklist).attrs(props => {
    return props.theme.rainbow;
})`
    cursor: pointer;
    text-align: center;
    width: 170px;
    display: inline-block;
    flex-grow: 0;
    box-shadow: ${props => props.shadows.shadow_1};
    border-radius: ${BORDER_RADIUS_2};
`;

const Icon = styled(FontAwesomeIcon).attrs(props => {
    return props.theme.rainbow;
})`
    color: ${props => props.palette.brand.main};
`;

const ControlsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
`;

const iconPath = 'M11.9871,1.1364008 L12.2359799,1.23823648 L14.0335516,2.03050425 C16.0283994,2.90377682 17.2557593,4.892851 17.135574,7.01698489 L17.1175141,7.2450428 L16.8094642,10.2327009 L18.8129612,11.0245911 C19.1700297,11.1717921 19.4128857,11.497606 19.4527982,11.869316 L19.4584642,11.9947371 L19.4341199,13.3631029 L16.6024642,12.2377009 L16.2254869,15.8947578 L16.8253555,24.7949983 C16.9600791,26.8245918 15.8648963,28.7344927 14.0450438,29.6794384 L13.8398814,29.7804184 L13.4203739,29.9765267 C11.120417,31.0510581 8.45476232,31.0499638 6.16211892,29.9858947 L5.87753469,29.8473506 L5.46525847,29.6369974 C3.62458934,28.7010932 2.52488516,26.7937071 2.64100824,24.7768867 L2.65893833,24.552389 L3.57502992,15.6781104 L3.33246422,12.0837009 L0.458464218,13.0381323 L0.482808549,11.6697665 C0.490057388,11.2895124 0.708871066,10.9476756 1.04585182,10.773854 L1.16242717,10.722314 L3.19646422,10.0607009 L2.99118567,7.0052298 C2.84800457,4.86500063 4.07115914,2.87070772 6.04455953,1.98535103 L6.25883806,1.89477863 L8.08345047,1.16712168 C9.336015,0.668180913 10.7327797,0.659576945 11.9871,1.1364008 Z M5.43432624,21.6138045 L4.99214774,23.9690201 C4.91192007,24.3953378 5.1133182,24.8253748 5.49563931,25.0426604 L5.49563931,25.0426604 L6.49884237,25.6120702 C8.37388993,26.676845 10.6768698,26.716285 12.58865,25.7163621 L12.58865,25.7163621 L13.6114962,25.1816498 C14.0013135,24.9775875 14.2178867,24.5546505 14.1528713,24.1259036 L14.1528713,24.1259036 L13.7936737,21.7569638 L5.43432624,21.6138045 Z M6.1369628,7.46183948 L6.00168005,7.5451423 C5.67508258,7.74976448 5.49085898,8.11476234 5.52283591,8.49374411 L5.90476667,12.9925276 L14.2641141,13.135687 L14.8037659,8.65268616 C14.8496682,8.27556091 14.679132,7.90448755 14.3610275,7.68830165 L14.2308618,7.60045284 C11.8074644,5.96017523 8.61782169,5.90555049 6.1369628,7.46183948 Z';

const markers = [
    {
        position: {
            lat: 41.878113,
            lng: -87.629799,
        },
        icon: {
            path: iconPath,
            fillColor: '#fe4849',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
            rotation: 45,
        },
        available: false,
    },
    {
        position: {
            lat: 41.878189,
            lng: -87.627691,
        },
        icon: {
            path: iconPath,
            fillColor: '#01B6F5',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
        },
        available: true,
    },
    {
        position: {
            lat: 41.872125,
            lng: -87.633570,
        },
        icon: {
            path: iconPath,
            fillColor: '#454B4D',
            fillOpacity: 1,
            scale: 1,
            strokeColor: 'transparent',
            strokeWeight: 0,
            rotation: 60,
        },
        available: false,
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
    const [carAvailabilityState, setCarAvailability] = useState({ name: 'all', label: 'All'})

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
        alert(`Marker position:\n Latitude: ${marker.position.lat}\n Longitude: ${marker.position.lng}`);
    };
    
    const filteredMarkers = useMemo(() => markers.filter(marker => carAvailabilityState.name === 'all' || (marker.available === (carAvailabilityState.name === 'availables'))), [carAvailabilityState.name]);
    
    const handleCarAvailability = value => {
        setCarAvailability(value);
        setCenter('auto');
    };

    return (
        <PresenceMap
            apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
            markers={filteredMarkers}
            showTraffic={showTrafficState}
            showTransit={showTransitState}
            center={centerState}
            type={mapTypeState.name}
            onMarkerClick={(marker, idx) => handleMarkerClick(marker, idx)}
        >
            <ControlsContainer>
                                {markers.length &&
                    <MenuControl
                        id="picklist-availability-1"
                        onChange={handleCarAvailability}
                        value={carAvailabilityState}
                        label="Select Car Availability"
                        hideLabel
                    >
                        <PicklistOption name="all" label="All" />
                        <PicklistOption name="availables" label="Availables" />
                        <PicklistOption name="busy" label="Busy" />
                    </MenuControl>}
                <div className="rainbow-flex">
                    <ButtonIcon
                        size="medium"
                        icon={<Icon icon={faCrosshairs} />}
                        variant="border-filled"
                        onClick={handleCenterGeolocation}
                        className="rainbow-m-right_medium"
                    />
                    <RegularControl
                        className="rainbow-m-right_medium"
                        type="checkbox"
                        label="Traffic"
                        onClick={handleShowTraffic}
                        checked={showTrafficState} />
                    <RegularControl
                        className="rainbow-m-right_medium"
                        type="checkbox"
                        label="Transit"
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
                </div>
            </ControlsContainer>
        </PresenceMap>
    );
}

<PresenceMapExample />
```
