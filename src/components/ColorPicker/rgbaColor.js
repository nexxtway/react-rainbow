import React, { useContext } from 'react';
import { ColorPickerContext } from './context';
import { StyledFlexContainer, StyledNumberInput } from './styled';
import { recomposeColor, decomposeColor } from '../../styles/helpers/color';

export default function RgbaColor() {
    const { r, g, b, a, tabIndex, onChange } = useContext(ColorPickerContext);

    const handleAlphaChange = event => {
        const value = parseInt(event.target.value, 10);
        const newApha = isNaN(value) ? 0 : Math.max(0, Math.min(value, 100)) / 100;
        const rgba = `rgba(${r}, ${g}, ${b}, ${newApha})`;

        onChange(rgba);
    };

    const handleChange = (index, event) => {
        const value = parseInt(event.target.value, 10);
        const rgba = decomposeColor(`rgba(${r}, ${g}, ${b}, ${a})`);

        if (isNaN(value)) {
            rgba.values[index] = 0;
        } else {
            rgba.values[index] = Math.max(0, Math.min(value, 255));
        }

        onChange(recomposeColor(rgba));
    };

    const alpha = Math.round(a * 100);

    return (
        <StyledFlexContainer>
            <StyledNumberInput
                type="number"
                value={r}
                bottomHelpText="R"
                onChange={event => handleChange(0, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={g}
                bottomHelpText="G"
                onChange={event => handleChange(1, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={b}
                bottomHelpText="B"
                onChange={event => handleChange(2, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={alpha}
                bottomHelpText="ALPHA"
                onChange={handleAlphaChange}
                tabIndex={tabIndex}
            />
        </StyledFlexContainer>
    );
}
