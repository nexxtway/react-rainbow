import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCloseButton = attachThemeAttrs(styled(ButtonIcon))`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1000002;
    color: ${props => props.palette.text.header};
`;

export default StyledCloseButton;
