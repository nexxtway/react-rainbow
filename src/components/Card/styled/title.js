import styled from 'styled-components';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_4 } from '../../../styles/colors';

const StyledTitle = styled.h2`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 500;
    color: ${COLOR_GRAY_4};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default StyledTitle;
