import React from 'react';
import PropTypes from 'prop-types';
import { StyledHueSlider } from './styled';
import { hsvToRgb, rgbToRgba } from '../../styles/helpers/color';

export default function Hue(props) {
    const { hsvColor, hue, setHue, alpha, tabIndex, onChange } = props;

    const handleChange = event => {
        const value = parseInt(event.target.value, 10);
        setHue(value);
        hsvColor.values[0] = value;
        const rgbColor = hsvToRgb(hsvColor);
        const rgbaColor = rgbToRgba(rgbColor, alpha);
        onChange(rgbaColor);
    };

    return (
        <StyledHueSlider
            value={hue}
            min={0}
            max={359}
            onChange={handleChange}
            tabIndex={tabIndex}
        />
    );
}

Hue.propTypes = {
    hsvColor: PropTypes.object,
    alpha: PropTypes.number,
    hue: PropTypes.number,
    setHue: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
};

Hue.defaultProps = {
    hsvColor: undefined,
    alpha: undefined,
    hue: undefined,
    setHue: () => {},
    tabIndex: undefined,
    onChange: () => {},
};
