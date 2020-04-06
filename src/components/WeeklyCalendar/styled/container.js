import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.main};
    display: flex;
    flex-direction: column;
    height: 100%;

`;

export default StyledContainer;
