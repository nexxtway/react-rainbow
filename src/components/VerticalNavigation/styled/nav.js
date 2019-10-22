import styled from 'styled-components';
import { COLOR_GRAY_1, COLOR_GRAY_TRANSPARENT_1 } from '../../../styles/colors';

const StyledNav = styled.nav`
    display: block;
    position: relative;
    ${props =>
        props.compact &&
        `
            li > a {
                padding: 0.5rem 1rem 0.5rem 3rem;
            }
        `};
    ${props =>
        props.shaded &&
        `
            li {
                background-color: ${COLOR_GRAY_TRANSPARENT_1};

                :hover,
                :active {
                    background-color: ${COLOR_GRAY_1};
                }
            }
        `};
`;

export default StyledNav;
