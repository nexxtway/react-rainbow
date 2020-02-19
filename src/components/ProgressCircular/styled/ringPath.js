import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledRingPath = attachThemeAttrs(styled.circle)`
    stroke: ${props => props.palette.border.divider};
`;

export default StyledRingPath;
