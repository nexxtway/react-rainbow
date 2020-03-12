import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDivider = attachThemeAttrs(styled.div)`
    display: block;
    box-sizing: border-box;
    height: 1px;
    background: ${props => props.palette.border.divider};
    margin: 0 1.25rem;
`;

export default StyledDivider;
