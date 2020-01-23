import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledOptionTyping = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.main};
    font-weight: 900;
`;

export default StyledOptionTyping;
