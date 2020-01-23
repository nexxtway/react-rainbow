import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttr';

const StyledWrapper = attachThemeAttrs(styled.div)`
    outline: none;
    position: absolute;
    top: 0;
    height: 44px;
    background-color: ${props => props.palette.background.secondary};
`;

export default StyledWrapper;
