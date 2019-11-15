import styled from 'styled-components';
import { COLOR_GRAY_1, COLOR_GRAY_2 } from '../../../styles/colors';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledPaginationContainer = styled.div`
    padding: ${PADDING_SMALL};
    background-color: ${COLOR_GRAY_1};
    border-top: 1px solid ${COLOR_GRAY_2};
    border-bottom: 1px solid ${COLOR_GRAY_2};
    display: flex;
    align-items: center;
    justify-content: center;
    ${props =>
        props.paginationAlignment === 'right' &&
        `
            justify-content: flex-start;
            flex-direction: row-reverse;
        `};
    ${props =>
        props.paginationAlignment === 'left' &&
        `
            justify-content: flex-start;
        `};
`;

export default StyledPaginationContainer;
