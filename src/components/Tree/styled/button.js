import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';

const Button = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};
    margin-top: 3px;
    margin-right: 8px;
`;

export default Button;
