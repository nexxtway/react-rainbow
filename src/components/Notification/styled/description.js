import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { PADDING_XX_SMALL } from '../../../styles/paddings';

const StyledDescription = styled.p`
    margin: 0;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 300;
    color: ${COLOR_GRAY_4};
    padding: ${PADDING_XX_SMALL} 0 0 0;
`;

export default StyledDescription;
