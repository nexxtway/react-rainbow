import styled from 'styled-components';
import { COLOR_GRAY_3 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledHeaderDays = styled.th`
    text-align: center;
    color: ${COLOR_GRAY_3};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 40px;
    height: 40px;

    abbr {
        cursor: default;
        text-transform: capitalize;
    }
`;

export default StyledHeaderDays;
