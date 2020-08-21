import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Saturation from './saturation';
import RgbaColor from './rgbaColor';
import HexColor from './hexColor';
import Alpha from './alpha';
import Hue from './hue';
import DefaultColors from './defaultColors';
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
import { rgbToHsv, decomposeColor } from '../../styles/helpers/color';
import { normalizeColor, isAchromatic } from './helpers';
import useNormalizeColors from './hooks/useNormalizeColors';

const ColorPicker = React.forwardRef((props, ref) => {
    const {
        id,
        color: colorProp,
        colors: colorsProp,
        title,
        titleColors,
        tabIndex,
        onChange,
        className,
        style,
    } = props;
    const [hue, setHue] = useState(0);

    const color = normalizeColor(colorProp);
    const rgbaColor = decomposeColor(color);
    const hsvColor = decomposeColor(rgbToHsv(color));
    const alpha = rgbaColor.values[3];

    const firstRef = useRef();
    const lastRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            firstRef.current.focus();
        },
        click: () => {
            firstRef.current.click();
        },
        blur: () => {
            lastRef.current.blur();
        },
    }));

    useEffect(() => {
        if (!isAchromatic(rgbaColor)) {
            setHue(hsvColor.values[0]);
        }
    }, [hsvColor.values, rgbaColor]);

    const colors = useNormalizeColors(colorsProp);
    const hasColors = colors.length > 0;
    const styleColor = { backgroundColor: color };

    return (
        <StyledContainer className={className} style={style} id={id}>
            <StyledLabel>{title}</StyledLabel>
            <StyledSaturationContainer>
                <Saturation
                    ref={firstRef}
                    rgbaColor={rgbaColor}
                    hsvColor={hsvColor}
                    hue={hue}
                    onChange={onChange}
                    tabIndex={tabIndex}
                />
            </StyledSaturationContainer>
            <StyledFlexContainer>
                <StyledSlidersContainer>
                    <Hue
                        hsvColor={hsvColor}
                        alpha={alpha}
                        hue={hue}
                        setHue={setHue}
                        onChange={onChange}
                        tabIndex={tabIndex}
                    />
                    <Alpha rgbaColor={rgbaColor} onChange={onChange} tabIndex={tabIndex} />
                </StyledSlidersContainer>
                <StyledPreview style={styleColor} />
            </StyledFlexContainer>

            <StyledFlexContainer>
                <StyledHexColorContainer>
                    <HexColor rgbaColor={rgbaColor} onChange={onChange} tabIndex={tabIndex} />
                </StyledHexColorContainer>
                <StyledRgbaColorContainer>
                    <RgbaColor rgbaColor={rgbaColor} onChange={onChange} tabIndex={tabIndex} />
                </StyledRgbaColorContainer>
            </StyledFlexContainer>
            <RenderIf isTrue={hasColors}>
                <DefaultColors
                    ref={lastRef}
                    colors={colors}
                    rgbaColor={rgbaColor}
                    title={titleColors}
                    onChange={onChange}
                    tabIndex={tabIndex}
                />
            </RenderIf>
        </StyledContainer>
    );
});

ColorPicker.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    color: PropTypes.string,
    /** Specifies the default colors to choice. */
    colors: PropTypes.array,
    /** Text title for the Color Picker. */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text title for the Default Colors section. */
    titleColors: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ColorPicker.defaultProps = {
    id: undefined,
    color: '#000000',
    colors: [
        '#e3aaec',
        '#c3dbf7',
        '#9fd6ff',
        '#9de7da',
        '#9ef0bf',
        '#fef199',
        '#fdd499',
        '#d174e0',
        '#86baf3',
        '#5ebbff',
        '#42d8be',
        '#3be282',
        '#ffe654',
        '#ffb758',
        '#bd35bd',
        '#5779c1',
        '#4A90E2',
        '#06aea9',
        '#3dba4c',
        '#f5bc24',
        '#f99222',
        '#570e8c',
        '#021970',
        '#0b2399',
        '#0d7477',
        '#0a6b50',
        '#b67e12',
        '#b75d0c',
    ],
    title: 'Color Picker',
    titleColors: 'Defualt',
    tabIndex: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};

export default ColorPicker;
