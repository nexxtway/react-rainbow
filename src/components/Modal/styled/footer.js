import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledFooter = attachThemeAttrs(styled.footer)`
    border-top: 0.0625px solid ${props => props.palette.border.divider};
    padding: 0.75rem 1rem;
    flex-shrink: 0;
    display: block;
    box-sizing: border-box;
`;

export default StyledFooter;
