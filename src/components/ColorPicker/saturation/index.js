import React, { useRef, useEffect, useContext, useState } from 'react';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } from '../../../../libs/constants';
import { hsvToRgb, rgbToRgba } from '../../../styles/helpers/color';
import { StyledColor, StyledCircle } from './styled';
import { ColorPickerContext } from '../context';

const Saturation = React.forwardRef((_props, ref) => {
    const { h, s, v, a, tabIndex, onChange } = useContext(ColorPickerContext);
    const containerRef = useRef();
    const [saturation, setSaturation] = useState(s);
    const [bright, setBright] = useState(v);

    const change = values => {
        const newSaturation = values.saturation || saturation;
        const newBright = values.bright || bright;
        const newHsv = `hsv(${h}, ${newSaturation}, ${newBright})`;
        const color = rgbToRgba(hsvToRgb(newHsv), a);
        onChange(color);
    };

    const handleChange = event => {
        const rect = containerRef.current.getBoundingClientRect();
        const { width, height } = rect;
        const x = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
        const y = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
        const left = Math.min(Math.max(0, x - (rect.left + window.pageXOffset)), width);
        const top = Math.min(Math.max(0, y - (rect.top + window.pageYOffset)), height);

        const newSaturation = Math.round((left / width) * 100);
        const newBright = Math.round((1 - top / height) * 100);

        setSaturation(newSaturation);
        setBright(newBright);
        change({ saturation: newSaturation, bright: newBright });
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
            const newBright = Math.min(100, bright + 1);
            setBright(newBright);
            change({ bright: newBright });
        },
        [DOWN_KEY]: () => {
            const newBright = Math.max(0, bright - 1);
            setBright(newBright);
            change({ bright: newBright });
        },
        [LEFT_KEY]: () => {
            const newSaturation = Math.max(0, saturation - 1);
            setSaturation(newSaturation);
            change({ saturation: newSaturation });
        },
        [RIGHT_KEY]: () => {
            const newSaturation = Math.min(100, saturation + 1);
            setSaturation(newSaturation);
            change({ saturation: newSaturation });
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

    const isFocusedRef = useRef(false);
    const handleFocus = () => {
        isFocusedRef.current = true;
    };
    const handleBlur = () => {
        isFocusedRef.current = false;
    };

    useEffect(() => {
        if (!isFocusedRef.current) {
            setSaturation(s);
            setBright(v);
        }
    }, [s, v]);

    const hsl = `hsl(${h},100%, 50%)`;
    const styleColor = { background: hsl };
    const stylePointer = { top: `${100 - bright}%`, left: `${saturation}%` };

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
            <StyledCircle
                ref={ref}
                type="button"
                tabIndex={tabIndex}
                style={stylePointer}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </StyledColor>
    );
});

export default Saturation;
