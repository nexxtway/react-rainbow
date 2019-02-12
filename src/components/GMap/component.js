import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from './../RenderIf';
import Header from './header';
import { Provider } from './context';
import getMapContainerStyles from './getMapContainerStyles';
import './styles.css';

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
        return classnames('rainbow-google-map', className);
    }

    initMap() {
        const { zoom, latitude, longitude } = this.props;

        const map = new window.google.maps.Map(this.mapContainer.current, {
            center: {
                lat: latitude,
                lng: longitude,
            },
            zoom,
            fullscreenControl: false,
        });
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
        const {
            header,
            children,
            style,
        } = this.props;

        return (
            <div className={this.getContainerClassNames()} style={style} ref={this.container}>
                <div
                    ref={this.mapContainer}
                    style={getMapContainerStyles(this.container.current)}
                    className="rainbow-google-map_map-container" />

                <div className="rainbow-google-map_coordinates-container">
                    <RenderIf isTrue={!!header}>
                        <Header text={header} />
                    </RenderIf>
                    <ul>
                        <Provider value={this.state}>
                            {children}
                        </Provider>
                    </ul>
                </div>
            </div>
        );
    }
}

MapComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    header: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    className: PropTypes.string,
    style: PropTypes.object,
};

MapComponent.defaultProps = {
    header: undefined,
    children: null,
    className: undefined,
    style: undefined,
};
