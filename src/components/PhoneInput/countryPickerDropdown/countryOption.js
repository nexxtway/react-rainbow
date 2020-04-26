/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import FlagIcon from '../flagIcon';

const CountryOption = props => {
    const { onSelect, ...rest } = props;
    const { name, isoCode, countryCode } = rest;
    return (
        <li onMouseDown={() => onSelect(rest)}>
            <FlagIcon isoCode={isoCode} />
            <span>{name}</span>
            <span>{countryCode}</span>
        </li>
    );
};

CountryOption.propTypes = {
    onRequestClose: PropTypes.func,
    onSelect: PropTypes.func,
};

CountryOption.defaultProps = {
    onRequestClose: () => {},
    onSelect: () => {},
};

export default CountryOption;
