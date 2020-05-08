import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Provider } from '../context';
import Icon from '../../PicklistOption/icon';
import StyledIconContainer from '../../PicklistOption/styled/iconContainer';
import StyledCheckmarkIcon from '../../PicklistOption/styled/checkmarkIcon';
import RenderIf from '../../RenderIf';
import {
    useFilterCountries,
    useCountriesList,
    useActiveIndex,
    useIsFilteredCountry,
    useKeyPressed,
    useInfinityScroll,
} from './hooks';
import {
    StyledScrollable,
    StyledUl,
    StyledDropdown,
    StyledSearchContainer,
    StyledSearch,
    StyledItem,
    StyledCountryCodeItem,
} from './styled';

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
    const scrollableRef = useRef();
    const searchRef = useRef();
    const [query, setQuery] = useState('');
    const countriesFiltered = useFilterCountries(query, countries);
    const countriesList = useCountriesList(countriesFiltered);
    const isFilteredCountry = useIsFilteredCountry(country, countriesFiltered);
    const [activeIndex, setActiveIndex] = useActiveIndex(
        isOpen,
        isFilteredCountry,
        countriesFiltered,
    );

    const handleCountryChange = useCallback(
        newCountry => {
            setQuery('');
            toggleIsOpen(false);
            scrollableRef.current.scrollTo(0, 0);
            inputRef.current.focus();
            onCountryChange(newCountry);
        },
        [inputRef, onCountryChange, toggleIsOpen],
    );

    const handleKeyPressed = useKeyPressed(
        country,
        countriesFiltered,
        scrollableRef,
        inputRef,
        triggerRef,
        toggleIsOpen,
        activeIndex,
        setActiveIndex,
        isFilteredCountry,
        handleCountryChange,
    );

    const [infinityChildren, handleScroll] = useInfinityScroll(countriesList, 10, 45);

    useEffect(() => {
        if (isOpen) {
            searchRef.current.focus();
        }
    }, [isOpen]);
    useEffect(() => {
        scrollableRef.current.scrollTo(0, 0);
    }, [countriesFiltered]);

    const context = {
        selected: isoCode,
        onCountryChange: handleCountryChange,
        activeIndex,
        setActiveIndex,
    };
    const formattedCountryCode = `(${countryCode})`;
    const height = countriesFiltered.length * 45;

    return (
        <StyledDropdown isOpen={isOpen} onKeyDown={handleKeyPressed}>
            <Provider value={context}>
                <StyledSearchContainer>
                    <StyledSearch
                        ref={searchRef}
                        type="search"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        tabIndex={-1}
                    />
                </StyledSearchContainer>
                <StyledScrollable ref={scrollableRef} onScroll={handleScroll}>
                    <StyledUl height={height}>
                        <RenderIf isTrue={isFilteredCountry}>
                            <StyledItem key={isoCode} data-selected isSelected>
                                <StyledIconContainer>
                                    <Icon icon={flagIcon} isVisible position="left" />
                                    {name}
                                </StyledIconContainer>
                                <div>
                                    <StyledCountryCodeItem>
                                        {formattedCountryCode}
                                    </StyledCountryCodeItem>
                                    <StyledCheckmarkIcon />
                                </div>
                            </StyledItem>
                        </RenderIf>
                        {infinityChildren}
                    </StyledUl>
                </StyledScrollable>
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
