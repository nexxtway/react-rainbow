import React, { useRef, useContext } from 'react';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } from '../../../../libs/constants';
import {
    hsvToRgb,
    rgbToRgba,
    recomposeColor,
    decomposeColor,
    rgbaToHex,
} from '../../../../styles/helpers/color';
import { StyledColor, StyledCircle } from './styled';
import { ColorPickerContext } from '../../context';
import { calculateSaturation, calculateBright } from './helpers';

const Saturation = React.forwardRef((_props, ref) => {
    const { rgba, hsv, tabIndex, onChange } = useContext(ColorPickerContext);
    const containerRef = useRef();
    const isMouseDown = useRef(false);
    const [h, s, v] = hsv;
    const a = rgba[3];

    const change = ({ saturation, bright }) => {
        if (saturation >= 0) {
            hsv[1] = saturation;
        }
        if (bright >= 0) {
            hsv[2] = bright;
        }
        const rgbaColor = rgbToRgba(hsvToRgb(recomposeColor({ type: 'hsv', values: hsv })), a);

        onChange({
            hex: `#${rgbaToHex(rgbaColor)}`,
            rgba: decomposeColor(rgbaColor).values,
            hsv,
        });
    };

    const handleChange = event => {
        const rect = containerRef.current.getBoundingClientRect();
        const saturation = calculateSaturation(event, rect);
        const bright = calculateBright(event, rect);

        change({ saturation, bright });
    };

    const handleMouseDown = event => {
        handleChange(event);
        isMouseDown.current = true;
    };

    const handleMouseMove = event => {
        if (isMouseDown.current) {
            handleChange(event);
        }
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
    };

    const handleMouseLeave = event => {
        if (isMouseDown.current) {
            handleChange(event);
            isMouseDown.current = false;
        }
    };

    const keyHandlerMap = {
        [UP_KEY]: () => {
            const bright = Math.min(100, v + 1);
            change({ bright });
        },
        [DOWN_KEY]: () => {
            const bright = Math.max(0, v - 1);
            change({ bright });
        },
        [LEFT_KEY]: () => {
            const saturation = Math.max(0, s - 1);
            change({ saturation });
        },
        [RIGHT_KEY]: () => {
            const saturation = Math.min(100, s + 1);
            change({ saturation });
        },
    };

    const handleKeyDown = event => {
        const { keyCode } = event;
        if (keyHandlerMap[keyCode]) {
            event.preventDefault();
            keyHandlerMap[keyCode]();
        }
    };

    const handleClick = () => {
        ref.current.focus();
    };

    const hsl = `hsl(${h},100%, 50%)`;
    const styleColor = { background: hsl };
    const stylePointer = { top: `${100 - v}%`, left: `${s}%` };

    return (
        <StyledColor
            ref={containerRef}
            style={styleColor}
            onTouchMove={handleChange}
            onTouchStart={handleChange}
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <StyledCircle ref={ref} type="button" tabIndex={tabIndex} style={stylePointer} />
        </StyledColor>
    );
});

export default Saturation;
