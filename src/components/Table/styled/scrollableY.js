import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_WHITE } from '../../../styles/colors';

const StyledScrollableY = styled.div`
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid ${COLOR_GRAY_2};
    background-color: ${COLOR_WHITE};
    ${props =>
        props.isEmpty &&
        !props.isLoading &&
        `
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
        `};
`;

export default StyledScrollableY;
