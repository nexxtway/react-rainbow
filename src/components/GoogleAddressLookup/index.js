import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import PlacesLookupComponent from './component';
/**
 * The GoogleAddressLookup component is used to find a location.
 */
export default function GoogleAddressLookup(props) {
    const { apiKey, ...rest } = props;

    const Component = scriptLoader(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
    )(PlacesLookupComponent);

    return <Component {...rest} />;
}

GoogleAddressLookup.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** Text label for the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the component label. */
    hideLabel: PropTypes.bool,
    /** Specifies the selected value of the component. */
    value: PropTypes.shape({
        /**
         * This is the unformatted version of the query suggested by Google Places service.
         */
        description: PropTypes.string,
        /**
         * A stable ID for this place, intended to be interoperable with those returned by
         * the place search service. Note: This has been deprecated in favor of place_id.
         */
        id: PropTypes.string,
        /**
         * A set of substrings in the place's description that match elements in the user's
         * input, suitable for use in highlighting those substrings. Each substring is
         * identified by an offset and a length, expressed in unicode characters.
         */
        matched_substrings: PropTypes.arrayOf(
            PropTypes.shape({
                length: PropTypes.number,
                offset: PropTypes.number,
            }),
        ),
        /**
         * A place ID that can be used to retrieve details about this place using the place
         * details service (see PlacesService.getDetails()).
         */
        place_id: PropTypes.string,
        /**
         * A reference that can be used to retrieve details about this place using the place
         * details service (see PlacesService.getDetails()). Note: This has been deprecated
         * in favor of place_id.
         */
        reference: PropTypes.string,
        structured_formatting: PropTypes.arrayOf(
            PropTypes.shape({
                main_text: PropTypes.string,
                main_text_matched_substrings: PropTypes.arrayOf(
                    PropTypes.shape({
                        length: PropTypes.number,
                        offset: PropTypes.number,
                    }),
                ),
                secondary_text: PropTypes.string,
            }),
        ),
        /**
         * Information about individual terms in the above description, from most to least specific.
         * For example, "Taco Bell", "Willitis", and "CA".
         */
        terms: PropTypes.arrayOf(
            PropTypes.shape({
                offset: PropTypes.number,
                value: PropTypes.string,
            }),
        ),
        /**
         * An array of types that the prediction belongs to, for example 'establishment' or 'geocode'.
         */
        types: PropTypes.arrayOf(PropTypes.string),
    }),
    /** The name of the component. */
    name: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the component must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the component must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the component element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** */
    searchOptions: PropTypes.shape({
        /**
         * Bounds for prediction biasing. Predictions will be
         * biased towards, but not restricted to, the given bounds.
         * Both location and radius will be ignored if bounds is set.
         */
        bounds: PropTypes.shape({
            sw: PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
            }),
            ne: PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
            }),
        }),
        /**
         * The country in ISO 3166-1 Alpha-2 country code (case insensitive).
         * E.g. 'us', 'br'
         */
        country: PropTypes.string,
        /**
         * Location for prediction biasing. Predictions will be biased
         * towards the given location and radius. Alternatively, bounds
         * can be used.
         */
        location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        }),
        /**
         * The radius of the area used for prediction biasing. The radius is
         * specified in meters, and must always be accompanied by a location
         * property. Alternatively, bounds can be used.
         */
        radius: PropTypes.number,
        /**
         * The types of predictions to be returned. Four types are supported:
         * 'establishment' for businesses, 'geocode' for addresses, '(regions)'
         * for administrative regions and '(cities)' for localities. If nothing
         * is specified, all types are returned.
         */
        types: PropTypes.arrayOf(PropTypes.string),
    }),
};

GoogleAddressLookup.defaultProps = {
    apiKey: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
    searchOptions: {},
};
