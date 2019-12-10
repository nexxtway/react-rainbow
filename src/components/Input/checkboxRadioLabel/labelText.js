import styled from 'styled-components';
import { COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import getTheme from '../../../styles/helpers/getTheme';

const LabelText = styled.span.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand, success, error } = theme.palette;
    const { main: brandMainColor, dark: brandDarkColor } = brand;
    const { main: successMainColor, dark: successDarkColor } = success;
    const { main: errorMainColor, dark: errorDarkColor } = error;

    return {
        brandMainColor,
        brandDarkColor,
        successMainColor,
        successDarkColor,
        errorMainColor,
        errorDarkColor,
        getContrastText,
        // TODO: move up to defaultTheme or normalizeTheme
        brandShadow: `0 0 2px ${brandMainColor}`,
        successShadow: `0 0 2px ${successMainColor}`,
        errorShadow: `0 0 2px ${errorMainColor}`,
    };
})`
    display: inline;
    vertical-align: middle;
    color: ${props => (props.disabled ? COLOR_GRAY_3 : props.brandMainColor)};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.65rem;
`;

export default LabelText;
