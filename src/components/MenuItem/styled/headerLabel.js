import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_3 } from '../../../styles/colors';

const StyledHeaderLabel = styled.span`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.25;
    color: ${COLOR_GRAY_3};
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.0625rem;
`;

export default StyledHeaderLabel;
