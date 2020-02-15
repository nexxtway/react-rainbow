import styled from 'styled-components';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttr';

const StyledInverseContainer = attachThemeAttrs(styled.div).attrs(props => {
    if (props.palette.isDark) {
        return { background: '#f9fafc' };
    }
    return { background: '#303030' };
})`
    background-color: ${props => props.background};
    border-radius: 0 0 0.875rem 0.875rem;
`;

export default StyledInverseContainer;
