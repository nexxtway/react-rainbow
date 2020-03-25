import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.main};
    padding: 0;
`;

export default StyledContainer;
