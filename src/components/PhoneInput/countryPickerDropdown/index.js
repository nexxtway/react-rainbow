import React from 'react';
import PropTypes from 'prop-types';
import StyledDropdown from './styled/dropdown';
import StyledUl from '../../Picklist/styled/ul';
import COUNTRIES from '../countries';
import CountryOption from './countryOption';
import { normalizeCountry } from '../helpers';

const CountryPickerDropdown = props => {
    const { isOpen, onSelect, locale } = props;
    function List() {
        return COUNTRIES.map(value => {
            const country = normalizeCountry(value);
            return (
                <CountryOption
                    key={country.isoCode}
                    locale={locale}
                    onSelect={onSelect}
                    {...country}
                />
            );
        });
    }

    return (
        <StyledDropdown isOpen={isOpen}>
            <StyledUl>
                <List />
            </StyledUl>
        </StyledDropdown>
    );
};

CountryPickerDropdown.propTypes = {
    isOpen: PropTypes.bool,
    onSelect: PropTypes.func,
    locale: PropTypes.string,
};

CountryPickerDropdown.defaultProps = {
    isOpen: false,
    onSelect: () => {},
    locale: undefined,
};

export default CountryPickerDropdown;
