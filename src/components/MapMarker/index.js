/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './../GMap/context';
import { uniqueId } from './../../libs/utils';
import Icon from './icon';
import './styles.css';

const marker = Symbol('marker');

class Marker extends Component {
    constructor(props) {
        super(props);
        this.getLocationInfo = this.getLocationInfo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.name = uniqueId('marker');
        this.state = {};
    }

    componentDidUpdate({ map: prevMap }) {
        const { map, latitude, longitude, geocoder } = this.props;
        if (!prevMap && map && latitude && longitude) {
            const position = {
                lat: latitude,
                lng: longitude,
            };
            this[marker] = new window.google.maps.Marker({
                position,
                map,
            });
            this.markerListener = this[marker].addListener('click', this.handleMarkerClick);
            geocoder.geocode({ location: position }, this.getLocationInfo);
        }
    }

    componentWillUnmount() {
        window.google.maps.event.removeListener(this.markerListener);
    }

    getLocationInfo(results, status) {
        if (status === 'OK' && results[0]) {
            const { label, description } = this.props;
            const geoLabel = results[0].address_components[0].long_name;
            const geoDescription = results[0].formatted_address;
            const currentDescription = description || geoDescription;
            const infowindow = new window.google.maps.InfoWindow({
                content: currentDescription,
            });
            this.setState({
                label: label || geoLabel,
                description: currentDescription,
                infowindow,
            });
        }
    }

    getAssistiveAriaLiveText() {
        const { label } = this.state;
        if (this.isSelected()) {
            return `${label} is currently selected`;
        }
        return undefined;
    }

    handleMarkerClick() {
        const { privateMarkerClick } = this.props;
        const { infowindow } = this.state;
        if (this[marker]) {
            privateMarkerClick(infowindow, this[marker]);
        }
    }

    handleClick() {
        const { privateOnClick, latitude, longitude } = this.props;
        const position = {
            lat: latitude,
            lng: longitude,
        };
        if (this[marker]) {
            this[marker].setAnimation(null);
            privateOnClick(this.name, position);
        }
    }

    startAnimation() {
        if (this[marker]) {
            this[marker].setAnimation(window.google.maps.Animation.BOUNCE);
        }
    }

    stopAnimation() {
        if (this[marker]) {
            this[marker].setAnimation(null);
        }
    }

    isSelected() {
        const { selectedMarker } = this.props;
        return this.name === selectedMarker;
    }

    render() {
        const { className, style, latitude, longitude, icon } = this.props;
        const { label, description } = this.state;

        if (latitude && longitude) {
            return (
                <li className={className} style={style}>
                    <span className="rainbow-google-map-marker_assistive-aria-live" aria-live="polite">
                        {this.getAssistiveAriaLiveText()}
                    </span>
                    <button
                        className="rainbow-google-map-marker_button"
                        aria-pressed={this.isSelected()}
                        onClick={this.handleClick}
                        onMouseOver={this.startAnimation}
                        onFocus={this.startAnimation}
                        onMouseLeave={this.stopAnimation}
                        onBlur={this.stopAnimation}>

                        <Icon icon={icon} />
                        <span className="rainbow-google-map-marker_text-container">
                            <span className="rainbow-google-map-marker_label">{label}</span>
                            <span>{description}</span>
                        </span>
                    </button>
                </li>
            );
        }
        return null;
    }
}

export default function MapMarker(props) {
    return (
        <Consumer>
            {context => <Marker {...props} {...context} />}
        </Consumer>
    );
}

MapMarker.propTypes = {
    /** The label of the marker. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The description of the marker. */
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The angular distance of a place north or south of the earth's equator. */
    latitude: PropTypes.number.isRequired,
    /** The angular distance of a place east or west of the meridian at Greenwich. */
    longitude: PropTypes.number.isRequired,
    /** The icon to show if it is passed. If not passed a fallback icon will be showed. */
    icon: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

MapMarker.defaultProps = {
    label: undefined,
    description: undefined,
    icon: null,
    className: undefined,
    style: undefined,
};
