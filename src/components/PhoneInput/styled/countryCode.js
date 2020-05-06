import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCountryCode = attachThemeAttrs(styled.span)`
    padding-right: 5px;
    border-right: 1px solid ${props => props.palette.text.header};
    flex: 0 0 auto;
`;

export default StyledCountryCode;
