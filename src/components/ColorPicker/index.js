/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import Saturation from './saturation';
import RgbaColor from './rgbaColor';
import HexColor from './hexColor';
import Alpha from './alpha';
import Hue from './hue';
import DefaultColors from './defaultColors';
import Preview from './preview';
import {
    StyledContainer,
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
        value,
        colors: colorsProp,
        tabIndex,
        onClick,
        onChange,
        onFocus,
        onBlur,
        className,
        style,
    } = props;

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

    const [hue, setHue] = useState(0);

    const color = normalizeColor(value);
    const rgba = decomposeColor(color);
    const [r, g, b, a] = rgba.values;
    const [h, s, v] = decomposeColor(rgbToHsv(color)).values;

    const colors = useNormalizeColors(colorsProp);
    const context = {
        r,
        g,
        b,
        a,
        h: hue,
        s,
        v,
        colors,
        tabIndex,
        onClick,
        onChange,
        onFocus,
        onBlur,
        setHue,
    };

    useEffect(() => {
        if (!isAchromatic(rgba)) {
            setHue(h);
        }
    }, [h, rgba]);

    return (
        <StyledContainer className={className} style={style} id={id}>
            <Provider value={context}>
                <StyledLabel>Color Picker</StyledLabel>
                <StyledSaturationContainer>
                    <Saturation ref={firstRef} />
                </StyledSaturationContainer>
                <StyledFlexContainer>
                    <StyledSlidersContainer>
                        <Hue />
                        <Alpha />
                    </StyledSlidersContainer>
                    <Preview />
                </StyledFlexContainer>
                <StyledFlexContainer>
                    <StyledHexColorContainer>
                        <HexColor />
                    </StyledHexColorContainer>
                    <StyledRgbaColorContainer>
                        <RgbaColor />
                    </StyledRgbaColorContainer>
                </StyledFlexContainer>
                <DefaultColors ref={lastRef} />
            </Provider>
        </StyledContainer>
    );
});

ColorPicker.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    value: PropTypes.string,
    /** Specifies the default colors to choice. */
    colors: PropTypes.array,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives the focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ColorPicker.defaultProps = {
    id: undefined,
    value: '#000000',
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
    tabIndex: undefined,
    onClick: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
};

export default ColorPicker;
