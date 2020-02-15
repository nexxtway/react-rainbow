import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIcon = attachThemeAttrs(styled.span)`
    align-items: center;
    color: ${props => props.palette.brand.main};
    display: flex;
    line-height: 1;
    height: 100%;
    position: absolute;
    top: 0;
    left: 1.25rem;
`;

export default StyledIcon;
