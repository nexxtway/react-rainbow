import React, { useContext } from 'react';
import { StyledAlphaSlider } from './styled';
import { ColorPickerContext } from './context';

export default function Alpha() {
    const { r, g, b, a, tabIndex, onChange } = useContext(ColorPickerContext);

    const handleChange = event => {
        const alpha = parseInt(event.target.value, 10);
        const rgba = `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
        onChange(rgba);
    };

    const value = Math.round(a * 100);

    return (
        <StyledAlphaSlider
            value={value}
            min={0}
            max={100}
            onChange={handleChange}
            tabIndex={tabIndex}
        />
    );
}
