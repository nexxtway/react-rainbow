import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import CloseIcon from '../icons/closeIcon';

const StyledCloseIcon = attachThemeAttrs(styled(CloseIcon))`
    color: ${props => props.palette.brand.main};
`;

export default StyledCloseIcon;
