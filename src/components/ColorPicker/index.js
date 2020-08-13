import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Saturation from './saturation';
import RgbaColor from './rgbaColor';
import HexColor from './hexColor';
import Alpha from './alpha';
import Hue from './hue';
import Colors from './colors';
import {
    StyledContainer,
    StyledPreview,
    StyledFlexContainer,
    StyledLabel,
    StyledSaturationContainer,
    StyledSlidersContainer,
    StyledHexColorContainer,
    StyledRgbaColorContainer,
} from './styled';
import { rgbaToHex, rgbToHsv, decomposeColor } from '../../styles/helpers/color';
import { normalazeColor, isAchromatic } from './helpers';

export default function ColorPicker(props) {
    const { id, color: colorProp, colors, label, labelColors, onChange, className, style } = props;
    const [hue, setHue] = useState(0);

    const color = normalazeColor(colorProp);
    const rgbaColor = decomposeColor(color);
    const hexColor = rgbaToHex(rgbaColor);
    const hsvColor = decomposeColor(rgbToHsv(color));
    const alpha = rgbaColor.values[3];

    useEffect(() => {
        if (!isAchromatic(rgbaColor)) {
            setHue(hsvColor.values[0]);
        }
    }, [hsvColor.values, rgbaColor]);

    const hasColors = Array.isArray(colors) && colors.length > 0;

    return (
        <StyledContainer className={className} style={style} id={id}>
            <StyledLabel>{label}</StyledLabel>
            <StyledSaturationContainer>
                <Saturation rgbaColor={rgbaColor} hsvColor={hsvColor} onChange={onChange} />
            </StyledSaturationContainer>
            <StyledFlexContainer>
                <StyledSlidersContainer>
                    <Hue
                        hsvColor={hsvColor}
                        alpha={alpha}
                        hue={hue}
                        setHue={setHue}
                        onChange={onChange}
                    />
                    <Alpha rgbaColor={rgbaColor} onChange={onChange} />
                </StyledSlidersContainer>
                <StyledPreview $color={color} />
            </StyledFlexContainer>

            <StyledFlexContainer>
                <StyledHexColorContainer>
                    <HexColor hexColor={hexColor} onChange={onChange} />
                </StyledHexColorContainer>
                <StyledRgbaColorContainer>
                    <RgbaColor rgbaColor={rgbaColor} onChange={onChange} />
                </StyledRgbaColorContainer>
            </StyledFlexContainer>
            <RenderIf isTrue={hasColors}>
                <StyledLabel>{labelColors}</StyledLabel>
                <Colors colors={colors} onChange={onChange} />
            </RenderIf>
        </StyledContainer>
    );
}

ColorPicker.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    color: PropTypes.string,
    /** Specifies the default colors to choice. */
    colors: PropTypes.array,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text label for the default colors. */
    labelColors: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ColorPicker.defaultProps = {
    id: undefined,
    color: '',
    colors: [],
    label: 'Color Picker',
    labelColors: 'Defualt',
    onChange: () => {},
    className: undefined,
    style: undefined,
};
