import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import { COLOR_WHITE } from '../../../styles/colors';

const StyledInputHidden = styled(HiddenElement)`
    color: inherit;
    font: inherit;
    line-height: normal;
    box-sizing: border-box;

    ::-moz-focus-inner {
        border: 0;
        padding: 0 !important;
    }

    :checked + label,
    :active + label,
    :focus + label {
        font-weight: 300;
        color: ${COLOR_WHITE};
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }
`;

export default StyledInputHidden;
