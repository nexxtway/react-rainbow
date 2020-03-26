import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.main};
    padding: 0;
    border: 1px solid ${props => props.palette.border.divider};
    display: flex;
    flex-direction: column;
    height: 100%;

`;

export default StyledContainer;
