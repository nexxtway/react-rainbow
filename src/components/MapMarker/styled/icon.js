import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../styles/margins';

const StyledIcon = styled.span`
    flex-shrink: 0;
    background-color: rgba(82, 95, 127, 0.1);
    border-radius: ${BORDER_RADIUS_2};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${MARGIN_SMALL};
    height: 2.125rem;
    width: 2.125rem;
`;

export default StyledIcon;
