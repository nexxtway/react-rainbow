import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { usePrevious } from '../../libs/hooks';
import createMarkers from './helpers/createMarkers';
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
        objects,
        style,
        className,
        children,
        type,
    } = props;
    const container = useRef();
    const mapContainer = useRef();
    const [map, setMap] = useState(null);

    const initMap = useCallback(() => {
        const mapOptions = {
            zoom: zoom === 'auto' ? MAX_ZOOM : zoom,
            center: center !== 'auto' ? center : null,
            disableDefaultUI: true,
        };
        const googleMap = new window.google.maps.Map(mapContainer.current, mapOptions);
        createMarkers({
            objects,
            googleMap,
            center,
        });
        setMap(googleMap);
    }, [objects, center, zoom]);

    const prevIsScriptLoaded = usePrevious(props.isScriptLoaded);
    useEffect(() => {
        if (!prevIsScriptLoaded && props.isScriptLoaded && props.isScriptLoadSucceed) {
            initMap();
        }
    }, [prevIsScriptLoaded, props.isScriptLoaded, props.isScriptLoadSucceed, initMap]);

    useEffect(() => {
        if (map && showTraffic) {
            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        }
    }, [map, showTraffic]);

    useEffect(() => {
        if (map && showTransit) {
            const transitLayer = new window.google.maps.TransitLayer();
            transitLayer.setMap(map);
        }
    }, [map, showTransit]);

    useEffect(() => {
        if (map && center === 'auto') {
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
    }, [map, center, zoom]);

    useEffect(() => {
        if (map && type) {
            map.setMapTypeId(type);
        }
    }, [map, type]);

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
    zoom: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
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
    type: PropTypes.string,
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
    type: 'roadmap',
};
