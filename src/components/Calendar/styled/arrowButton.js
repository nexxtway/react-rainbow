import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledArrowButton = styled(ButtonIcon).attrs(props => {
    const palette = getTheme(props).palette;
    const brandMainColor = palette.brand.main;
    const textDisabled = palette.text.disabled;
    return {
        brandMainColor,
        textDisabled,
    };
})`
    color: ${props => props.brandMainColor};
    ${props =>
        props.disabled &&
        `
            color: ${props.textDisabled};
        `};
`;

export default StyledArrowButton;
