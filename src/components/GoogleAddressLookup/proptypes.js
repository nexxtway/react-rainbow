/* eslint-disable import/prefer-default-export */
import { PropTypes } from 'prop-types';

export const aspectsRating = PropTypes.shape({
    /**
     * The rating of this aspect. For individual reviews this is an
     * integer from 0 to 3. For aggregated ratings of a place this
     * is an integer from 0 to 30.
     */
    rating: PropTypes.number,
    /**
     * The aspect type, e.g. 'food', 'decor', 'service', 'overall'.
     */
    type: PropTypes.string,
});

export const mapCoordinates = PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
});

export const mapViewportCoordinates = PropTypes.shape({
    south: PropTypes.number.isRequired,
    west: PropTypes.number.isRequired,
    north: PropTypes.number.isRequired,
    east: PropTypes.number.isRequired,
});

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

export const predictionShape = PropTypes.shape({
    /**
     * This is the unformatted version of the query suggested by Google Places service.
     */
    description: PropTypes.string,
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
    structured_formatting: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * Contains the main text of a prediction, usually the name of the place.
             */
            main_text: PropTypes.string,
            /**
             * Contains an array with offset value and length. These describe the
             * location of the entered term in the prediction result text, so that
             * the term can be highlighted if desired.
             */
            main_text_matched_substrings: PropTypes.arrayOf(
                PropTypes.shape({
                    length: PropTypes.number,
                    offset: PropTypes.number,
                }),
            ),
            /**
             * Contains the secondary text of a prediction, usually the location of the place.
             */
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

export const placeDetailsShape = PropTypes.shape({
    /**
     * The collection of address components for this Place's location.
     */
    address_components: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The full text of the address component
             */
            long_name: PropTypes.string,
            /**
             * The abbreviated, short text of the given address component
             */
            short_name: PropTypes.string,
            /**
             * An array of strings denoting the type of this
             * address component. A list of valid types can be found here
             */
            types: PropTypes.arrayOf(PropTypes.string),
        }),
    ),
    /**
     * The rated aspects of this Place, based on Google and Zagat user
     * reviews. The ratings are on a scale of 0 to 30.
     */
    aspects: PropTypes.arrayOf(aspectsRating),
    /**
     * The Place's full address.
     */
    formatted_address: PropTypes.string,
    /**
     * The Place's phone number, formatted according to the
     * number's regional convention.
     */
    formatted_phone_number: PropTypes.string,
    /**
     * The Place's geometry-related information.
     */
    geometry: PropTypes.shape({
        /**
         * The Place's position.
         */
        location: mapCoordinates,
        /**
         * The preferred viewport when displaying this Place on a map.
         * This property will be null if the preferred viewport for the
         * Place is not known.
         */
        viewport: mapViewportCoordinates,
    }),
    /**
     * Attribution text to be displayed for this Place result.
     */
    html_attributions: PropTypes.arrayOf(PropTypes.string),
    /**
     * URL to an image resource that can be used to represent this
     * Place's category.
     */
    icon: PropTypes.string,
    /**
     * The Place's phone number in international format.
     * International format includes the country code, and
     * is prefixed with the plus (+) sign.
     */
    international_phone_number: PropTypes.string,
    /**
     * The Place's name. Note: In the case of user entered Places,
     * this is the raw text, as typed by the user. Please exercise
     * caution when using this data, as malicious users may try to
     * use it as a vector for code injection attacks
     * (See http://en.wikipedia.org/wiki/Code_injection).
     */
    name: PropTypes.string,
    /**
     * A flag indicating whether the Place is permanently closed.
     * If the place is not permanently closed, the flag is not present
     * in search or details responses.
     */
    permanently_closed: PropTypes.bool,
    /**
     * Photos of this Place. The collection will contain up to ten
     * photos.
     */
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The height of the photo in pixels.
             */
            height: PropTypes.number,
            /**
             * The width of the photo in pixels.
             */
            width: PropTypes.number,
            /**
             * Contains any required attributions. This field will always
             * be present, but may be empty.
             */
            html_attributions: PropTypes.arrayOf(PropTypes.string),
            /**
             * A string used to identify the photo when you perform a Photo request.
             */
            photo_reference: PropTypes.string,
        }),
    ),
    /**
     * A unique identifier for a place.
     * */
    place_id: PropTypes.string,
    /**
     * The price level of the Place, on a scale of 0 to 4. Price levels
     * are interpreted as follows:
     * 0 - Free
     * 1 - Inexpensive
     * 2 - Moderate
     * 3 - Expensive
     * 4 - Very Expensive
     */
    price_level: PropTypes.number,
    /**
     * A rating, between 1.0 to 5.0, based on user reviews of this Place.
     */
    rating: PropTypes.number,
    /**
     * A list of reviews of this Place.
     */
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The aspects rated by the review. The ratings on a
             * scale of 0 to 3.
             */
            aspects: PropTypes.arrayOf(aspectsRating),
            /**
             * The name of the reviewer.
             */
            author_name: PropTypes.string,
            /**
             * A link to the reviewer's profile. This will be undefined
             * when the reviewer's profile is unavailable.
             */
            author_url: PropTypes.string,
            /**
             * An IETF language code indicating the language in which
             * this review is written. Note that this code includes
             * only the main language tag without any secondary tag
             * indicating country or region. For example, all the English
             * reviews are tagged as 'en' rather than 'en-AU' or 'en-UK'.
             */
            language: PropTypes.string,
            /**
             * The text of a review.
             */
            text: PropTypes.string,
        }),
    ),
    /**
     * An array of types for this Place
     * (e.g., ["political",  "locality"] or ["restaurant", "establishment"]).
     */
    types: PropTypes.arrayOf(PropTypes.string),
    /**
     * URL of the official Google page for this place. This will be the
     * establishment's Google+ page if the Google+ page exists, otherwise
     * it will be the Google-owned page that contains the best available
     * information about the place.
     */
    url: PropTypes.string,
    /**
     * A fragment of the Place's address for disambiguation
     * (usually street name and locality).
     */
    vicinity: PropTypes.string,
    /**
     * The authoritative website for this Place, such as a business' homepage.
     */
    website: PropTypes.string,
    /**
     * Place prediction info
     */
    predictionInfo: predictionShape,
});
