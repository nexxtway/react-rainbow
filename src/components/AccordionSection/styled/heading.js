import styled from 'styled-components';
import { COLOR_DARK_1, COLOR_GRAY_2 } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';

const StyledHeading = styled.h3`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    line-height: 1.25;
    color: ${COLOR_DARK_1};
    width: 100%;
    ${props =>
        props.disabled &&
        `
            color: ${COLOR_GRAY_2};
    `};
`;

export default StyledHeading;
