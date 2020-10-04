import React, { useContext } from 'react';
import { ColorPickerContext } from '../../context';
import { StyledContainer, StyledColors } from './styled';
import { colorToRgba, recomposeColor } from '../../../../styles/helpers/color';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import Color from './color';

const DefaultColors = React.forwardRef((_props, ref) => {
    const { colors, rgba, tabIndex: tabIndexProp, onChange } = useContext(ColorPickerContext);
    const rgbaColor = recomposeColor({ type: 'rgba', values: rgba });
    const name = useUniqueIdentifier('color-picker-default');

    const listColors = colors.map((color, index) => {
        const tabIndex = index === 0 ? tabIndexProp : -1;
        const isSelected = colorToRgba(color) === rgbaColor;
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

    return (
        <StyledContainer>
            <StyledColors>{listColors}</StyledColors>
        </StyledContainer>
    );
});

export default DefaultColors;
