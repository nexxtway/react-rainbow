import React from 'react';
import PropTypes from 'prop-types';
import { StyledSlider, StyledInputRange } from './styled';

export default function Slider(props) {
    const { value, min, max, onChange, style, className } = props;

    return (
        <StyledSlider className={className} style={style}>
            <StyledInputRange type="range" value={value} min={min} max={max} onChange={onChange} />
        </StyledSlider>
    );
}

Slider.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

Slider.defaultProps = {
    value: undefined,
    min: 0,
    max: 100,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
