import styled from 'styled-components';
import { COLOR_GRAY_4, COLOR_DARK_1 } from '../../../styles/colors';

const StyledOl = styled.ol`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    li > a {
        text-decoration: none;
    }

    > li:last-child > a {
        font-weight: 900;
        color: ${COLOR_DARK_1};
        pointer-events: none;
    }

    > li:last-child > button {
        font-weight: 900;
        color: ${COLOR_DARK_1};
        pointer-events: none;
    }

    > li:not(:last-child)::after {
        margin: 0 10px;
        content: '>';

        :hover {
            color: ${COLOR_GRAY_4};
        }
    }
`;

export default StyledOl;
