import styled from 'styled-components';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const LabelText = attachThemeAttrs(styled.span)`
    display: inline;
    vertical-align: middle;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.65rem;
    ${props => props.disabled && `color: ${props.palette.text.disabled};`};
    ${props =>
        props.size === 'large' &&
        `
            font-size: ${FONT_SIZE_HEADING_MEDIUM};
        `};

    ${props =>
        props.size === 'small' &&
        `
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
        `};
`;

export default LabelText;
