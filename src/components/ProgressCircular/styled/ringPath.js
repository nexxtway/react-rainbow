import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledRingPath = attachThemeAttrs(styled.circle)`
    stroke: ${props => props.palette.border.divider};
`;

export default StyledRingPath;
