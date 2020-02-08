import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import MapComponent from './component';

/**
 * @category Layout
 */
export default function PresenceMap(props) {
    const { apiKey, ...rest } = props;

    const Component = scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)(
        MapComponent,
    );
    return <Component {...rest} />;
}

PresenceMap.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** An array with the Map objects. */
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Represent the initial resolution at which to display the map,
     * where zoom 0 corresponds to a map of the Earth fully zoomed out,
     * and larger zoom levels zoom in at a higher resolution.
     * Specify zoom level as an integer. This value defaults to 8. */
    zoom: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
    /** Map center point  */
    center: PropTypes.oneOfType([
        PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        PropTypes.oneOf(['auto']),
    ]),
    /** Option to show traffic in map */
    showTraffic: PropTypes.bool,
    /** Option to show transit in map */
    showTransit: PropTypes.bool,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** Map type. */
    type: PropTypes.string,
};

PresenceMap.defaultProps = {
    objects: [],
    zoom: 'auto',
    className: undefined,
    style: undefined,
    center: 'auto',
    showTraffic: false,
    showTransit: false,
    children: null,
    type: 'roadmap',
};
