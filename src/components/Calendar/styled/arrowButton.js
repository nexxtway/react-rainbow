import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledArrowButton = styled(ButtonIcon).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};
    ${props =>
        props.disabled &&
        `
            color: ${COLOR_GRAY_2};
        `};
`;

export default StyledArrowButton;
