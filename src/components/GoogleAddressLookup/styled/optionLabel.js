import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledOptionLabel = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.header};
`;

export default StyledOptionLabel;
