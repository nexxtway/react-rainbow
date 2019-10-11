import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import { uniqueId } from '../../libs/utils';
import getSuggestions from './helpers/getSuggestions';
import getSearchForOption from './helpers/getSearchForOption';
import getFormattedValue from './helpers/getFormattedValue';
import SelectedLocationIcon from './icons/selectedLocationIcon';
import RenderIf from '../RenderIf';
import getSearchParams from './helpers/getSearchParams';
import * as CustomPropTypes from './proptypes';
import StyledPoweredByGoogleContainer from './styled/poweredByGoogleContainer';
import StyledPoweredByGoogleLogo from './styled/poweredByGoogleLogo';

class PlacesLookupComponent extends Component {
    constructor(props) {
        super(props);
        this.lookupId = uniqueId('gaddrlookup-input');
        this.initialized = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.placesServiceRef = React.createRef();

        this.state = {
            isSearching: false,
            // TODO: remove
            places: [],
            suggestions: [],
        };
    }

    componentDidUpdate({ isScriptLoaded: prevIsScriptLoaded }) {
        // TODO: change this please, keep isInitialized as an state and don't
        // render anything until the
        // component is initialized
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (!prevIsScriptLoaded && isScriptLoaded && isScriptLoadSucceed) {
            this.initComponent();
        }
    }

    getPlaceInfo(placeId) {
        this.setState({ isSearching: true });

        return new Promise((resolve, reject) => {
            this.placesService.getDetails(
                {
                    placeId,
                },
                (details, status) => {
                    this.setState({ isSearching: false });
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        return resolve(details);
                    }
                    return reject(status);
                },
            );
        });
    }

    initComponent() {
        this.autocompleteService = new window.google.maps.places.AutocompleteService();
        this.placesService = new window.google.maps.places.PlacesService(
            this.placesServiceRef.current,
        );
        this.initialized = true;
    }

    handleChange(option) {
        const { onChange } = this.props;

        if (!option) {
            return onChange(null);
        }

        if (!option.id) {
            return onChange(option.data);
        }

        const { places } = this.state;
        const placePrediction = places.find(place => place.place_id === option.id);

        return this.getPlaceInfo(option.id)
            .then(result => {
                const resultValue = Object.assign(result, {
                    predictionInfo: placePrediction,
                });
                return onChange(resultValue);
            })
            .catch(() => {
                const resultValue = placePrediction;
                return onChange(resultValue);
            });
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
            className,
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
            // onFocus,
            onBlur,
        } = this.props;
        const { isSearching, suggestions } = this.state;
        const options = suggestions.length > 0 ? suggestions : null;
        return (
            <div id={id} style={style} className={className}>
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
                    // TODO: fix focus problem when used with redux form
                    // onFocus={onFocus}
                    onBlur={onBlur}
                    error={error}
                    icon={<LocationIcon />}
                    preferredSelectedOption={1}
                />
                <RenderIf isTrue={!error}>
                    <StyledPoweredByGoogleContainer>
                        <StyledPoweredByGoogleLogo />
                    </StyledPoweredByGoogleContainer>
                </RenderIf>
                <div ref={this.placesServiceRef} />
            </div>
        );
    }
}

PlacesLookupComponent.propTypes = {
    isScriptLoaded: PropTypes.bool.isRequired,
    isScriptLoadSucceed: PropTypes.bool.isRequired,
    searchOptions: CustomPropTypes.searchOptionsShape,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hideLabel: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.oneOfType([
        CustomPropTypes.predictionShape,
        CustomPropTypes.placeDetailsShape,
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
    // onFocus: PropTypes.func,
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
    // onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
};

export default withReduxForm(PlacesLookupComponent);

export { PlacesLookupComponent as Component };
