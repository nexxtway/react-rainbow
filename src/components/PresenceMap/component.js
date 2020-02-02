import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getMapContainerStyles from './getMapContainerStyles';
import StyledContainer from './styled/container';
import { usePrevious } from '../../libs/hooks';
import StyledControl from './styled/control';
import { Input } from '../../components';

const MAX_ZOOM = 15;
let trafficLayer = null;
let transitLayer = null;

export default function MapComponent(props) {
    const { showTraffic, showTransit, center, zoom, objects, style, className, controls } = props;
    const container = useRef();
    const mapContainer = useRef();
    const [map, setMap] = useState(null);
    const [showTrafficState, setShowTrafficState] = useState(showTraffic);
    const [showTransitState, setShowTransitState] = useState(showTransit);

    const initMap = useCallback(() => {
        const toggleTraffic = _map => {
            if (trafficLayer) {
                if (trafficLayer.getMap() === null) {
                    trafficLayer.setMap(_map);
                } else {
                    trafficLayer.setMap(null);
                }
                setShowTrafficState(!showTrafficState);
            }
        };

        const toggleTransit = _map => {
            if (transitLayer) {
                if (transitLayer.getMap() === null) {
                    transitLayer.setMap(_map);
                } else {
                    transitLayer.setMap(null);
                }
                setShowTransitState(!showTransitState);
            }
        };

        const createControl = (controlDiv, _map, control) => {
            ReactDOM.render(
                <StyledControl>
                    {control.action === 'showtraffic' && (
                        <Input
                            label={control.text}
                            type="checkbox"
                            onClick={() => toggleTraffic(_map)}
                            checked={showTrafficState}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                    {control.action === 'showtransit' && (
                        <Input
                            label={control.text}
                            type="checkbox"
                            onClick={() => toggleTransit(_map)}
                            checked={showTransitState}
                            style={{ cursor: 'pointer' }}
                        />
                    )}
                </StyledControl>,
                controlDiv,
            );
        };

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
                        markersCopy.forEach(markerObj => bounds.extend(markerObj.getPosition()));
                        newMap.setCenter(bounds.getCenter());
                        newMap.fitBounds(bounds);
                    }
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(`Error. Details: ${error}`);
                });
        });

        trafficLayer = new window.google.maps.TrafficLayer();
        transitLayer = new window.google.maps.TransitLayer();

        controls.forEach(control => {
            const controlDiv = document.createElement('div');
            createControl(controlDiv, newMap, control);
            controlDiv.index = 1;
            newMap.controls[window.google.maps.ControlPosition[control.position]].push(controlDiv);
        });

        setMap(newMap);
    }, [objects, controls, center, zoom, showTrafficState, showTransitState]);

    const prevIsScriptLoaded = usePrevious(props.isScriptLoaded);
    useEffect(() => {
        if (!prevIsScriptLoaded && props.isScriptLoaded && props.isScriptLoadSucceed) {
            initMap();
        }
    }, [prevIsScriptLoaded, props.isScriptLoaded, props.isScriptLoadSucceed, initMap]);

    useEffect(() => {
        if (map && showTraffic) {
            trafficLayer.setMap(map);
        }
    }, [map, showTraffic]);

    useEffect(() => {
        if (map && showTransit) {
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
    controls: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            action: PropTypes.string,
        }),
    ),
};

MapComponent.defaultProps = {
    objects: [],
    className: undefined,
    style: undefined,
    zoom: 'auto',
    center: 'auto',
    showTraffic: false,
    showTransit: false,
    controls: [],
};
