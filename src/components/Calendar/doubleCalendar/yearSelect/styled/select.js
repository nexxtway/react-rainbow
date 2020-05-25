import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_LARGE } from '../../../../../styles/fontSizes';
import attachThemeAttrs from '../../../../../styles/helpers/attachThemeAttrs';

const StyledSelect = attachThemeAttrs(styled.select)`
    font: inherit;
    margin: 0;
    text-transform: none;
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    line-height: 2rem;
    height: 2.25rem;
    border-radius: 18px;
    box-sizing: border-box;
    transition: all 0.1s linear;
    border: 1px solid transparent;
    appearance: none;
    padding: 0.125rem 1.4rem 0.125rem 1.4rem;

    &::-ms-expand {
        display: none;
    }

    option {
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &:hover,
    &:focus,
    &:active,
    &:visited {
        outline: 0;
        background: ${props => props.palette.background.main};
        border: 1px solid ${props => props.palette.border.main};
        padding-left: 1rem;
        padding-right: 1.8rem;
    }
`;

export default StyledSelect;
