import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledContainer = attachThemeAttrs(styled.div)`
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    :hover {
        background-color: ${props => props.palette.action.hover};
    }

    .rainbow-vertical-item_action {
        padding: 0.65rem 1rem 0.65rem 3rem;
    }

    ${props =>
        props.isExpanded &&
        `
            background-color: ${props.palette.action.active};
            box-shadow: inset ${props.shadows.shadow_1};
            padding-bottom: 16px;
        `};
`;

export default StyledContainer;
