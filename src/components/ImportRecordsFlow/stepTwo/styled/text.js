import styled from 'styled-components';
import attachThemeAttrs from '../../../../../src/styles/helpers/attachThemeAttrs';

const StyledText = attachThemeAttrs(styled.p)`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: #a0a0bc;
    position: absolute;
    bottom: 8px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export default StyledText;
