import React, { useContext } from 'react';
import StyledAlphaSlider from './styled';
import { ColorPickerContext } from '../../context';

export default function Alpha() {
    const { hex, rgba, hsv, tabIndex, onChange } = useContext(ColorPickerContext);

    const handleChange = event => {
        const value = parseInt(event.target.value, 10);
        // eslint-disable-next-line no-restricted-globals
        rgba[3] = isNaN(value) ? 1 : Math.max(0, Math.min(value, 100)) / 100;

        onChange({
            hex,
            rgba,
            hsv,
        });
    };

    const alpha = Math.round(rgba[3] * 100);

    return (
        <StyledAlphaSlider
            value={alpha}
            min={0}
            max={100}
            onChange={handleChange}
            tabIndex={tabIndex}
        />
    );
}
