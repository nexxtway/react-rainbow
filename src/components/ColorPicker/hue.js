import React, { useContext } from 'react';
import { StyledHueSlider } from './styled';
import { hsvToRgb, rgbToRgba } from '../../styles/helpers/color';
import { ColorPickerContext } from './context';

export default function Hue() {
    const { h, s, v, a, setHue, tabIndex, onChange } = useContext(ColorPickerContext);

    const handleChange = event => {
        const value = parseInt(event.target.value, 10);
        setHue(value);
        const hsv = `hsv(${value}, ${s}, ${v})`;
        const rgbColor = hsvToRgb(hsv);
        const rgbaColor = rgbToRgba(rgbColor, a);
        onChange(rgbaColor);
    };

    return (
        <StyledHueSlider value={h} min={0} max={359} onChange={handleChange} tabIndex={tabIndex} />
    );
}
