import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledCellContent = styled.div`
    border: 1px solid transparent;
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    height: 42px;
    line-height: 40px;
    padding: 0 0.5rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
`;

export default StyledCellContent;
