import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { StyledHexColorIcon } from './styled';
import { hexToRgba, rgbaToHex } from '../../styles/helpers/color';

export default function HexColor(props) {
    const { rgbaColor, tabIndex, onChange } = props;
    const [color, setColor] = useState();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isFocused) {
            const hexColor = rgbaToHex(rgbaColor);
            setColor(hexColor.substr(1));
        }
    }, [isFocused, rgbaColor]);

    useEffect(() => {
        const hex = `#${color}`;
        const newColor = hexToRgba(hex);
        if (newColor !== '') {
            onChange(newColor);
        }
    }, [color, onChange]);

    const handleBlur = () => {
        setIsFocused(false);
        const hexColor = rgbaToHex(rgbaColor);
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

HexColor.propTypes = {
    rgbaColor: PropTypes.object,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
};

HexColor.defaultProps = {
    rgbaColor: '',
    tabIndex: undefined,
    onChange: () => {},
};
