import styled from 'styled-components';
import {
    COLOR_GRAY_4,
    COLOR_GRAY_1,
    COLOR_GRAY_TRANSPARENT_1,
    COLOR_DARK_1,
} from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = styled.button`
    border: none;
    outline: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 0;
    color: ${COLOR_GRAY_4};
    cursor: pointer;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    box-sizing: border-box;

    :hover,
    :focus,
    :active {
        color: ${COLOR_DARK_1};
        text-decoration: none;
        outline: 0;
    }

    :focus,
    :active {
        font-family: 'Lato Black', Arial, sans-serif;
        background-color: ${COLOR_GRAY_1};
    }

    :hover {
        background-color: ${COLOR_GRAY_TRANSPARENT_1};
    }

    ${props =>
        props.isSelected &&
        `
            color: ${COLOR_DARK_1};
            background-color: ${COLOR_GRAY_1};
            font-family: 'Lato Black', Arial, sans-serif;
        `};
`;

export default StyledAnchor;
