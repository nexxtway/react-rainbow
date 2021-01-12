import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIndicatorBar = attachThemeAttrs(styled.div)`
    position: absolute;
    top: 50%;
    margin: -0.0625rem 10% 0;
    display: block;
    width: 80%;
    height: 1px;
    border: solid 0.5px ${props => props.palette.border.divider};
`;

export default StyledIndicatorBar;
