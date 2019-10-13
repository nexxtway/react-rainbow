import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledFooter = styled.footer`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: normal;
    color: inherit;
    text-align: center;
    border-top: 0.0625rem solid ${COLOR_GRAY_2};
    padding: ${PADDING_SMALL} ${PADDING_MEDIUM};
`;

export default StyledFooter;
