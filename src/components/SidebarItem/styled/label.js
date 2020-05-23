import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_SMALL } from '../../../styles/fontSizes';

const StyledLabel = attachThemeAttrs(styled.span)`
    font-family: 'Lato Regular', Arial, sans-serif;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    letter-spacing: -0.2px;
    text-align: center;
    color: ${props => props.palette.text.header};

    ${props =>
        props.isSelected &&
        `
        color: ${props.palette.text.label};
    `};
`;

export default StyledLabel;
