import React, { useContext } from 'react';
import { ColorPickerContext } from './context';
import { StyledPreview } from './styled';

export default function Preview() {
    const { r, g, b, a } = useContext(ColorPickerContext);
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    const style = { backgroundColor: rgba };

    return <StyledPreview style={style} />;
}
