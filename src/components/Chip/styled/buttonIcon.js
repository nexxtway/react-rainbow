import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { MARGIN_XX_SMALL } from '../../../styles/margins';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButtonIcon = styled(ButtonIcon).attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const { main: brandMainColor } = brand;
    const brandMainContrastText = getContrastText(brandMainColor);

    return {
        brandMainColor,
        brandMainContrastText,
    };
})`
    margin-right: -0.6rem;
    margin-left: ${MARGIN_XX_SMALL};
    fill: ${COLOR_GRAY_4};
    flex-shrink: 0;
    ${props => props.variant === 'outline-brand' && `fill: ${props.brandMainColor};`};
    ${props => props.variant === 'brand' && `fill: ${props.brandMainContrastText};`};
`;

export default StyledButtonIcon;
