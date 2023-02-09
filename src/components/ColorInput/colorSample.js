import React from 'react';
import PropTypes from 'prop-types';
import { hexToRgba } from '../../styles/helpers/color';
import { StyledColorSample } from './styled';

const ColorSample = ({ value, size }) => {
    const backgroundColor = value ? hexToRgba(value.hex, value.alpha) : undefined;

    return <StyledColorSample backgroundColor={backgroundColor} size={size} />;
};

ColorSample.propTypes = {
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
    }),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ColorSample.defaultProps = {
    value: undefined,
    size: 'medium',
};

export default ColorSample;
