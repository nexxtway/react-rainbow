import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledFakeDisabled = styled.div`
    position: absolute;
    top: 23px;
    width: 100%;
    z-index: 100;
    height: 2.5rem;
    cursor: not-allowed;
    user-select: none;
    border-radius: ${BORDER_RADIUS_2};
`;

export default StyledFakeDisabled;
