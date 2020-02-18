import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { PADDING_SMALL } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledContainer = attachThemeAttrs(styled.span)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    border-radius: ${BORDER_RADIUS_2};
    padding: 0 ${PADDING_SMALL};
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-property: margin, max-height, opacity, top;
    height: 2rem;
    line-height: 2rem;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    letter-spacing: 0.5;
    background-color: ${props => props.palette.background.secondary};
    border: 1px solid ${props => props.palette.border.divider};
    color: ${props => props.palette.text.label};
    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${props.palette.background.main};
            border: 1px solid ${props.palette.border.divider};
            color: ${props.palette.text.label};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            background-color: transparent;
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.brand.main};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.palette.brand.main};
            border: 1px solid ${props.palette.brand.main};
            color: ${props.palette.getContrastText(props.palette.brand.main)};
        `};
`;

export default StyledContainer;
