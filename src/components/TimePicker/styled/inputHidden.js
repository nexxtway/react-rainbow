import styled from 'styled-components';
import HiddenElement from '../../Structural/hiddenElement';
import getTheme from '../../../styles/helpers/getTheme';

const StyledInputHidden = styled(HiddenElement).attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor } = brand;

    return {
        brandMainColor,
        getContrastText,
    };
})`
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
        color: ${props => props.getContrastText(props.brandMainColor)};
        outline: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
    }
`;

export default StyledInputHidden;
