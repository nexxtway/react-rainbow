import styled from 'styled-components';
import { COLOR_BRAND } from '../../../../styles/colors';

const StyledCellContainer = styled.td`
    padding: 0;
    text-align: left;

    :focus {
        outline: none;
        border: 1px solid ${COLOR_BRAND};
    }
`;

export default StyledCellContainer;
