import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledButton = attachThemeAttrs(styled.button)`
    font: inherit;
    padding: 0;
    transition: color 0.1s linear;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: ${BORDER_RADIUS_2};
    font-weight: bold;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.divider};
    color: ${props => props.palette.text.label};
    outline: none;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;
    box-sizing: border-box;
    color: ${props => props.palette.text.label};

    :focus,
    :active {
        box-shadow: ${props => props.shadows.brand};
        background-color: ${props => props.palette.background.main};
        outline: none;
    }

    :hover {
        color: ${props => props.palette.text.label};
        background-color: ${props => props.palette.action.hover};
        text-decoration: none;
        outline: 0;
    }

    &:focus,
    &:active,
    &:visited {
        font-size: ${FONT_SIZE_TEXT_LARGE};
        text-decoration: none;
        color: ${props => props.palette.text.main};
        background-color: ${props => props.palette.background.highlight};
        z-index: 100;
        outline: 0;
    }

    ${props =>
        props.isActivePage &&
        `
            font-size: ${FONT_SIZE_TEXT_LARGE};
            line-height: 0;
            color: ${props.palette.text.main};
            background-color: ${props.palette.background.highlight};
            z-index: 100;

            :hover {
                background-color: ${props.palette.action.hover};
                color: ${props.palette.text.main};
            }
        `};
    ${props =>
        props.disabled &&
        `
            background-color: transparent;
            pointer-events: none;
            color: ${props.palette.text.disabled};
        
            &:hover {
                background-color: transparent;
                pointer-events: none;
            }
        
            &:focus,
            &:active {
                background-color: transparent;
                pointer-events: none;
                z-index: 100;
            }      
    `};
`;

export default StyledButton;
