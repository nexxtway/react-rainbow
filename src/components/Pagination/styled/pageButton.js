import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import getPageBorderRadius from './getPageBorderRadius';

const StyledPageButton = styled.li`
    box-sizing: border-box;

    > button {
        border-radius: 0;
        margin-left: -1px;
    }

    :nth-child(2) > button {
        margin-left: ${MARGIN_X_SMALL};
        border-radius: 100px 0 0 100px;
    }

    :nth-last-child(2) > button {
        margin-right: ${MARGIN_X_SMALL};
        border-radius: ${props => getPageBorderRadius(props.pages)};
    }
`;

export default StyledPageButton;
