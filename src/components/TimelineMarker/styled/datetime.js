import styled from 'styled-components';
import { COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledDatetime = styled.p`
    color: ${COLOR_GRAY_3};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin: 0;
    padding: 0;
    margin-left: ${MARGIN_SMALL};
    box-sizing: border-box;
`;

export default StyledDatetime;
