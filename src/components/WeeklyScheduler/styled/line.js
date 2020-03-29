import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLine = attachThemeAttrs(styled.div)`
    position: relative;
    border-top: 2px solid ${props => props.palette.error.main};
    margin-left: 65px;
    pointer-events: none;
`;

export default StyledLine;
