import React from 'react';
import PropTypes from 'prop-types';
import { StyledDefaulColor, StyledColorsContainer } from './styled';
import { colorToRgba, isValidColor } from '../../styles/helpers/color';

const Colors = React.memo(props => {
    const { colors, onChange } = props;

    const handleChange = color => {
        const rgbaColor = colorToRgba(color);
        if (isValidColor(rgbaColor)) {
            onChange(rgbaColor);
        }
    };
    const ListColors = () =>
        colors.map(color => (
            <StyledDefaulColor key={color} $color={color} onClick={() => handleChange(color)} />
        ));

    return (
        <StyledColorsContainer>
            <ListColors />
        </StyledColorsContainer>
    );
});

Colors.propTypes = {
    colors: PropTypes.array,
    onChange: PropTypes.func,
};

Colors.defaultProps = {
    colors: [],
    onChange: () => {},
};

export default Colors;
