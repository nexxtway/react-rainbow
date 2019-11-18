import styled from 'styled-components';
import { COLOR_DARK_1 } from '../../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledContent = styled.span`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 500;
    color: ${COLOR_DARK_1};
    display: flex;
    flex-direction: column;
`;

export default StyledContent;
