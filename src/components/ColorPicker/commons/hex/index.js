import React, { useState, useEffect, useContext } from 'react';
import { StyledHexColorIcon, StyledHexInput } from './styled';
import {
    hexToRgba,
    rgbToHsv,
    isValidColor,
    decomposeColor,
} from '../../../../styles/helpers/color';
import { ColorPickerContext } from '../../context';

export default function Hex() {
    const { hex, tabIndex, onChange } = useContext(ColorPickerContext);
    const [color, setColor] = useState(hex.substr(1));
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isFocused) {
            setColor(hex.substr(1));
        }
    }, [hex, isFocused]);

    const handleChange = event => {
        const newHex = `#${event.target.value}`;
        setColor(event.target.value);
        const rgba = hexToRgba(newHex);
        if (isValidColor(rgba)) {
            onChange({
                hex: newHex,
                rgba: decomposeColor(rgba).values,
                hsv: decomposeColor(rgbToHsv(rgba)).values,
            });
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        setColor(hex.substr(1));
    };

    return (
        <StyledHexInput
            value={color}
            bottomHelpText="HEX"
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            icon={<StyledHexColorIcon>#</StyledHexColorIcon>}
            tabIndex={tabIndex}
        />
    );
}
