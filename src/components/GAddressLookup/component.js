import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import LocationItemIcon from './icons/locationItemIcon';
// import SelectedLocationIcon from './icons/selectedLocationIcon';
import SearchValueIcon from './icons/searchValueIcon';
import { uniqueId } from '../../libs/utils';
import poweredByGoogleColored from '../../../assets/images/google/powered_by_google_on_white.png';
import './styles.css';

function formatSuggestionItem(suggestion) {
    let formattedLabel;

    suggestion.structured_formatting.main_text_matched_substrings.forEach(match => {
        const matchedTerm = suggestion.structured_formatting.main_text.slice(
            match.offset,
            match.length,
        );
        formattedLabel = suggestion.structured_formatting.main_text.replace(
            matchedTerm,
            `{b}${matchedTerm}{/b}`,
        );

        formattedLabel = formattedLabel.replace(/{/g, '<').replace(/}/g, '>');

        formattedLabel = React.createElement('span', {
            dangerouslySetInnerHTML: { __html: formattedLabel },
        });
    });

    return {
        label: formattedLabel,
        description: suggestion.structured_formatting.secondary_text,
        icon: <LocationItemIcon />,
    };
}

class PlacesLookupComponent extends Component {
    constructor(props) {
        super(props);
        this.lookupId = uniqueId('gaddrlookup-input');

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            initialized: false,
            isSearching: false,
            searchValue: '',
            places: [],
            suggestions: [],
            userValue: props.value,
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
        this.setState({ initialized: true });
    }

    handleChange(option) {
        const { places, suggestions } = this.state;
        const value = places[suggestions.indexOf(option)];
        this.setState({
            value,
            selectedPlace: option,
        });

        const { onChange } = this.props;
        onChange(value);
    }

    handleSearch(value) {
        if (value && this.state.searchValue !== value) {
            this.setState({ searchValue: value });
            this.searchGoogleMaps(value).then(
                results => this.processSearchResults(results),
                // error => this.handleError(error),
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
            ].concat(results.map(place => formatSuggestionItem(place))),
        });
    }

    clear() {
        this.setState({
            searchValue: '',
            places: [],
            suggestions: [],
        });
    }

    // handleError(error) {
    // }

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
                    <img src={poweredByGoogleColored} alt="powered by Google" />
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
