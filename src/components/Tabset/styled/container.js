import styled from 'styled-components';
import { COLOR_GRAY_1, COLOR_WHITE } from '../../../styles/colors';

const StyledContainer = styled.div`
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        border-bottom: solid 1px ${COLOR_GRAY_1};
        background-color: ${COLOR_WHITE} !important;
    }
`;

export default StyledContainer;
