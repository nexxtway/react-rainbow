import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLi = attachThemeAttrs(styled.li)`
    border-top: 1px solid ${props => props.palette.border.divider};
    list-style: none;
    box-sizing: border-box;

    &:first-child {
        border-top: 0;
    }

    ${props => props.disabled && 'pointer-events: none;'};
`;

export default StyledLi;
