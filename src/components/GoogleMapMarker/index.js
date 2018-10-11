/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './../GoogleMap/context';
import AssistiveText from './../AssistiveText';
import { uniqueId } from './../../libs/utils';
import MarkerIcon from './icon';
import './styles.css';

const ICON_DESCRIPTION = 'marker icon';
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
        const { map, position, geocoder } = this.props;
        if (!prevMap && map && position) {
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
        const { privateOnClick, position } = this.props;
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
        const { className, style, position } = this.props;
        const { label, description } = this.state;

        if (position) {
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

                        <span className="rainbow-google-map-marker_icon" title={ICON_DESCRIPTION}>
                            <MarkerIcon />
                            <AssistiveText text={ICON_DESCRIPTION} />
                        </span>
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

export default function GoogleMapMarker(props) {
    return (
        <Consumer>
            {context => <Marker {...props} {...context} />}
        </Consumer>
    );
}

GoogleMapMarker.propTypes = {
    /** The label of the marker. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The description of the marker. */
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Represent the position of the marker. It's value is an object with the lat and lng keys
     * that correspond with the coordinates. */
    position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

GoogleMapMarker.defaultProps = {
    label: undefined,
    description: undefined,
    className: undefined,
    style: undefined,
};
