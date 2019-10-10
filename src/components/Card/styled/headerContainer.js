import styled from 'styled-components';
import { PADDING_SMALL, PADDING_MEDIUM } from '../../../styles/paddings';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${PADDING_SMALL} ${PADDING_MEDIUM} 0 ${PADDING_MEDIUM};
    margin-bottom: ${MARGIN_SMALL};
`;

export default StyledHeaderContainer;
