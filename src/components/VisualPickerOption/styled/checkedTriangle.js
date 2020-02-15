import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCheckedTriangle = attachThemeAttrs(styled.span)`
    position: absolute;
    top: -1px;
    right: -1px;
    border: 1.5rem solid transparent;
    border-radius: 0 20px 0 0;
    border-right-color: ${props => props.palette.brand.main};
    border-top-color: ${props => props.palette.brand.main};
    margin: 0;
    padding: 0;
`;

export default StyledCheckedTriangle;
