import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_WHITE, COLOR_GRAY_2 } from '../../../styles/colors';

const StyledButtonIcon = styled(ButtonIcon)`
    &[disabled] {
        background-color: ${COLOR_WHITE};

        > svg {
            fill: ${COLOR_GRAY_2};
        }
    }
`;

export default StyledButtonIcon;
