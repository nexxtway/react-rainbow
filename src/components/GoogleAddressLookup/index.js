import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import PlacesLookupComponent from './component';
import * as CustomPropTypes from './proptypes';

const googleMapApiUrl = 'https://maps.googleapis.com/maps/api/js';

/**
 * The GoogleAddressLookup component is used to find a location.
 * @category Form
 */
export default function GoogleAddressLookup(props) {
    const { apiKey, variant, ...rest } = props;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const Component = useCallback(
        scriptLoader(`${googleMapApiUrl}?key=${apiKey}&libraries=places`)(PlacesLookupComponent),
        [apiKey],
    );

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component variant={variant} {...rest} />;
}

GoogleAddressLookup.propTypes = {
    /** The application's API key. To use the Google Maps JavaScript API,
     * you must get an API Key. See https://console.cloud.google.com/google/maps-apis/overview
     * to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** Text label for the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the component label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the component label. */
    hideLabel: PropTypes.bool,
    /** Specifies the selected value of the component. */
    value: PropTypes.oneOfType([
        CustomPropTypes.predictionShape,
        CustomPropTypes.placeDetailsShape,
        PropTypes.string,
    ]),
    /** The name of the component. */
    name: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the component must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the component is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
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
    // onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /**
     * An object with custom search options,
     * for example:
     *  searchOptions: {
     *      location: {
     *          latitude: -33.941264,
     *          longitude: 151.2042969,
     *      },
     *      country: 'us',
     *      radius: 150000,
     *      types: ['address'],
     *  }
     */
    searchOptions: CustomPropTypes.searchOptionsShape,
    /** The variant changes the appearance of the Input. Accepted variants include default,
     *shaded and bare. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
};

GoogleAddressLookup.defaultProps = {
    label: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    onClick: () => {},
    // onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    searchOptions: {},
    variant: 'default',
};
