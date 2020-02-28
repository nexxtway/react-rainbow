import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import StyledControls from './styled/controls';
import getMapContainerStyles from './getMapContainerStyles';

const MAX_ZOOM = 15;

export default function MapComponent(props) {
    const {
        showTraffic,
        showTransit,
        center,
        zoom,
        markers,
        style,
        className,
        children,
        type,
        isScriptLoaded,
        isScriptLoadSucceed,
        onMarkerClick,
    } = props;
    const container = useRef();
    const mapContainer = useRef();
    const [map, setMap] = useState();
    const [mapMarkers, updateMapMarkers] = useState([]);
    const [trafficLayer, setTrafficLayer] = useState(false);
    const [transitLayer, setTransitLayer] = useState(false);

    useEffect(() => {
        if (isScriptLoaded && isScriptLoadSucceed) {
            const mapOptions = {
                zoom: 2,
                center: { lat: 0, lng: 0 },
                disableDefaultUI: true,
            };
            const mapInstance = new window.google.maps.Map(mapContainer.current, mapOptions);
            const trafficInstance = new window.google.maps.TrafficLayer();
            const transitInstance = new window.google.maps.TransitLayer();
            setMap(mapInstance);
            setTrafficLayer(trafficInstance);
            setTransitLayer(transitInstance);
        }
    }, [isScriptLoaded, isScriptLoadSucceed]);

    const handleMarkerClick = (marker, index) => {
        onMarkerClick(marker, index);
    };

    useEffect(() => {
        if (map) {
            mapMarkers.forEach(marker => marker.setMap(null));
            if (Array.isArray(markers)) {
                const instances = markers.map((marker, index) => {
                    const instance = new window.google.maps.Marker({
                        position: marker.position,
                        icon: marker.icon,
                        map,
                        zIndex: Math.round(marker.position.lat * 100000),
                    });
                    instance.addListener('click', () => handleMarkerClick(marker, index));
                    return instance;
                });
                updateMapMarkers(instances);
            } else {
                updateMapMarkers([]);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [markers, map]);

    useEffect(() => {
        if (map) {
            trafficLayer.setMap(showTraffic ? map : null);
        }
    }, [showTraffic, map, trafficLayer]);

    useEffect(() => {
        if (map) {
            transitLayer.setMap(showTransit ? map : null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showTransit, map]);

    useEffect(() => {
        if (map) {
            const hasNewMarkers = mapMarkers.length > 0;
            if (center === 'auto') {
                if (hasNewMarkers) {
                    const bounds = new window.google.maps.LatLngBounds();
                    mapMarkers.forEach(markerInstance =>
                        bounds.extend(markerInstance.getPosition()),
                    );
                    map.setCenter(bounds.getCenter());
                    if (mapMarkers.length > 1) {
                        map.fitBounds(bounds);
                    } else {
                        map.setZoom(MAX_ZOOM);
                    }
                }
            } else {
                map.setCenter(center);
                map.setZoom(MAX_ZOOM);
            }
        }
    }, [center, map, mapMarkers]);

    useEffect(() => {
        if (map) {
            map.setZoom(Math.min(zoom, MAX_ZOOM));
        }
    }, [zoom, map]);

    useEffect(() => {
        if (map) {
            map.setMapTypeId(type);
        }
    }, [type, map]);

    return (
        <StyledContainer style={style} className={className} ref={container}>
            <div ref={mapContainer} style={getMapContainerStyles(container.current)} />
            <StyledControls>{children}</StyledControls>
        </StyledContainer>
    );
}

MapComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.shape({
                lat: PropTypes.number,
                lng: PropTypes.number,
            }).isRequired,
            icon: PropTypes.shape({
                path: PropTypes.string.isRequired,
                fillColor: PropTypes.string,
                fillOpacity: PropTypes.number,
                scale: PropTypes.number,
                strokeColor: PropTypes.string,
                strokeOpacity: PropTypes.number,
                strokeWeight: PropTypes.number,
                rotation: PropTypes.number,
            }),
        }),
    ),
    className: PropTypes.string,
    style: PropTypes.object,
    zoom: PropTypes.number,
    center: PropTypes.oneOfType([
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        PropTypes.oneOf(['auto']),
    ]),
    showTraffic: PropTypes.bool,
    showTransit: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']),
    onMarkerClick: PropTypes.func,
};

MapComponent.defaultProps = {
    markers: [],
    className: undefined,
    style: undefined,
    zoom: 2,
    center: 'auto',
    showTraffic: false,
    showTransit: false,
    children: null,
    type: 'roadmap',
    onMarkerClick: () => {},
};
