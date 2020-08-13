import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { hsvToRgb, rgbToRgba } from '../../../styles/helpers/color';
import { StyledColor, StyledWhite, StyledBlack, StyledPointer, StyledCircle } from './styled';

export default function Saturation(props) {
    const { rgbaColor, hsvColor, onChange } = props;
    const hslColor = `hsl(${hsvColor.values[0]},100%, 50%)`;
    const alpha = rgbaColor.values[3];
    const containerRef = useRef();

    const handleChange = event => {
        const rect = containerRef.current.getBoundingClientRect();
        const { width, height } = rect;
        const x = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
        const y = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
        const left = Math.min(Math.max(0, x - (rect.left + window.pageXOffset)), width);
        const top = Math.min(Math.max(0, y - (rect.top + window.pageYOffset)), height);

        const saturation = Math.round((left / width) * 100);
        const bright = Math.round((1 - top / height) * 100);

        hsvColor.values[1] = saturation;
        hsvColor.values[2] = bright;
        const color = rgbToRgba(hsvToRgb(hsvColor), alpha);
        onChange(color);
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

    useEffect(() => unbindEventListeners, []);

    const top = 100 - hsvColor.values[2];
    const left = hsvColor.values[1];

    return (
        <StyledColor
            ref={containerRef}
            hslColor={hslColor}
            onMouseDown={handleMouseDown}
            onTouchMove={handleChange}
            onTouchStart={handleChange}
        >
            <StyledWhite>
                <StyledBlack>
                    <StyledPointer $top={top} $left={left}>
                        <StyledCircle />
                    </StyledPointer>
                </StyledBlack>
            </StyledWhite>
        </StyledColor>
    );
}

Saturation.propTypes = {
    rgbaColor: PropTypes.object,
    hsvColor: PropTypes.object,
    onChange: PropTypes.func,
};

Saturation.defaultProps = {
    rgbaColor: undefined,
    hsvColor: undefined,
    onChange: () => {},
};
