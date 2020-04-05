import styled from 'styled-components';
import { MARGIN_MEDIUM } from '../../../styles/margins';

const StyledControls = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 8px 0;

    > div:first-child {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;
        margin-right: ${MARGIN_MEDIUM};
    }
`;

export default StyledControls;
