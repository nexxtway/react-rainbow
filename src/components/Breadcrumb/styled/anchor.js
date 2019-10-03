import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = styled.a`
    text-decoration: none;
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${COLOR_GRAY_4};

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
