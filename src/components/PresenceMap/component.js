import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMapContainerStyles from './getMapContainerStyles';
import StyledContainer from './styled/container';
import StyledMapContainer from './styled/mapContainer';

export default function MapComponent(props) {
    const container = useRef();
    const mapContainer = useRef();
    const [markers, setMarker] = useState([]);
    const MAX_ZOOM = 14;

    const prevIsScriptLoaded = useRef(props.isScriptLoaded);
    useEffect(() => {
        if (!prevIsScriptLoaded.current && props.isScriptLoaded && props.isScriptLoadSucceed) {
            // eslint-disable-next-line
            initMap();
        }
        // eslint-disable-next-line
    }, [props.isScriptLoaded, props.isScriptLoadSucceed]);

    const getContainerClassNames = () => {
        const { className } = props;
        if (className && typeof className === 'string') {
            return `rainbow-google-map ${className}`;
        }
        return 'rainbow-google-map';
    };

    const initMap = () => {
        const { zoom, center, objects, showTraffic, showTransit } = props;

        const mapOptions = {
            zoom: zoom === 'auto' ? MAX_ZOOM : zoom,
            center: center !== 'auto' ? center : null,
            disableDefaultUI: true,
        };

        const map = new window.google.maps.Map(mapContainer.current, mapOptions);
        const markersCopy = [...markers];

        objects.forEach(marker => {
            const markerMap = new window.google.maps.Marker({
                position: marker.position,
                map,
                zIndex: Math.round(marker.position.lat * 100000),
            });
            markersCopy.push(markerMap);
        });

        if (center === 'auto') {
            const bounds = new window.google.maps.LatLngBounds();

            markersCopy.map(marker => bounds.extend(marker.getPosition()));

            map.setCenter(bounds.getCenter());
            map.fitBounds(bounds);

            let removeListener = null;
            const listener = window.google.maps.event.addListener(map, 'bounds_changed', () => {
                const currentZoom = map.getZoom();
                if (currentZoom > MAX_ZOOM) {
                    map.setZoom(MAX_ZOOM);
                } else if (zoom !== 'auto' && currentZoom !== zoom) {
                    map.setZoom(zoom);
                }

                if (!removeListener) {
                    removeListener = window.google.maps.event.addListenerOnce(map, 'idle', () => {
                        window.google.maps.event.removeListener(listener);
                    });
                }
            });
        }

        if (showTraffic) {
            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        }

        if (showTransit) {
            const transitLayer = new window.google.maps.TransitLayer();
            transitLayer.setMap(map);
        }

        setMarker(markersCopy);
    };

    const { style } = props;

    return (
        <StyledContainer className={getContainerClassNames()} style={style} ref={container}>
            <StyledMapContainer
                className="rainbow-google-map_map-container"
                ref={mapContainer}
                style={getMapContainerStyles(container.current)}
            />
        </StyledContainer>
    );
}

MapComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    objects: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.shape({
                lat: PropTypes.number,
                lng: PropTypes.number,
            }),
            heading: PropTypes.number,
            image: PropTypes.string,
            onClick: PropTypes.func,
        }),
    ),
    className: PropTypes.string,
    style: PropTypes.object,
    zoom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    center: PropTypes.oneOfType([
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        PropTypes.string,
    ]),
    showTraffic: PropTypes.bool,
    showTransit: PropTypes.bool,
    // eslint-disable-next-line
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

MapComponent.defaultProps = {
    objects: [],
    className: undefined,
    style: undefined,
    zoom: 'auto',
    center: 'auto',
    showTraffic: false,
    showTransit: false,
    children: null,
};
