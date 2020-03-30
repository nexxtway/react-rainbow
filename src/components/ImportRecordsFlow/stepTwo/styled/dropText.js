import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDropText = attachThemeAttrs(styled.p)`
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
