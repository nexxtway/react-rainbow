import React, { useContext } from 'react';
import { ColorPickerContext } from '../context';
import { StyledPreview } from './styled';
import { recomposeColor } from '../../../styles/helpers/color';

export default function Preview() {
    const { rgba } = useContext(ColorPickerContext);
    const style = { backgroundColor: recomposeColor({ type: 'rgba', values: rgba }) };

    return <StyledPreview style={style} />;
}
