import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import LocationItemIcon from './icons/locationItemIcon';
import SelectedLocationIcon from './icons/selectedLocationIcon';
import SearchValueIcon from './icons/searchValueIcon';
import PoweredByGoogleLogo from './icons/poweredByGoogle';
import { uniqueId } from '../../libs/utils';
import { formatSuggestionItem } from './functions';
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
            searchValue: props.value,
            places: [],
            suggestions: [],
            selectedPlace: null,
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
            onChange(option);
            return;
        }

        const { places, suggestions } = this.state;
        const value = places.length > 0 ? places[suggestions.indexOf(option)] : option;

        this.setState({
            value,
            selectedPlace: {
                label: option.label,
                description: option.description,
                icon: <SelectedLocationIcon />,
            },
        });

        onChange(value);
    }

    handleSearch(value) {
        if (!this.initialized) return;

        if (value && this.state.searchValue !== value) {
            this.setState({ searchValue: value });
            this.searchGoogleMaps(value).then(
                results => this.processSearchResults(results),
                () => this.handleError(),
            );
        } else if (!value) {
            this.clear();
        }
    }

    searchGoogleMaps(needle) {
        const { searchOptions } = this.props;
        this.setState({ isSearching: true });

        return new Promise((resolve, reject) => {
            this.autocompleteService.getPlacePredictions(
                {
                    ...searchOptions,
                    input: needle,
                },
                (predictions, status) => {
                    this.setState({ isSearching: false });

                    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
                        reject(status);
                    }

                    resolve(predictions);
                },
            );
        });
    }

    processSearchResults(results) {
        this.setState({
            places: results,
            suggestions: [
                {
                    label: (
                        <span>
                            Search for: <b>&lsquo;{this.state.searchValue}&rsquo;</b>
                        </span>
                    ),
                    icon: <SearchValueIcon />,
                },
            ].concat(results.map(place => formatSuggestionItem(place, true, <LocationItemIcon />))),
        });
    }

    handleError() {
        this.setState({
            places: [],
            suggestions: [
                {
                    label: (
                        <span>
                            Search for: <b>&lsquo;{this.state.searchValue}&rsquo;</b>
                        </span>
                    ),
                    icon: <SearchValueIcon />,
                },
            ],
        });
    }

    clear() {
        this.setState({
            searchValue: '',
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
            hideLabel,
        } = this.props;
        const { isSearching, suggestions } = this.state;
        return (
            <div id={id} style={style} className={this.getContainerClassName()}>
                <Lookup
                    id={this.lookupId}
                    name={name}
                    label={label}
                    debounce
                    isLoading={isSearching}
                    placeholder={placeholder}
                    options={suggestions.length > 0 ? suggestions : null}
                    hideLabel={hideLabel}
                    required={required}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    value={this.state.selectedPlace}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                    error={error}
                    icon={<LocationIcon />}
                />
                <div className="rainbow-google-address-poweredby_container">
                    <PoweredByGoogleLogo />
                </div>
            </div>
        );
    }
}

PlacesLookupComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    searchOptions: PropTypes.shape({}),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    hideLabel: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.node,
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
};

PlacesLookupComponent.defaultProps = {
    searchOptions: {},
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
};

export default withReduxForm(PlacesLookupComponent);
