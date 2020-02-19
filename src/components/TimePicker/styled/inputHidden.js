import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInputHidden = attachThemeAttrs(styled(HiddenElement))`
    color: inherit;
    font: inherit;
    line-height: normal;
    box-sizing: border-box;
    visibility: hidden;

    ::-moz-focus-inner {
        border: 0;
        padding: 0 !important;
    }

    :checked + label,
    :active + label,
    :focus + label {
        font-weight: 300;
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }
`;

export default StyledInputHidden;
