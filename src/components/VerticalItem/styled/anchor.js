import styled from 'styled-components';
import { COLOR_GRAY_4, COLOR_GRAY_1, COLOR_DARK_1 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = styled.a`
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

    :hover,
    :focus,
    :active {
        background-color: ${COLOR_GRAY_1};
        color: ${COLOR_DARK_1};
        text-decoration: none;
        outline: 0;
    }

    :focus,
    :active {
        font-family: 'Lato Black', Arial, sans-serif;
    }
`;

export default StyledAnchor;
