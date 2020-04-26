import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CheckmarkIcon from '../checkmark';

const StyledCheckmarkIcon = attachThemeAttrs(styled(CheckmarkIcon))`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height:10px;
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
`;

export default StyledCheckmarkIcon;
