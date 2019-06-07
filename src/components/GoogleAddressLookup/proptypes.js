/* eslint-disable import/prefer-default-export */
import { PropTypes } from 'prop-types';

export const searchOptionsShape = PropTypes.shape({
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
     * The country restrictions in ISO 3166-1 Alpha-2 country code (case insensitive).
     * Up to five countries
     * E.g.
     *      ['us', 'ca'] to search places within United States and Canada only
     *      'us' to search places within United States only
     */
    country: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
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
});

export const valueShape = PropTypes.shape({
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
     * details service.
     */
    place_id: PropTypes.string,
    /**
     * A reference that can be used to retrieve details about this place using the place
     * details service. Note: This has been deprecated
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
     * Information about individual terms in the above description,
     * from most to least specific.
     * For example, "Taco Bell", "Willitis", and "CA".
     */
    terms: PropTypes.arrayOf(
        PropTypes.shape({
            offset: PropTypes.number,
            value: PropTypes.string,
        }),
    ),
    /**
     * An array of types that the prediction belongs to,
     * for example 'establishment' or 'geocode'.
     */
    types: PropTypes.arrayOf(PropTypes.string),
});
