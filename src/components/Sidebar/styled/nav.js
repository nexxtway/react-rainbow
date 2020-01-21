import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledNav = attachThemeAttrs(styled.nav)`
    position: relative;
    display: block;
    box-sizing: border-box;
    background: ${props => props.palette.background.main};
`;

export default StyledNav;
