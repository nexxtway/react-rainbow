import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';

const StyledButtonItemsContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${BORDER_RADIUS_2};
    border: solid 1px #e3e5ed;
    background-color: rgba(227, 229, 237, 0.4);
    line-height: 2.5rem;
    height: 2.5rem;

    > :first-child {
        margin-left: -1px;
    }

    > :last-child {
        margin-right: -2px;
    }

    ${props =>
        props.variant === 'inverse' &&
        `
            border-color: rgba(0, 0, 0, 0.4);
            background-color: rgba(0, 0, 0, 0.4);
        `};
`;

export default StyledButtonItemsContainer;
