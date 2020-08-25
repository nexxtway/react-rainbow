import React, { useState, useEffect, useContext } from 'react';
import Input from '../Input';
import { StyledHexColorIcon } from './styled';
import { hexToRgba, rgbaToHex } from '../../styles/helpers/color';
import { ColorPickerContext } from './context';

export default function HexColor() {
    const { r, g, b, a, tabIndex, onChange } = useContext(ColorPickerContext);
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    const [color, setColor] = useState(rgbaToHex(rgba).substr(1));
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isFocused) {
            const hexColor = rgbaToHex(rgba);
            setColor(hexColor.substr(1));
        }
    }, [isFocused, rgba]);

    useEffect(() => {
        const hex = `#${color}`;
        const newColor = hexToRgba(hex);
        if (newColor !== '') {
            onChange(newColor);
        }
    }, [color, onChange]);

    const handleBlur = () => {
        setIsFocused(false);
        const hexColor = rgbaToHex(rgba);
        setColor(hexColor.substr(1));
    };

    return (
        <Input
            value={color}
            bottomHelpText="HEX"
            onChange={event => setColor(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            icon={<StyledHexColorIcon>#</StyledHexColorIcon>}
            tabIndex={tabIndex}
        />
    );
}
