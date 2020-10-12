import React from 'react';
import PropTypes from 'prop-types';
import { StyledColor, StyledInput, StyledLabel } from './styled';
import AssistiveText from '../../../AssistiveText';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import {
    colorToRgba,
    isValidColor,
    rgbToHsv,
    rgbaToHex,
    decomposeColor,
} from '../../../../styles/helpers/color';

const Color = React.forwardRef((props, ref) => {
    const { color, name, tabIndex, isChecked, onChange } = props;
    const rgba = colorToRgba(color);
    const colorId = useUniqueIdentifier('color-picker-default');
    if (!isValidColor(rgba)) {
        return null;
    }

    const handleChange = () => {
        onChange({
            hex: `#${rgbaToHex(rgba)}`,
            rgba: decomposeColor(rgba).values,
            hsv: decomposeColor(rgbToHsv(rgba)).values,
        });
    };

    const style = { backgroundColor: color };
    return (
        <StyledColor>
            <StyledInput
                id={colorId}
                as="input"
                name={name}
                checked={isChecked}
                value={color}
                type="radio"
                onChange={handleChange}
                ref={ref}
                tabIndex={tabIndex}
            />
            <StyledLabel htmlFor={colorId} style={style}>
                <AssistiveText>{color}</AssistiveText>
            </StyledLabel>
        </StyledColor>
    );
});

Color.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Color.defaultProps = {
    color: undefined,
    name: '',
    isChecked: false,
    onChange: () => {},
};

export default Color;
