import styled from 'styled-components';
import { COLOR_BRAND, COLOR_GRAY_2, COLOR_WHITE } from '../../../styles/colors';

const StyledSelect = styled.select`
    appearance: none;
    width: 100%;
    line-height: 28px;
    height: 32px;
    border: 1px solid ${COLOR_GRAY_2};
    border-radius: 1rem;
    padding: 0 28px 0 12px;
    background-color: ${COLOR_WHITE};
    color: #061c3f;
    font-size: 14px;
    transition: all 0.1s linear;

    :focus,
    :active {
        outline: 0;
        border: 1px ${COLOR_BRAND} solid;
        box-shadow: 0 0 2px ${COLOR_BRAND};
    }
`;

export default StyledSelect;
