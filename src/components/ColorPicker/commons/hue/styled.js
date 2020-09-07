import styled from 'styled-components';
import Slider from '../slider';

const StyledHueSlider = styled(Slider)`
    input::-webkit-slider-runnable-track {
        background: linear-gradient(
            to right,
            rgb(255, 0, 0) 0%,
            rgb(255, 255, 0) 17%,
            rgb(0, 255, 0) 33%,
            rgb(0, 255, 255) 50%,
            rgb(0, 0, 255) 67%,
            rgb(255, 0, 255) 83%,
            rgb(255, 0, 0) 100%
        ) !important;
    }

    input::-moz-range-track {
        background: linear-gradient(
            to right,
            rgb(255, 0, 0) 0%,
            rgb(255, 255, 0) 17%,
            rgb(0, 255, 0) 33%,
            rgb(0, 255, 255) 50%,
            rgb(0, 0, 255) 67%,
            rgb(255, 0, 255) 83%,
            rgb(255, 0, 0) 100%
        ) !important;
    }
`;

export default StyledHueSlider;
