import styled from 'styled-components';
import { COLOR_GRAY_TRANSPARENT_1 } from '../../../styles/colors';

const StyledOptionLabel = styled.label`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${COLOR_GRAY_TRANSPARENT_1};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 154, 207, 0.2);
        border-radius: 4px;
    }

    @media (max-width: 340px) {
        font-size: 22px;
    }
`;

export default StyledOptionLabel;
