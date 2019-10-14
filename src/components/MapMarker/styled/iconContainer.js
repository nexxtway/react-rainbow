import styled from 'styled-components';
import { MARGIN_SMALL } from '../../../styles/margins';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledIconContainer = styled.span`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${MARGIN_SMALL};
    border-radius: ${BORDER_RADIUS_2};
    height: 2.125rem;
    width: 2.125rem;
`;

export default StyledIconContainer;
