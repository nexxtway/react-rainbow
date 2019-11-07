import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import {
    COLOR_WHITE,
    COLOR_GRAY_2,
    COLOR_GRAY_4,
    COLOR_GRAY_1,
    COLOR_DARK_1,
} from '../../../styles/colors';
import { SHADOW_OUTLINE } from '../../../styles/shadows';
import { FONT_SIZE_TEXT_LARGE, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledButton = styled.button`
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
    background-color: ${COLOR_WHITE};
    border: 1px solid ${COLOR_GRAY_2};
    color: ${COLOR_GRAY_4};
    outline: none;

    :focus,
    :active {
        box-shadow: ${SHADOW_OUTLINE};
        background-color: ${COLOR_WHITE};
        outline: none;
    }

    :hover {
        color: ${COLOR_GRAY_4};
        background-color: ${COLOR_GRAY_1};
        text-decoration: none;
        outline: 0;
    }

    &:focus,
    &:active,
    &:visited {
        font-size: ${FONT_SIZE_TEXT_LARGE};
        text-decoration: none;
        color: ${COLOR_DARK_1};
        background-color: ${COLOR_GRAY_2};
        z-index: 100;
        outline: 0;
    }

    ${props =>
        props.isActivePage &&
        `
            font-size: ${FONT_SIZE_TEXT_LARGE};
            line-height: 0;
            color: ${COLOR_DARK_1};
            background-color: ${COLOR_GRAY_2};
            z-index: 100;

            :hover {
                background-color: ${COLOR_GRAY_2};
                color: ${COLOR_DARK_1};
            }
        `};
    ${props =>
        props.disabled &&
        `
            background-color: transparent;
            pointer-events: none;
        
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

            > svg {
                fill: ${COLOR_GRAY_2};
        `};
`;

export default StyledButton;
