/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../PicklistOption/icon';
import StyledItem from '../../PicklistOption/styled/item';
import StyledIconContainer from '../../PicklistOption/styled/iconContainer';
import { PhoneIputContext } from '../context';
import StyledCountryCode from '../styled/countryCode';

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

    return (
        <li
            ref={itemRef}
            data-selected={isSelected}
            role="presentation"
            onMouseDown={() => onCountryChange(country)}
            onMouseEnter={() => setActiveIndex(index)}
        >
            <StyledItem isActive={isActive}>
                <StyledIconContainer>
                    <Icon icon={flagIcon} isVisible position="left" />
                    {name}
                </StyledIconContainer>
                <div>
                    <StyledCountryCode>{formattedCountryCode}</StyledCountryCode>
                </div>
            </StyledItem>
        </li>
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
