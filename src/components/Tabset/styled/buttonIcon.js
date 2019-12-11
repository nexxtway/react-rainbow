import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_WHITE, COLOR_GRAY_2 } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledButtonIcon = styled(ButtonIcon).attrs(props => {
    const brandMainColor = getTheme(props).palette.brand.main;
    return { brandMainColor };
})`
    color: ${props => props.brandMainColor};

    &:hover {
        color: ${props => props.brandMainColor};
    }

    &[disabled] {
        background-color: ${COLOR_WHITE};

        > svg {
            fill: ${COLOR_GRAY_2};
        }
    }
`;

export default StyledButtonIcon;
