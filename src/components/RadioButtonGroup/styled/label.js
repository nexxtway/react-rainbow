import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    display: inline-block;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    box-sizing: border-box;
    ${props =>
        props.variant === 'inverse' &&
        `
            color: ${props.palette.isDark ? '#576574' : 'rgb(178,178,178)'}
        `};
`;

export default StyledLabel;
