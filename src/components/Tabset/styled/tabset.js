import styled from 'styled-components';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledTabset = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 0 ${PADDING_SMALL};

    @media (max-width: 600px) {
        padding: 0;
    }

    ${props =>
        props.variant === 'line' &&
        `
            padding: 0;
        `};
`;

export default StyledTabset;
