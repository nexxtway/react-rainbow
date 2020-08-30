import React, { useRef, useEffect, useContext } from 'react';
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

const Saturation = React.forwardRef((_props, ref) => {
    const { rgba, hsv, tabIndex, onChange } = useContext(ColorPickerContext);
    const containerRef = useRef();
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
        const { width, height } = rect;
        const x = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
        const y = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
        const left = Math.min(Math.max(0, x - (rect.left + window.pageXOffset)), width);
        const top = Math.min(Math.max(0, y - (rect.top + window.pageYOffset)), height);

        const saturation = Math.round((left / width) * 100);
        const bright = Math.round((1 - top / height) * 100);

        change({ saturation, bright });
    };

    const unbindEventListeners = () => {
        window.removeEventListener('mousemove', handleChange);
        window.removeEventListener('mouseup', unbindEventListeners);
    };

    const handleMouseDown = event => {
        handleChange(event);
        window.addEventListener('mousemove', handleChange);
        window.addEventListener('mouseup', unbindEventListeners);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => unbindEventListeners, []);

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
            event.stopPropagation();
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
            onMouseDown={handleMouseDown}
            onTouchMove={handleChange}
            onTouchStart={handleChange}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
        >
            <StyledCircle ref={ref} type="button" tabIndex={tabIndex} style={stylePointer} />
        </StyledColor>
    );
});

export default Saturation;
