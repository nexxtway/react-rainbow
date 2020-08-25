import React, { useContext } from 'react';
import { ColorPickerContext } from '../context';
import { StyledContainer, StyledColors } from './styled';
import { colorToRgba } from '../../../styles/helpers/color';
import { useUniqueIdentifier } from '../../../libs/hooks';
import Color from './color';
import RenderIf from '../../RenderIf';

const DefaultColors = React.forwardRef((_props, ref) => {
    const { colors, r, g, b, a, tabIndex: tabIndexProp, onChange } = useContext(ColorPickerContext);
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    const name = useUniqueIdentifier('color-picker-default');

    const listColors = colors.map((color, index) => {
        const tabIndex = index === 0 ? tabIndexProp : -1;
        const isSelected = colorToRgba(color) === rgba;
        const isFirstInput = index === 0;
        const inputRef = isFirstInput ? ref : undefined;
        return (
            <Color
                key={color}
                color={color}
                name={name}
                isChecked={isSelected}
                onChange={onChange}
                ref={inputRef}
                tabIndex={tabIndex}
            />
        );
    });

    const hasColors = colors.length > 0;

    return (
        <RenderIf isTrue={hasColors}>
            <StyledContainer>
                <StyledColors>{listColors}</StyledColors>
            </StyledContainer>
        </RenderIf>
    );
});

export default DefaultColors;
