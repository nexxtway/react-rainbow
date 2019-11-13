import styled from 'styled-components';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledInnerContainer = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    width: 100%;
    padding: 0 ${PADDING_SMALL};

    @media (max-width: 600px) {
        padding: 0;
    }

    ${props =>
        props.fullWidth &&
        `
            justify-content: space-between;
        `};
`;

export default StyledInnerContainer;
