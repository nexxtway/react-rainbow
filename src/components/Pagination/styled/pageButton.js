import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';

const StyledPageButtonContainer = styled.li`
    > a {
        border-radius: 0;
        margin-left: -1px;
    }

    :nth-child(2) > a {
        margin-left: ${MARGIN_X_SMALL};
        border-radius: 100px 0 0 100px;
    }

    :nth-last-child(2) > a {
        margin-right: ${MARGIN_X_SMALL};
        border-radius: 0 100px 100px 0;
    }
`;

export default StyledPageButtonContainer;
