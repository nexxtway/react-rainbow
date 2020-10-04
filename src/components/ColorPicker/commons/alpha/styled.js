import styled from 'styled-components';
import Slider from '../slider';

const StyledAlphaSlider = styled(Slider)`
    input::-webkit-slider-runnable-track {
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%);
    }

    input::-moz-range-track {
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%) !important;
    }
`;

export default StyledAlphaSlider;
