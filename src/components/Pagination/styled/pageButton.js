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

    ${props =>
        props.pages === 1 &&
        `
            :nth-child(1) > button {
                border-radius: 100px;
            } 
        `}

    ${props =>
        props.variant === 'shaded' &&
        `
        > button {
            box-shadow: none;
        } 

        :nth-child(2) > button {
            margin-left: 0;
            border-radius: 0;
        }

        :nth-last-child(2) > button {
            margin-right: 0;
            border-radius: 0;
        }
        :nth-child(1) > button {
            border-radius: 100px 0 0 100px;
        }

        :nth-last-child(1) > button {
            border-radius: ${getPageBorderRadius(props.pages)};   
        `}
`;

export default StyledPageButton;
