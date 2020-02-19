import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDescription = attachThemeAttrs(styled.span)`
    font-size: 10px;
    font-weight: normal;
    color: ${props => props.palette.text.label};
    letter-spacing: 0.5px;
`;

export default StyledDescription;
