import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { StyledHexColorIcon } from './styled';
import { hexToRgba } from '../../styles/helpers/color';

export default function HexColor(props) {
    const { hexColor, onChange } = props;
    const [color, setColor] = useState();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isFocused) {
            setColor(hexColor);
        }
    }, [hexColor, isFocused]);

    const handleChange = event => {
        const value = event.target.value;
        setColor(value);
        const hex = `#${value}`;
        const rgbaColor = hexToRgba(hex);
        if (rgbaColor !== '') {
            onChange(rgbaColor);
        }
    };

    const handleBlur = event => {
        setIsFocused(false);
        const value = event.target.value;
        const hex = `#${value}`;
        const rgbaColor = hexToRgba(hex);
        if (rgbaColor !== '') {
            onChange(rgbaColor);
        }
    };

    return (
        <Input
            value={color}
            bottomHelpText="HEX"
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            icon={<StyledHexColorIcon>#</StyledHexColorIcon>}
        />
    );
}

HexColor.propTypes = {
    hexColor: PropTypes.string,
    onChange: PropTypes.func,
};

HexColor.defaultProps = {
    hexColor: '',
    onChange: () => {},
};
