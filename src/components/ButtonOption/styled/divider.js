import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDivider = attachThemeAttrs(styled.div)`
    height: 60%;
    width: 1px;
    background-color: ${props => props.palette.border.divider};
    display: inline-block;
`;

export default StyledDivider;
