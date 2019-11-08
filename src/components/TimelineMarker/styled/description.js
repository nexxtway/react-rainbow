import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { PADDING_X_SMALL } from '../../../styles/paddings';

const StyledDescription = styled.p`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${COLOR_GRAY_4};
    padding: ${PADDING_X_SMALL} 0;
    margin: 0;
`;

export default StyledDescription;
