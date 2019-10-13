import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledDayAdjacent = styled.span`
    display: inline-block;
    background-color: transparent;
    color: ${COLOR_GRAY_2};
    text-align: center;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 36px;
    height: 36px;
    margin: 5px auto;
    cursor: not-allowed;
    user-select: none;

    @media (max-width: 600px) {
        margin: 3px auto;
    }
`;

export default StyledDayAdjacent;
