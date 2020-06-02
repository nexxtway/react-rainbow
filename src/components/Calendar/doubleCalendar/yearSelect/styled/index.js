import styled from 'styled-components';
import attachThemeAttrs from '../../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../../styles/fontSizes';

export const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;

    ${props =>
        props.editMode &&
        `
        ::after {
            content: '';
            position: absolute;
            display: block;
            right: 0.6rem;
            bottom: 45%;
            pointer-events: none;
            width: 0.45rem;
            height: 0.45rem;
            border-style: solid;
            border-width: 0.15em 0.15em 0 0;
            transform: rotate(135deg);
            vertical-align: top;
            color: ${props.palette.brand.main};
            box-sizing: border-box;
        }
        `};
`;

export const StyledSelect = attachThemeAttrs(styled.select)`
    font: inherit;
    margin: 0;
    text-transform: none;
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    line-height: 2.12rem;
    height: 2.25rem;
    border-radius: 18px;
    box-sizing: border-box;
    transition: all 0.1s linear;
    border: 1px solid transparent;
    appearance: none;
    padding: 0 1.25rem 0 1rem;

    &::-ms-expand {
        display: none;
    }

    option {
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
    }

    &:hover,
    &:focus,
    &:active,
    &:visited {
        outline: 0;
        background: ${props => props.palette.background.main};
        color: ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.shadow_2};
    }

    &:visited
    &:focus,
    &:active {
        box-shadow: ${props => props.shadows.brand};
    }
`;
