import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledGrid = attachThemeAttrs(styled.div)`
    border-top: 1px solid ${props => props.palette.border.divider};
`;

export default StyledGrid;
