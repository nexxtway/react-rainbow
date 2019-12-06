import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_2 } from '../../../styles/colors';

const StyledOptionsMenu = styled.div`
    position: absolute;
    width: 100%;
    border-radius: 12px;
    background-color: ${COLOR_WHITE};
    box-shadow: 0 2px 4px 0 ${COLOR_GRAY_2};
    border: solid 1px ${COLOR_GRAY_2};
    overflow: hidden;
    margin-top: 0.2rem;
    z-index: 2000;
    transition: all 0.1s linear;
    padding: 1.15rem 0;
`;

export default StyledOptionsMenu;
