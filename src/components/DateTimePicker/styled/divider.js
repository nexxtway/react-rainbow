import styled from 'styled-components';
import { COLOR_GRAY_2 } from '../../../styles/colors';

const StyledDivider = styled.div`
    display: flex;
    align-items: center;
    width: 2rem;

    &::after {
        content: '';
        background-color: ${COLOR_GRAY_2};
        margin: 0 auto;
        width: 1px;
        height: 100%;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 1rem;

        &::after {
            height: 1px;
            width: 100%;
        }
    }
`;

export default StyledDivider;
