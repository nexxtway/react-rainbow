import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledImageFooter = attachThemeAttrs(styled.div)`
    background: ${props => props.palette.background.main};
    padding: 0.75rem;
    text-align: center;
`;

export default StyledImageFooter;
