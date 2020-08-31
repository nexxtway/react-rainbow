import React, { useContext, useRef, useImperativeHandle } from 'react';
import { ColorPickerContext } from '../../context';
import { StyledFlexContainer } from '../../styled';
import StyledNumberInput from './styled';
import {
    recomposeColor,
    rgbaToHex,
    rgbToHsv,
    decomposeColor,
} from '../../../../styles/helpers/color';

const Rgba = React.forwardRef((_props, ref) => {
    const { rgba, hsv, hex, tabIndex, onChange } = useContext(ColorPickerContext) || {};

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

    const handleAlphaChange = event => {
        const value = parseInt(event.target.value, 10);
        const newApha = isNaN(value) ? 1 : Math.max(0, Math.min(value, 100)) / 100;
        rgba[3] = newApha;

        onChange({
            hex,
            rgba,
            hsv,
        });
    };

    const handleChange = (index, event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value)) {
            rgba[index] = 0;
        } else {
            rgba[index] = Math.max(0, Math.min(value, 255));
        }
        const rgbaColor = recomposeColor({ type: 'rgba', values: rgba });

        onChange({
            hex: rgbaToHex(rgbaColor),
            rgba,
            hsv: decomposeColor(rgbToHsv(rgbaColor)).values,
        });
    };

    const [r, g, b, a] = rgba;
    const alpha = Math.round(a * 100);

    return (
        <StyledFlexContainer>
            <StyledNumberInput
                type="number"
                value={r}
                bottomHelpText="R"
                onChange={event => handleChange(0, event)}
                tabIndex={tabIndex}
                ref={firstRef}
            />
            <StyledNumberInput
                type="number"
                value={g}
                bottomHelpText="G"
                onChange={event => handleChange(1, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={b}
                bottomHelpText="B"
                onChange={event => handleChange(2, event)}
                tabIndex={tabIndex}
            />
            <StyledNumberInput
                type="number"
                value={alpha}
                bottomHelpText="ALPHA"
                onChange={handleAlphaChange}
                tabIndex={tabIndex}
                ref={lastRef}
            />
        </StyledFlexContainer>
    );
});

export default Rgba;
