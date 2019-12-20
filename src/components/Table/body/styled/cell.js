import styled from 'styled-components';
import { COLOR_BRAND } from '../../../../styles/colors';

const StyledCell = styled.th`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }

    :focus {
        outline: none;

        > div {
            border-color: ${COLOR_BRAND};
        }
    }
`;

export default StyledCell;
