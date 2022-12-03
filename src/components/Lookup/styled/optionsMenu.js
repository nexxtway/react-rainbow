import styled, { keyframes } from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BorderRadiusElement } from '../../Structural';

const ListOptionsMenu = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const StyledOptionsMenu = attachThemeAttrs(styled(BorderRadiusElement))`
    width: 100%;
    background-color: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_12};
    overflow: hidden;
    margin-top: 0.2rem;
    z-index: 2000;
    animation: ${ListOptionsMenu};
    animation-duration: 0.3s
    padding: 1.15rem 0;
`;

export default StyledOptionsMenu;
