import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import ButtonIcon from '../../ButtonIcon';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const variants = ['brand', 'success', 'warning', 'error'];
const StyledButtonIcon = attachThemeAttrs(styled(ButtonIcon))`
    margin-right: -0.6rem;
    margin-left: ${MARGIN_XX_SMALL};
    fill: ${props => props.palette.border.main};
    flex-shrink: 0;
    ${props => props.variant === 'outline-brand' && `fill: ${props.palette.brand.main};`};
    ${props =>
        variants.includes(props.variant) &&
        `fill: ${props.palette.getContrastText(props.palette[props.variant].main)};`};
`;

export default StyledButtonIcon;
