import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledNav = attachThemeAttrs(styled.nav)`
    display: block;
    position: relative;
    box-sizing: border-box;
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
                background-color: ${props.palette.background.secondary};

                :hover,
                :active {
                    background-color: ${props.palette.action.active};
                }
            }
        `};
`;

export default StyledNav;
