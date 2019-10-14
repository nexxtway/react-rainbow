import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_4, COLOR_BRAND, COLOR_WHITE } from '../../../styles/colors';
import { MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledButtonIcon = styled(ButtonIcon)`
    margin-right: -0.6rem;
    margin-left: ${MARGIN_XX_SMALL};
    fill: ${COLOR_GRAY_4};
    flex-shrink: 0;
    ${props => props.variant === 'outline-brand' && `fill: ${COLOR_BRAND};`};
    ${props => props.variant === 'brand' && `fill: ${COLOR_WHITE};`};
`;

export default StyledButtonIcon;
