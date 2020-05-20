import React, { useRef, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { useFilterCountries, useKeyboardNavigation } from './hooks';
import {
    StyledScrollable,
    StyledUl,
    StyledDropdown,
    StyledSearchContainer,
    StyledSearch,
} from './styled';
import CountriesList from './countriesList';

const CountriesDropdown = memo(props => {
    const {
        country,
        countries,
        isOpen,
        searchRef,
        setFocusIndex,
        onCountryChange,
        handleFocus,
        handleBlur,
    } = props;

    const scrollableRef = useRef();
    const [query, countriesFiltered, setQuery] = useFilterCountries(countries, country);

    const handleCountryChange = useCallback(
        newCountry => {
            setQuery('');
            scrollableRef.current.scrollTo(0, 0);
            onCountryChange(newCountry);
        },
        [onCountryChange, setQuery],
    );

    const onEnter = useCallback((event, index) => handleCountryChange(countriesFiltered[index]), [
        handleCountryChange,
        countriesFiltered,
    ]);

    const itemsRef = useRef([]);
    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, countriesFiltered.length);
    }, [countriesFiltered.length]);

    const handleActiveChange = useKeyboardNavigation(
        countriesFiltered,
        searchRef,
        scrollableRef,
        itemsRef,
        onEnter,
        setFocusIndex,
    );

    return (
        <StyledDropdown isOpen={isOpen}>
            <StyledSearchContainer>
                <StyledSearch
                    ref={searchRef}
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onFocus={event => handleFocus(event, 1)}
                    onBlur={handleBlur}
                />
            </StyledSearchContainer>
            <StyledScrollable ref={scrollableRef}>
                <StyledUl role="listbox">
                    <CountriesList
                        countries={countriesFiltered}
                        country={country}
                        itemsRef={itemsRef}
                        handleCountryChange={handleCountryChange}
                        handleActiveChange={handleActiveChange}
                    />
                </StyledUl>
            </StyledScrollable>
        </StyledDropdown>
    );
});

CountriesDropdown.propTypes = {
    countries: PropTypes.array,
    country: PropTypes.object.isRequired,
    searchRef: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    setFocusIndex: PropTypes.func,
    onCountryChange: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
};

CountriesDropdown.defaultProps = {
    countries: [],
    country: undefined,
    isOpen: false,
    searchRef: undefined,
    setFocusIndex: () => {},
    onCountryChange: () => {},
    handleFocus: () => {},
    handleBlur: () => {},
};

export default CountriesDropdown;
