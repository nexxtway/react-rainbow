import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import ButtonIcon from '../../ButtonIcon';

const StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))`
    color: ${props => props.palette.brand.main};

    &:hover,
    &:active,
    &:focus {
        color: ${props => props.palette.brand.main};
    }

    &[disabled] {
        background-color: ${props => props.palette.background.main};
        color: ${props => props.palette.text.disabled};
    }
`;

export default StyledButtonIcon;
