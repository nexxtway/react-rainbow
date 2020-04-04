import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    background: ${props => props.palette.background.main};
    border-radius: 14px;
    box-shadow: 0 1px 3px 0 #e3e5ed;
    border: solid 1px #e3e5ed;
`;

export default StyledContainer;
