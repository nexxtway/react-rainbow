import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import Lookup from '../Lookup';
import LocationIcon from './icons/locationIcon';
import { uniqueId } from '../../libs/utils';
import poweredByGoogleColored from '../../../assets/images/google/powered_by_google_on_white.png';
import './styles.css';

class PlacesLookupComponent extends Component {
    constructor(props) {
        super(props);
        this.mapId = uniqueId('gaddrlookup-map');
        this.lookupId = uniqueId('gaddrlookup-input');

        this.initComponent = this.initComponent.bind(this);
        // this.formatSearchResult = this.formatSearchResult.bind(this);
        this.searchGoogleMaps = this.searchGoogleMaps.bind(this);
        this.handleLookupSearch = this.handleLookupSearch.bind(this);

        this.state = {
            initialized: false,
            isSearching: false,
            options: [],
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

    // formatSearchResult(result) {
    //     return {
    //         mainText: result.main_text,
    //         secondaryText: result.secondary_text,
    //     };
    // }

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

    handleLookupSearch(value) {
        const { initialized } = this.state;
        if (!initialized) return;

        this.searchGoogleMaps(value).then(
            results => {
                this.setState({
                    options: results.map((p, idx) => ({
                        label: p.label,
                        description: {
                            id: p.id,
                            description: p.description,
                            placeId: p.place_id,
                            active: true,
                            index: idx,
                            matchedSubstrings: p.matched_substrings,
                            terms: p.terms,
                            types: p.types,
                        },
                        icon: '',
                    })),
                });
            },
            error => {
                throw new Error(error);
            },
        );
    }

    render() {
        const {
            apiKey,
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
            onChange,
            ...rest
        } = this.props;
        const { isSearching, options } = this.state;
        return (
            <div id={id} style={style} className={this.getContainerClassName()}>
                <Lookup
                    id={this.lookupId}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                    isLoading={isSearching}
                    hideLabel={hideLabel}
                    required={required}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    onChange={onChange}
                    onSearch={this.handleLookupSearch}
                    error={error}
                    icon={<LocationIcon />}
                    {...rest}
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
    apiKey: PropTypes.string.isRequired,
    searchOptions: {},
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
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.node,
        }),
    ),
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
    apiKey: undefined,
    searchOptions: {},
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    label: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
    options: undefined,
};

export default withReduxForm(PlacesLookupComponent);
