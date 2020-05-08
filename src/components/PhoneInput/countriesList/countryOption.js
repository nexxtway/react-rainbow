import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../PicklistOption/icon';
import StyledIconContainer from '../../PicklistOption/styled/iconContainer';
import { PhoneIputContext } from '../context';
import { StyledItem, StyledCountryCodeItem } from './styled';

const CountryOption = props => {
    const { index, country } = props;
    const { countryCode, isoCode, country: name, flagIcon } = country;
    const { selected, onCountryChange, activeIndex, setActiveIndex } = useContext(PhoneIputContext);
    const itemRef = useRef();
    const isSelected = selected === isoCode;
    const isActive = activeIndex === index;
    const formattedCountryCode = `(${countryCode})`;

    if (selected === isoCode) {
        return null;
    }

    function handleClick(event) {
        event.preventDefault();
        onCountryChange(country);
    }

    return (
        <StyledItem
            ref={itemRef}
            data-selected={isSelected}
            role="presentation"
            onMouseDown={handleClick}
            onMouseEnter={() => setActiveIndex(index)}
            isActive={isActive}
        >
            <StyledIconContainer>
                <Icon icon={flagIcon} isVisible position="left" />
                {name}
            </StyledIconContainer>
            <div>
                <StyledCountryCodeItem>{formattedCountryCode}</StyledCountryCodeItem>
            </div>
        </StyledItem>
    );
};

CountryOption.propTypes = {
    index: PropTypes.number.isRequired,
    country: PropTypes.object.isRequired,
};

CountryOption.defaultProps = {
    index: undefined,
    country: undefined,
};

export default CountryOption;
