import styled from 'styled-components';
import attachThemeAttrs from './../../../styles/helpers/attachThemeAttrs';

const StyledDynamicContent = attachThemeAttrs(styled.div)`
    color: ${props => props.palette.text.label};
    font-size: large;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
`;

export default StyledDynamicContent;
