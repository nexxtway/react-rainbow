import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import { COLOR_WHITE } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    display: inline-block;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin: 0 auto 0.125rem auto;
    text-align: center;
    box-sizing: border-box;
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${COLOR_WHITE}
        `};
`;

export default StyledLabel;
