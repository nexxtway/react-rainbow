import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import PoweredByGoogleLogo from './icons/poweredByGoogle';
import { uniqueId } from '../../libs/utils';
import getSuggestions from './helpers/getSuggestions';
import getSearchForOption from './helpers/getSearchForOption';
import getFormattedValue from './helpers/getFormattedValue';
import SelectedLocationIcon from './icons/selectedLocationIcon';
import './styles.css';

class PlacesLookupComponent extends Component {
    constructor(props) {
        super(props);
        this.lookupId = uniqueId('gaddrlookup-input');
        this.initialized = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            initialized: false,
            isSearching: false,
            places: [],
            suggestions: [],
        };
    }

    componentDidUpdate({ isScriptLoaded: prevIsScriptLoaded }) {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (!prevIsScriptLoaded && isScriptLoaded && isScriptLoadSucceed) {
            this.initComponent();
        }
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-google-address-lookup_container', className);
    }

    initComponent() {
        this.autocompleteService = new window.google.maps.places.AutocompleteService();
        this.initialized = true;
    }

    handleChange(option) {
        const { onChange } = this.props;

        if (!option) {
            return onChange(null);
        }

        const { places } = this.state;
        let value = places.find(place => place.place_id === option.id);
        if (!value) {
            value = option.data;
        }

        return onChange(value);
    }

    handleSearch(value) {
        if (!this.initialized) return;

        if (value && this.state.searchValue !== value) {
            this.searchGooglePlaces(value)
                .then(results => this.processSearchResults(results, value))
                .catch(this.handleError(value));
        } else if (!value) {
            this.clear();
        }
    }

    searchGooglePlaces(needle) {
        const { searchOptions } = this.props;
        let searchParams = {};
        if (searchOptions) {
            const { bounds, country, location, ...otherSearchOptions } = searchOptions;

            if (bounds) {
                const {
                    sw: { latitude: swLatitude, longitude: swLongitude },
                    ne: { latitude: neLatitude, longitude: neLongitude },
                } = bounds;
                searchParams = Object.assign(searchParams, {
                    bounds: new window.google.maps.LatLngBounds(
                        new window.google.maps.LatLng(swLatitude, swLongitude),
                        new window.google.maps.LatLng(neLatitude, neLongitude),
                    ),
                });
            }

            if (location) {
                searchParams = Object.assign(searchParams, {
                    location: new window.google.maps.LatLng(location.latitude, location.longitude),
                });
            }

            if (country) {
                searchParams = Object.assign(searchParams, {
                    componentRestrictions: {
                        country,
                    },
                });
            }

            searchParams = Object.assign(searchParams, otherSearchOptions);
        }
        this.setState({ isSearching: true });

        return new Promise((resolve, reject) => {
            this.autocompleteService.getPlacePredictions(
                {
                    ...searchParams,
                    input: needle,
                },
                (predictions, status) => {
                    this.setState({ isSearching: false });
                    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                        return reject(status);
                    }
                    return resolve(predictions);
                },
            );
        });
    }

    processSearchResults(results, searchValue) {
        this.setState({
            places: results,
            suggestions: getSuggestions(results, searchValue),
        });
    }

    handleError(searchValue) {
        this.setState({
            places: [],
            suggestions: [getSearchForOption(searchValue)],
        });
    }

    clear() {
        this.setState({
            places: [],
            suggestions: [],
        });
    }

    render() {
        const {
            style,
            label,
            error,
            placeholder,
            disabled,
            tabIndex,
            required,
            id,
            name,
            value,
            hideLabel,
            onClick,
            onFocus,
            onBlur,
        } = this.props;
        const { isSearching, suggestions } = this.state;
        const options = suggestions.length > 0 ? suggestions : null;
        return (
            <div id={id} style={style} className={this.getContainerClassName()}>
                <Lookup
                    id={this.lookupId}
                    name={name}
                    label={label}
                    debounce
                    isLoading={isSearching}
                    placeholder={placeholder}
                    options={options}
                    hideLabel={hideLabel}
                    readOnly={false}
                    required={required}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    value={getFormattedValue(value, true, <SelectedLocationIcon />)}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    error={error}
                    icon={<LocationIcon />}
                />
                {!error && (
                    <div className="rainbow-google-address-poweredby_container">
                        <PoweredByGoogleLogo />
                    </div>
                )}
            </div>
        );
    }
}

PlacesLookupComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    searchOptions: PropTypes.shape({
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
        country: PropTypes.string,
        location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        }),
        radius: PropTypes.number,
        types: PropTypes.arrayOf(PropTypes.string),
    }),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    hideLabel: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.shape({
            description: PropTypes.string,
            id: PropTypes.string,
            matched_substrings: PropTypes.arrayOf(
                PropTypes.shape({
                    length: PropTypes.number,
                    offset: PropTypes.number,
                }),
            ),
            place_id: PropTypes.string,
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
            terms: PropTypes.arrayOf(
                PropTypes.shape({
                    offset: PropTypes.number,
                    value: PropTypes.string,
                }),
            ),
            types: PropTypes.arrayOf(PropTypes.string),
        }),
        PropTypes.string,
    ]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

PlacesLookupComponent.defaultProps = {
    searchOptions: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
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
};

export default withReduxForm(PlacesLookupComponent);
