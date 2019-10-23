import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_3 } from '../../../styles/colors';

const StyledColumnLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    ::before {
        content: '';
        background-color: ${COLOR_GRAY_TRANSPARENT_3};
        height: 100%;
        width: 1px;
        position: absolute;
        right: 50%;
        left: 50%;
    }
`;

export default StyledColumnLeft;
