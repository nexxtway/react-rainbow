import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDropTitle = attachThemeAttrs(styled.p)`
    font-size: 20px;
    pointer-events: none;
    color: ${props => props.palette.brand.main};
`;

export default StyledDropTitle;
