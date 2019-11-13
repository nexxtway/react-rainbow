import styled from 'styled-components';
import { COLOR_GRAY_2, COLOR_WHITE } from '../../../styles/colors';

const StyledContent = styled.span`
    height: 142px;
    width: 100%;
    border-radius: 22px;
    box-shadow: 0 1px 2px 0 rgba(136, 152, 170, 0.5);
    border: solid 2px ${COLOR_GRAY_2};
    background-color: ${COLOR_WHITE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export default StyledContent;
