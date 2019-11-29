/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './../GMap/context';
import { uniqueId } from './../../libs/utils';
import Icon from './icon';
import HiddenElement from '../Structural/hiddenElement';
import StyledButton from './styled/button';
import StyledTextContainer from './styled/textContainer';
import StyledLabel from './styled/label';
import StyledLi from './styled/li';

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

        const { label, description } = props;
        this.state = {
            label,
            description,
        };
    }

    componentDidMount() {
        if (this.props.map) {
            this.setMarker();
        }
    }

    componentDidUpdate() {
        const { map, latitude, longitude } = this.props;

        if (!this[marker] && map && latitude && longitude) {
            this.setMarker();
        }
    }

    componentWillUnmount() {
        window.google.maps.event.removeListener(this.markerListener);
    }

    setMarker() {
        const { map, latitude, longitude, geocoder, label, description } = this.props;

        const position = {
            lat: latitude,
            lng: longitude,
        };
        this[marker] = new window.google.maps.Marker({
            position,
            map,
        });
        this.markerListener = this[marker].addListener('click', this.handleMarkerClick);
        if (!label && !description) {
            geocoder.geocode({ location: position }, this.getLocationInfo);
        } else if (!this.state.infowindow) {
            this.setInfoWindow();
        }
    }

    getLocationInfo(results, status) {
        if (status === 'OK' && results[0]) {
            const geoLabel = results[0].address_components[0].long_name;
            const geoDescription = results[0].formatted_address;
            const infowindow = new window.google.maps.InfoWindow({
                content: geoDescription,
            });
            this.setState({
                label: geoLabel,
                description: geoDescription,
                infowindow,
            });
        }
    }

    setInfoWindow() {
        const { description, label } = this.props;
        this.setState({
            infowindow: new window.google.maps.InfoWindow({
                content: description || label,
            }),
        });
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
                <StyledLi className={className} style={style}>
                    <HiddenElement aria-live="polite">
                        {this.getAssistiveAriaLiveText()}
                    </HiddenElement>
                    <StyledButton
                        aria-pressed={this.isSelected()}
                        onClick={this.handleClick}
                        onMouseOver={this.startAnimation}
                        onFocus={this.startAnimation}
                        onMouseLeave={this.stopAnimation}
                        onBlur={this.stopAnimation}
                    >
                        <Icon icon={icon} />
                        <StyledTextContainer>
                            <StyledLabel>{label}</StyledLabel>
                            <span>{description}</span>
                        </StyledTextContainer>
                    </StyledButton>
                </StyledLi>
            );
        }
        return null;
    }
}

/**
 * The MapMarker component is a single section of information that is nested in the GMap component.
 * This component shows you the detailed information of each location that is displayed in the GMap.
 */
export default function MapMarker(props) {
    return <Consumer>{context => <Marker {...props} {...context} />}</Consumer>;
}

MapMarker.propTypes = {
    /** The label of the marker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description of the marker. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The angular distance of a place north or south of the earth's equator. */
    latitude: PropTypes.number,
    /** The angular distance of a place east or west of the meridian at Greenwich. */
    longitude: PropTypes.number,
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
    latitude: undefined,
    longitude: undefined,
    icon: null,
    className: undefined,
    style: undefined,
};
