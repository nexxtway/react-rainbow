/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const CountryOption = props => {
    const { onSelect, ...rest } = props;
    const { country, countryCode, flagIcon } = rest;
    return (
        <li onMouseDown={() => onSelect(rest)}>
            {flagIcon}
            <span>{country}</span>
            <span>{countryCode}</span>
        </li>
    );
};

CountryOption.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onSelect: PropTypes.func,
};

CountryOption.defaultProps = {
    isOpen: false,
    onRequestClose: () => {},
    onSelect: () => {},
};

export default CountryOption;
