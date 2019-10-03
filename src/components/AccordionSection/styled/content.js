import styled from 'styled-components';
import { PADDING_MEDIUM, PADDING_X_LARGE } from '../../../styles/paddings';

const StyledContent = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.57;
    color: $color-gray-4;
    padding-left: ${PADDING_MEDIUM};
    padding-right: ${PADDING_X_LARGE};
    padding-bottom: 0.875rem;
    ${props => props.isCollapsed && 'display: none;'};
`;

export default StyledContent;
