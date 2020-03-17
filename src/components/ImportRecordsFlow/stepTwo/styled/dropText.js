import styled from 'styled-components';
import attachThemeAttrs from '../../../../../src/styles/helpers/attachThemeAttrs';

const StyledDropText = attachThemeAttrs(styled.h1)`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: ${props => props.palette.brand.main};
    bottom: 8px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    pointer-events: none;
`;

export default StyledDropText;
