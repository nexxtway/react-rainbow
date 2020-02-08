import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledCheckmarkIcon = attachThemeAttrs(styled.svg)`
    position: absolute;
    top: 8px;
    right: 8px;
    fill: ${props => props.palette.getContrastText(props.palette.brand.main)};
`;

export default StyledCheckmarkIcon;
