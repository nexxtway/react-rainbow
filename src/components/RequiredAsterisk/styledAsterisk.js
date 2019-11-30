import styled from 'styled-components';
import { COLOR_ERROR } from '../../styles/colors';

const StyledAsterisk = styled.abbr`
    text-decoration: none;
    cursor: help;
    border: 0;
    color: ${COLOR_ERROR};
    margin: 0 0.125rem;
    box-sizing: border-box;

    &[title] {
        border: 0;
        text-decoration: none;
        cursor: help;
    }
`;

export default StyledAsterisk;
