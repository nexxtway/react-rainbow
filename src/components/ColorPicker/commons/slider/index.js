import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider, StyledInputRange } from './styled';

export default function Slider(props) {
    const { value, min, max, tabIndex, onChange, style, className } = props;

    return (
        <StyledSlider className={className} style={style}>
            <StyledInputRange
                type="range"
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                tabIndex={tabIndex}
            />
        </StyledSlider>
    );
}

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

Slider.defaultProps = {
    value: undefined,
    min: 0,
    max: 100,
    tabIndex: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
