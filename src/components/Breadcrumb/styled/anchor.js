import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = styled.a`
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${COLOR_GRAY_4};
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;
    box-sizing: border-box;

    :hover,
    :focus {
        text-decoration: underline;
        color: ${COLOR_BRAND};
    }

    :active {
        color: ${COLOR_BRAND};
    }

    :active,
    :hover {
        outline: 0;
    }

    :hover {
        color: ${COLOR_BRAND};
    }

    ${props =>
        props.disabled &&
        `
            color: #d2d4de;
            pointer-events: none;
    `};
`;

export default StyledAnchor;
