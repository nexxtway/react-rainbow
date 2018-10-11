import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import MapComponent from './component';

export default function GoogleMap(props) {
    const { apiKey, ...rest } = props;

    const Component = scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)(MapComponent);
    return <Component {...rest} />;
}

GoogleMap.propTypes = {
    /** Represent the center of the map. It's value is an object with the lat and lng keys
     * that correspond with the coordinates. */
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    /** Represent the initial resolution at which to display the map,
     * where zoom 0 corresponds to a map of the Earth fully zoomed out,
     * and larger zoom levels zoom in at a higher resolution.
     * Specify zoom level as an integer. This value defaults to 8. */
    zoom: PropTypes.number,
    /** The header can include text or another component,
    * and is displayed below the map and above the markers. */
    header: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

GoogleMap.defaultProps = {
    center: { lat: 37.8, lng: -122.5 },
    zoom: 8,
    header: undefined,
    children: null,
    className: undefined,
    style: undefined,
};
