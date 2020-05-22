import React, { useRef, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { useFilterCountries, useKeyboardNavigation, useScrollControls } from './hooks';
import {
    StyledScrollable,
    StyledUl,
    StyledDropdown,
    StyledSearchContainer,
    StyledSearch,
    StyledScrollControls,
    StyledMenuArrowButton,
} from './styled';
import CountriesList from './countriesList';
import RenderIf from '../../RenderIf';
import StyledSearchIcon from '../../Lookup/options/styled/searchIcon';
import StyledOptionsContainer from '../../Lookup/options/styled//optionsContainer';
import StyledEmptyMessage from '../../Lookup/options/styled/emptyMessage';

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

    const {
        showScrollUp,
        showScrollDown,
        handleScrollUpMouseEnter,
        handleScrollDownouseEnter,
        stopScroll,
    } = useScrollControls(scrollableRef);

    const listHeight = countriesFiltered.length * 45;

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
            <StyledScrollControls>
                <RenderIf isTrue={showScrollUp}>
                    <StyledMenuArrowButton
                        arrow="up"
                        onMouseEnter={handleScrollUpMouseEnter}
                        onMouseLeave={stopScroll}
                    />
                </RenderIf>
                <StyledScrollable ref={scrollableRef}>
                    <RenderIf isTrue={countriesFiltered.length > 0}>
                        <StyledUl role="listbox" listHeight={listHeight}>
                            <CountriesList
                                countries={countriesFiltered}
                                country={country}
                                itemsRef={itemsRef}
                                handleCountryChange={handleCountryChange}
                                handleActiveChange={handleActiveChange}
                            />
                        </StyledUl>
                    </RenderIf>
                    <RenderIf isTrue={countriesFiltered.length === 0}>
                        <StyledOptionsContainer as="div" data-id="phone-country-empty-container">
                            <StyledSearchIcon />
                            <StyledEmptyMessage>
                                Our robots did not find any match for
                                <span>{` "${query}"`}</span>
                            </StyledEmptyMessage>
                        </StyledOptionsContainer>
                    </RenderIf>
                </StyledScrollable>
            </StyledScrollControls>
            <RenderIf isTrue={showScrollDown}>
                <StyledMenuArrowButton
                    arrow="down"
                    onMouseEnter={handleScrollDownouseEnter}
                    onMouseLeave={stopScroll}
                />
            </RenderIf>
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
