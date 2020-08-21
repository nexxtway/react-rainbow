import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UP_KEY, DOWN_KEY, RIGHT_KEY, LEFT_KEY } from '../../../../libs/constants';
import { hsvToRgb, rgbToRgba } from '../../../styles/helpers/color';
import { StyledColor, StyledPointer, StyledCircle } from './styled';

const Saturation = React.forwardRef((props, ref) => {
    const { rgbaColor, hsvColor, tabIndex, hue, onChange } = props;
    const hslColor = `hsl(${hue},100%, 50%)`;
    const alpha = rgbaColor.values[3];
    const containerRef = useRef();

    const change = ({ saturation, bright }) => {
        if (saturation) {
            hsvColor.values[1] = saturation;
        }
        if (bright) {
            hsvColor.values[2] = bright;
        }
        const color = rgbToRgba(hsvToRgb(hsvColor), alpha);
        onChange(color);
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
            const bright = Math.min(100, hsvColor.values[2] + 1);
            change({ bright });
        },
        [DOWN_KEY]: () => {
            const bright = Math.max(0, hsvColor.values[2] - 1);
            change({ bright });
        },
        [LEFT_KEY]: () => {
            const saturation = Math.max(0, hsvColor.values[1] - 1);
            change({ saturation });
        },
        [RIGHT_KEY]: () => {
            const saturation = Math.min(100, hsvColor.values[1] + 1);
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

    const styleColor = { background: hslColor };
    const stylePointer = { top: `${100 - hsvColor.values[2]}%`, left: `${hsvColor.values[1]}%` };

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
            <StyledPointer style={stylePointer}>
                <StyledCircle ref={ref} type="button" tabIndex={tabIndex} />
            </StyledPointer>
        </StyledColor>
    );
});

Saturation.propTypes = {
    rgbaColor: PropTypes.object.isRequired,
    hsvColor: PropTypes.object.isRequired,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hue: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

Saturation.defaultProps = {
    rgbaColor: undefined,
    hsvColor: undefined,
    tabIndex: undefined,
    hue: undefined,
    onChange: () => {},
};

export default Saturation;
