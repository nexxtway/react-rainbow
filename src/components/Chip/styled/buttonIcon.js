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
    ${props =>
        props.size === 'medium' &&
        `
            margin-right: -0.8rem;
        `};

    ${props =>
        props.size === 'x-small' &&
        `
            margin-right: -0.4rem;
        `};
`;

export default StyledButtonIcon;
