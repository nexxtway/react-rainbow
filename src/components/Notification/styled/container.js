import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4 } from '../../../styles/shadows';
import { COLOR_WHITE, COLOR_GRAY_1 } from '../../../styles/colors';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledContainer = styled.div`
    position: relative;
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${SHADOW_4};
    padding: ${PADDING_SMALL};
    background-color: ${COLOR_WHITE};
    width: 20rem;
    border: solid 1px ${COLOR_GRAY_1};
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-property: margin, max-height, opacity, top;
    min-height: 2.625rem;

    :hover {
        background-color: ${COLOR_GRAY_1};
        cursor: pointer;
    }
`;

export default StyledContainer;
