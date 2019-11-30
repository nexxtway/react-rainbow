import styled from 'styled-components';
import { COLOR_DARK_1 } from '../../../styles/colors';
import { FONT_SIZE_HEADING_SMALL } from '../../../styles/fontSizes';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledTitle = styled.h1`
    margin: 0;
    font-weight: inherit;
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${COLOR_DARK_1};
    line-height: 1;
    padding: 0 ${PADDING_MEDIUM} 0 0;
`;

export default StyledTitle;
