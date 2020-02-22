import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledOptionsMenu = attachThemeAttrs(styled.div)`
    position: absolute;
    width: 100%;
    border-radius: 12px;
    background-color: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    border: solid 1px ${props => props.palette.border.divider};
    overflow: hidden;
    margin-top: 0.2rem;
    z-index: 2000;
    transition: all 0.1s linear;
    padding: 1.15rem 0;
`;

export default StyledOptionsMenu;
