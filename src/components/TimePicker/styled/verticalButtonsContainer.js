import styled from 'styled-components';
import { MARGIN_XX_SMALL, MARGIN_X_SMALL } from '../../../styles/margins';

const StyledVerticalButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${MARGIN_XX_SMALL} 0 ${MARGIN_X_SMALL};

    > :first-child {
        border-radius: 24px 24px 0 0;
    }

    > :last-child {
        border-radius: 0 0 24px 24px;
        margin-top: -1px;
    }

    @media (max-width: 600px) {
        margin-left: 0;
    }
`;

export default StyledVerticalButtonsContainer;
