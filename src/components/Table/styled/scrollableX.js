import styled from 'styled-components';
import { COLOR_GRAY_1, COLOR_GRAY_2 } from '../../../styles/colors';

const StyledScrollableX = styled.div`
    background-color: ${COLOR_GRAY_1};
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    overflow-x: auto;
    padding-top: 44px;
    position: relative;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid ${COLOR_GRAY_2};
`;

export default StyledScrollableX;
