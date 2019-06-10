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
import RenderIf from '../RenderIf';
import getSearchParams from './helpers/getSearchParams';
import * as CustomPropTypes from './proptypes';
import './styles.css';

class PlacesLookupComponent extends Component {
    constructor(props) {
        super(props);
        this.lookupId = uniqueId('gaddrlookup-input');
        this.initialized = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
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

        if (value) {
            this.searchGooglePlaces(value)
                .then(results => this.processSearchResults(results, value))
                .catch(() => this.handleError(value));
        } else if (!value) {
            this.clear();
        }
    }

    searchGooglePlaces(needle) {
        const { searchOptions } = this.props;
        const searchParams = getSearchParams(searchOptions);

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
            readOnly,
            placeholder,
            disabled,
            tabIndex,
            required,
            id,
            name,
            value,
            hideLabel,
            onClick,
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
                    readOnly={readOnly}
                    required={required}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    value={getFormattedValue(value, false, <SelectedLocationIcon />)}
                    onChange={this.handleChange}
                    onSearch={this.handleSearch}
                    onClick={onClick}
                    onBlur={onBlur}
                    error={error}
                    icon={<LocationIcon />}
                />
                <RenderIf isTrue={!error}>
                    <div className="rainbow-google-address-lookup_powered-by-google-container">
                        <PoweredByGoogleLogo className="rainbow-google-address-lookup_powered-by-google-logo" />
                    </div>
                </RenderIf>
            </div>
        );
    }
}

PlacesLookupComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    searchOptions: CustomPropTypes.searchOptionsShape,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    hideLabel: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.oneOfType([CustomPropTypes.valueShape, PropTypes.string]),
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
    onBlur: PropTypes.func,
};

PlacesLookupComponent.defaultProps = {
    searchOptions: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    readOnly: false,
    error: null,
    disabled: false,
    onChange: () => {},
    onClick: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
};

export default withReduxForm(PlacesLookupComponent);
