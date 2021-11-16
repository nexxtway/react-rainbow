import React from 'react';
import PropTypes from 'prop-types';
import { hexToRgba } from '../../styles/helpers/color';
import { StyledColorSample } from './styled';

const ColorSample = ({ value }) => {
    const backgroundColor = hexToRgba(value.hex, value.alpha);

    return <StyledColorSample backgroundColor={backgroundColor} />;
};

ColorSample.propTypes = {
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
    }),
};

ColorSample.defaultProps = {
    value: { hex: '#000000', alpha: 1 },
};

export default ColorSample;
