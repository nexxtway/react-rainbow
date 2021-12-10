import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import {
    useFilterCountries,
    useKeyboardNavigation,
    useScrollControls,
    useItemsRef,
    useHandleCountryChange,
} from './hooks';
import {
    StyledScrollable,
    StyledUl,
    StyledDropdown,
    StyledSearchContainer,
    StyledSearch,
    StyledScrollControls,
} from './styled';
import { Arrow } from '../../InternalDropdown/styled';
import CountriesList from './countriesList';
import RenderIf from '../../RenderIf';
import StyledSearchIcon from '../../Lookup/options/styled/searchIcon';
import StyledOptionsContainer from '../../Lookup/options/styled/optionsContainer';
import StyledEmptyMessage from '../../Lookup/options/styled/emptyMessage';

const CountriesDropdown = memo(
    React.forwardRef((props, ref) => {
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
        const itemsRef = useItemsRef(countriesFiltered.length);
        const handleCountryChange = useHandleCountryChange(
            scrollableRef,
            onCountryChange,
            setQuery,
        );
        const handleActiveChange = useKeyboardNavigation(
            country,
            countriesFiltered,
            searchRef,
            scrollableRef,
            itemsRef,
            handleCountryChange,
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
            <StyledDropdown isOpen={isOpen} ref={ref}>
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
                        <Arrow
                            direction="up"
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
                            <StyledOptionsContainer
                                as="div"
                                data-id="phone-country-empty-container"
                            >
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
                    <Arrow
                        direction="down"
                        onMouseEnter={handleScrollDownouseEnter}
                        onMouseLeave={stopScroll}
                    />
                </RenderIf>
            </StyledDropdown>
        );
    }),
);

CountriesDropdown.propTypes = {
    countries: PropTypes.array,
    country: PropTypes.object,
    searchRef: PropTypes.object,
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
