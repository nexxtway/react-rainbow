import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import MapComponent from './component';

const googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';

/**
 * @category Layout
 */
export default function PresenceMap(props) {
    const { apiKey, ...rest } = props;
    const Component = useCallback(scriptLoader(`${googleMapApiUrl}?key=${apiKey}`)(MapComponent), [
        apiKey,
    ]);

    return <Component {...rest} />;
}

PresenceMap.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** An array of Markers. */
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.shape({
                lat: PropTypes.number,
                lng: PropTypes.number,
            }).isRequired,
            icon: PropTypes.shape({
                path: PropTypes.string.isRequired,
                fillColor: PropTypes.string,
                fillOpacity: PropTypes.number,
                scale: PropTypes.number,
                strokeColor: PropTypes.string,
                strokeOpacity: PropTypes.number,
                strokeWeight: PropTypes.number,
                rotation: PropTypes.number,
            }),
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
    zoom: PropTypes.number,
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
    type: PropTypes.oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']),
    onMarkerClick: PropTypes.func,
};

PresenceMap.defaultProps = {
    markers: [],
    zoom: 2,
    className: undefined,
    style: undefined,
    center: 'auto',
    showTraffic: false,
    showTransit: false,
    children: null,
    type: 'roadmap',
    onMarkerClick: () => {},
};
