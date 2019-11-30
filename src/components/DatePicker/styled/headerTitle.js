import styled from 'styled-components';
import { COLOR_BRAND } from '../../../styles/colors';
import { FONT_SIZE_HEADING_LARGE } from '../../../styles/fontSizes';

const StyledHeaderTitle = styled.h1`
    color: ${COLOR_BRAND};
    font-size: ${FONT_SIZE_HEADING_LARGE};
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
`;

export default StyledHeaderTitle;
