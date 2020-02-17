import styled from 'styled-components';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttr';

const StyledInverseContainer = attachThemeAttrs(styled.div)`
    background-color: ${props => (props.palette.isDark ? '#f9fafc' : '#303030')};
    border-radius: 0 0 0.875rem 0.875rem;
`;

export default StyledInverseContainer;
