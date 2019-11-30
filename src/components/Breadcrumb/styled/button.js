import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledButton = styled.button`
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    outline: inherit;
    cursor: pointer;
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${COLOR_GRAY_4};
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner,
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
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

export default StyledButton;
