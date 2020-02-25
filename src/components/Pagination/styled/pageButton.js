import styled from 'styled-components';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import getBorderRadius from '../helpers/getBorderRadius/getBorderRadius';

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
        border-radius: ${props => getBorderRadius(props.pages)};
    }
`;

export default StyledPageButton;
