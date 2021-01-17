import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';

const Button = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
    margin-left: -1.75rem;
    margin-right: 0.5rem;
`;

export default Button;
