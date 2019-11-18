import styled from 'styled-components';
import { COLOR_DARK_1 } from '../../../../styles/colors';
import { FONT_SIZE_HEADING_MEDIUM } from '../../../../styles/fontSizes';

const StyledEmptyTitle = styled.h1`
    font-size: ${FONT_SIZE_HEADING_MEDIUM};
    font-weight: 900;
    text-align: center;
    color: ${COLOR_DARK_1};
    margin: 0;
    padding: 0;
`;

export default StyledEmptyTitle;
