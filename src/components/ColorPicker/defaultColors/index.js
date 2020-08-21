import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledColors } from './styled';
import { StyledLabel } from '../styled';
import { colorToRgba, recomposeColor } from '../../../styles/helpers/color';
import Color from './color';

const DefaultColors = React.forwardRef((props, ref) => {
    const { colors, rgbaColor: rgbaColorProps, title, tabIndex: tabIndexProp, onChange } = props;
    const rgbaColor = recomposeColor(rgbaColorProps);

    const listColors = colors.map((color, index) => {
        const tabIndex = index === 0 ? tabIndexProp : -1;
        const isSelected = colorToRgba(color) === rgbaColor;
        const isFirstInput = index === 0;
        const inputRef = isFirstInput ? ref : undefined;
        return (
            <Color
                key={color}
                color={color}
                isChecked={isSelected}
                onChange={onChange}
                ref={inputRef}
                tabIndex={tabIndex}
            />
        );
    });

    return (
        <StyledContainer>
            <StyledLabel>{title}</StyledLabel>
            <StyledColors>{listColors}</StyledColors>
        </StyledContainer>
    );
});

DefaultColors.propTypes = {
    colors: PropTypes.array.isRequired,
    rgbaColor: PropTypes.object.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
};

DefaultColors.defaultProps = {
    colors: [],
    rgbaColor: undefined,
    title: 'Default Colors',
    tabIndex: undefined,
    onChange: () => {},
};

export default DefaultColors;
