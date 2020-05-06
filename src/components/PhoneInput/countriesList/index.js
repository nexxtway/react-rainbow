import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../context';
import StyledDropdown from '../styled/dropdown';
import StyledUl from '../../Picklist/styled/ul';
import Icon from '../../PicklistOption/icon';
import StyledItem from '../../PicklistOption/styled/item';
import StyledIconContainer from '../../PicklistOption/styled/iconContainer';
import StyledCheckmarkIcon from '../../PicklistOption/styled/checkmarkIcon';
import StyledCountryCode from '../styled/countryCode';
import RenderIf from '../../RenderIf';
import {
    useFilterCountries,
    useCountriesList,
    useActiveIndex,
    useIsFilteredCountry,
    useKeyPressed,
} from './hooks';

const CountriesList = props => {
    const {
        countries,
        country,
        onCountryChange,
        isOpen,
        inputRef,
        triggerRef,
        toggleIsOpen,
        setIsFocus,
    } = props;
    const { countryCode, isoCode, country: name, flagIcon } = country;
    const ulRef = useRef();
    const searchRef = useRef();
    const [query, setQuery] = useState('');
    const countriesFiltered = useFilterCountries(query, countries);
    const countriesList = useCountriesList(countriesFiltered);
    const isFilteredCountry = useIsFilteredCountry(country, countriesFiltered);
    const [activeIndex, setActiveIndex] = useActiveIndex(isOpen, isFilteredCountry);

    function handleCountryChange(newCountry) {
        setQuery('');
        onCountryChange(newCountry);
    }

    const handleKeyPressed = useKeyPressed(
        country,
        countriesFiltered,
        inputRef,
        triggerRef,
        toggleIsOpen,
        activeIndex,
        setActiveIndex,
        isFilteredCountry,
        handleCountryChange,
    );

    useEffect(() => {
        if (isOpen) {
            searchRef.current.focus();
        }
    }, [isOpen]);

    const context = {
        selected: isoCode,
        onCountryChange: handleCountryChange,
        activeIndex,
        setActiveIndex,
    };
    const formattedCountryCode = `(${countryCode})`;

    return (
        <StyledDropdown isOpen={isOpen} onKeyDown={handleKeyPressed}>
            <Provider value={context}>
                <input
                    ref={searchRef}
                    type="search"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    tabIndex={-1}
                />
                <StyledUl ref={ulRef}>
                    <RenderIf isTrue={isFilteredCountry}>
                        <li key={isoCode} data-selected role="presentation">
                            <StyledItem isActive>
                                <StyledIconContainer>
                                    <Icon icon={flagIcon} isVisible position="left" />
                                    {name}
                                </StyledIconContainer>
                                <div>
                                    <StyledCountryCode>{formattedCountryCode}</StyledCountryCode>
                                    <StyledCheckmarkIcon />
                                </div>
                            </StyledItem>
                        </li>
                    </RenderIf>
                    {countriesList}
                </StyledUl>
            </Provider>
        </StyledDropdown>
    );
};

CountriesList.propTypes = {
    countries: PropTypes.array,
    country: PropTypes.object.isRequired,
    onCountryChange: PropTypes.func,
    isOpen: PropTypes.bool,
    inputRef: PropTypes.object.isRequired,
    triggerRef: PropTypes.object.isRequired,
    toggleIsOpen: PropTypes.func,
    setIsFocus: PropTypes.func,
};

CountriesList.defaultProps = {
    countries: [],
    country: undefined,
    onCountryChange: () => {},
    isOpen: false,
    inputRef: undefined,
    triggerRef: undefined,
    toggleIsOpen: () => {},
    setIsFocus: () => {},
};

export default CountriesList;
