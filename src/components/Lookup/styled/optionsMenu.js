import styled, { keyframes } from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const ListOptionsMenu = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const StyledOptionsMenu = attachThemeAttrs(styled.div)`
    width: 100%;
    border-radius: 12px;
    background-color: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    border: solid 1px ${props => props.palette.border.divider};
    overflow: hidden;
    margin-top: 0.2rem;
    animation: ${ListOptionsMenu};
    animation-duration: 0.3s
    padding: 1.15rem 0;
    box-sizing: border-box;
`;

export default StyledOptionsMenu;
