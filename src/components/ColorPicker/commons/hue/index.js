import React, { useContext } from 'react';
import StyledHueSlider from './styled';
import {
    hsvToRgb,
    rgbToRgba,
    recomposeColor,
    rgbaToHex,
    decomposeColor,
} from '../../../../styles/helpers/color';
import { ColorPickerContext } from '../../context';

export default function Hue() {
    const { hsv, rgba, tabIndex, onChange } = useContext(ColorPickerContext);

    const handleChange = event => {
        const value = parseInt(event.target.value, 10);
        hsv[0] = isNaN(value) ? 0 : Math.max(0, Math.min(value, 360));
        const rgbColor = hsvToRgb(recomposeColor({ type: 'hsv', values: hsv }));
        const rgbaColor = rgbToRgba(rgbColor, rgba[3]);

        onChange({
            hex: `#${rgbaToHex(rgbaColor)}`,
            rgba: decomposeColor(rgbaColor).values,
            hsv,
        });
    };

    return (
        <StyledHueSlider
            value={hsv[0]}
            min={0}
            max={360}
            onChange={handleChange}
            tabIndex={tabIndex}
        />
    );
}
