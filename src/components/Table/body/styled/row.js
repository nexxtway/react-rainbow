import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttr';

const StyledRow = attachThemeAttrs(styled.tr)`
    box-shadow: ${props => props.shadows.shadow_8};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-sizing: border-box;

    &:hover {
        background-color: ${props => props.palette.background.highlight};
        box-shadow: ${props => props.shadows.shadow_9}, ${props => props.shadows.shadow_3};
    }

    ${props =>
        props.isSelected &&
        `
        background-color: ${props.palette.background.secondary};
        `};
`;

export default StyledRow;
