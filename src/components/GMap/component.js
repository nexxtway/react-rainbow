import React, { Component } from 'react';
import PropTypes from 'prop-types';
import daynight from 'daynight';
import RenderIf from './../RenderIf';
import Header from './header';
import { Provider } from './context';
import getMapContainerStyles from './getMapContainerStyles';
import StyledContainer from './styled/container';
import StyledMapContainer from './styled/mapContainer';
import StyledCoordinatesContainer from './styled/coordinatesContainer';

const currentInfoWindow = Symbol('currentInfoWindow');

export default class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.mapContainer = React.createRef();
        this.initMap = this.initMap.bind(this);
        this.selectMarker = this.selectMarker.bind(this);
        this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
        this[currentInfoWindow] = null;

        this.state = {
            privateOnClick: this.selectMarker,
            privateMarkerClick: this.toggleInfoWindow,
            markers: [],
        };
    }

    componentDidUpdate({ isScriptLoaded: prevIsScriptLoaded }) {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (!prevIsScriptLoaded && isScriptLoaded && isScriptLoadSucceed) {
            this.initMap();
        }
    }

    getContainerClassNames() {
        const { className } = this.props;
        if (className && typeof className === 'string') {
            return `rainbow-google-map ${className}`;
        }
        return 'rainbow-google-map';
    }

    initMap() {
        const {
            zoom,
            latitude,
            longitude,
            showTraffic,
            showTransit,
            dayNightMode,
            currentPosition,
        } = this.props;

        const userDayNight = daynight();

        const stylesMapNightMode = [
            {
                elementType: 'geometry',
                stylers: [{ color: '#242f3e' }],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#242f3e' }],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#746855' }],
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }],
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }],
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }],
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }],
            },
        ];

        const dayNightStyle = () => {
            if (dayNightMode === 'night' || (dayNightMode === 'automatic' && userDayNight.dark)) {
                return stylesMapNightMode;
            }
            return null;
        };

        const map = new window.google.maps.Map(this.mapContainer.current, {
            center: {
                lat: latitude,
                lng: longitude,
            },
            zoom,
            fullscreenControl: false,
            styles: dayNightStyle(),
            mapTypeId: 'roadmap',
            mapTypeControlOptions: {
                mapTypeIds: [
                    'roadmap',
                    'satellite',
                    'hybrid',
                    'terrain',
                    // 'styled_map',
                ],
            },
        });

        // const styledMapType =
        /* new window.google.maps.StyledMapType(
                stylesMapNightMode,
                {name: 'Night Mode'}
            ); */

        // Associate the styled map with the MapTypeId and set it to display.
        // map.mapTypes.set('styled_map', styledMapType);
        // map.setMapTypeId('styled_map');

        if (showTraffic) {
            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        }

        if (showTransit) {
            const transitLayer = new window.google.maps.TransitLayer();
            transitLayer.setMap(map);
        }

        if (currentPosition) {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(
                    position => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        const markers = [...this.state.markers];
                        if (markers.length > 0) {
                            markers[0].setPosition(pos);
                        } else {
                            markers.push(
                                new window.google.maps.Marker({
                                    position: pos,
                                    map,
                                }),
                            );
                            this.setState({ markers });
                        }
                        map.setCenter(pos);
                    },
                    () => {
                        map.setCenter(map.getCenter());
                    },
                );
            } else {
                // Browser doesn't support Geolocation
                map.setCenter(map.getCenter());
            }
        }

        const geocoder = new window.google.maps.Geocoder();
        this.setState({ map, geocoder });
    }

    selectMarker(name, position) {
        const { map } = this.state;

        this.setState({
            selectedMarker: name,
        });
        map.panTo(position);
    }

    toggleInfoWindow(infowindow, marker) {
        const { map } = this.state;
        if (this[currentInfoWindow] === null) {
            this[currentInfoWindow] = infowindow;
            return infowindow.open(map, marker);
        }
        if (this[currentInfoWindow] && this[currentInfoWindow].content !== infowindow.content) {
            this[currentInfoWindow].close(map, marker);
            this[currentInfoWindow] = infowindow;
            return infowindow.open(map, marker);
        }
        this[currentInfoWindow].close(map, marker);
        this[currentInfoWindow] = null;
        return null;
    }

    render() {
        const { header, children, style } = this.props;

        return (
            <StyledContainer
                className={this.getContainerClassNames()}
                style={style}
                ref={this.container}
            >
                <StyledMapContainer
                    className="rainbow-google-map_map-container"
                    ref={this.mapContainer}
                    style={getMapContainerStyles(this.container.current)}
                />

                <StyledCoordinatesContainer>
                    <RenderIf isTrue={!!header}>
                        <Header text={header} />
                    </RenderIf>
                    <ul>
                        <Provider value={this.state}>{children}</Provider>
                    </ul>
                </StyledCoordinatesContainer>
            </StyledContainer>
        );
    }
}

MapComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    className: PropTypes.string,
    style: PropTypes.object,
    showTraffic: PropTypes.bool,
    showTransit: PropTypes.bool,
    dayNightMode: PropTypes.oneOf(['automatic', 'day', 'night']),
    currentPosition: PropTypes.bool,
};

MapComponent.defaultProps = {
    header: undefined,
    children: null,
    className: undefined,
    style: undefined,
    showTraffic: false,
    showTransit: false,
    dayNightMode: 'automatic',
    currentPosition: false,
};
