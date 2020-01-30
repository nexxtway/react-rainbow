import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: auto;
    background: transparent;
    display: flex;
    flex-direction: column;
    opacity: 0.76;
    border-radius: ${BORDER_RADIUS_1};
`;

export default StyledContainer;
