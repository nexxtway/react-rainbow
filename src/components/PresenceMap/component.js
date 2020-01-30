import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMapContainerStyles from './getMapContainerStyles';
import StyledContainer from './styled/container';
import { usePrevious } from '../../libs/hooks';

const MAX_ZOOM = 15;

export default function MapComponent(props) {
    const { showTraffic, showTransit, center, zoom, objects, style, className } = props;
    const container = useRef();
    const mapContainer = useRef();
    const [map, setMap] = useState(null);

    const prevIsScriptLoaded = usePrevious(props.isScriptLoaded);
    useEffect(() => {
        if (!prevIsScriptLoaded && props.isScriptLoaded && props.isScriptLoadSucceed) {
            const getImage = async url =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = url;
                });

            const getBase64Image = async (srcUrl, heading) => {
                const img = await getImage(srcUrl);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 40;
                canvas.height = 50;
                const cache = img;
                const imageWidth = cache.width;
                const imageHeight = cache.height;
                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate((Math.PI / 180) * heading);
                ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
                const xCenter = canvas.width / 2 - imageWidth / 2;
                const yCenter = canvas.height / 2 - imageHeight / 2;
                ctx.drawImage(img, xCenter, yCenter, imageWidth, imageHeight);
                ctx.restore();

                return canvas.toDataURL();
            };

            const initMap = () => {
                const mapOptions = {
                    zoom: zoom === 'auto' ? MAX_ZOOM : zoom,
                    center: center !== 'auto' ? center : null,
                    disableDefaultUI: true,
                };
                const newMap = new window.google.maps.Map(mapContainer.current, mapOptions);
                const markersCopy = [];

                objects.forEach(marker => {
                    const heading = marker.heading ? marker.heading : 0;

                    const markerOptions = {
                        position: marker.position,
                        map: newMap,
                        zIndex: Math.round(marker.position.lat * 100000),
                    };

                    let promImage = null;

                    if (marker.image) {
                        promImage = new Promise((resolve, reject) => {
                            const result = getBase64Image(marker.image, heading);
                            result
                                .then(img => {
                                    markerOptions.icon = img;
                                    resolve(true);
                                })
                                .catch(error => {
                                    reject(`Error creating new image. Details: ${error}`);
                                });
                        });
                    } else {
                        promImage = new Promise(resolve => resolve(true));
                    }

                    promImage
                        .then(() => {
                            const markerMap = new window.google.maps.Marker(markerOptions);
                            markersCopy.push(markerMap);

                            if (center === 'auto') {
                                const bounds = new window.google.maps.LatLngBounds();
                                markersCopy.forEach(markerObj =>
                                    bounds.extend(markerObj.getPosition()),
                                );
                                newMap.setCenter(bounds.getCenter());
                                newMap.fitBounds(bounds);
                            }

                            setMap(newMap);
                        })
                        .catch(error => {
                            // eslint-disable-next-line no-console
                            console.log(`Error. Details: ${error}`);
                        });
                });
            };
            initMap();
        }
    }, [
        center,
        objects,
        zoom,
        prevIsScriptLoaded,
        props.isScriptLoaded,
        props.isScriptLoadSucceed,
    ]);

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

    return (
        <StyledContainer style={style} className={className} ref={container}>
            <div ref={mapContainer} style={getMapContainerStyles(container.current)} />
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
    zoom: PropTypes.oneOf([PropTypes.number, 'auto']),
    center: PropTypes.oneOf([
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        'auto',
    ]),
    showTraffic: PropTypes.bool,
    showTransit: PropTypes.bool,
    // eslint-disable-next-line
    children: PropTypes.node,
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
