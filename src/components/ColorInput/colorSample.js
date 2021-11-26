import React from 'react';
import PropTypes from 'prop-types';
import { hexToRgba } from '../../styles/helpers/color';
import { StyledColorSample } from './styled';

const ColorSample = ({ value }) => {
    const backgroundColor = value ? hexToRgba(value.hex, value.alpha) : undefined;

    return <StyledColorSample backgroundColor={backgroundColor} />;
};

ColorSample.propTypes = {
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
    }),
};

ColorSample.defaultProps = {
    value: undefined,
};

export default ColorSample;
