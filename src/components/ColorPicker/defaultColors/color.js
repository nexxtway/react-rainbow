import React from 'react';
import PropTypes from 'prop-types';
import { StyledColor, StyledInput, StyledLabel } from './styled';
import AssistiveText from '../../AssistiveText';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { colorToRgba } from '../../../styles/helpers/color';

const Color = React.forwardRef((props, ref) => {
    const { color, tabIndex, isChecked, onChange } = props;
    const colorId = useUniqueIdentifier('color-picker-default');

    const handleChange = () => {
        const newColor = colorToRgba(color);
        if (newColor !== '') {
            onChange(newColor);
        }
    };

    const style = { backgroundColor: color };
    return (
        <StyledColor>
            <StyledInput
                id={colorId}
                as="input"
                name={name}
                checked={isChecked}
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
    color: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Color.defaultProps = {
    color: undefined,
    isChecked: false,
    onChange: () => {},
    tapIndex: undefined,
};

export default Color;
