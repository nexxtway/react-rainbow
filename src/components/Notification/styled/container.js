import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { PADDING_SMALL } from '../../../styles/paddings';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;
    border-radius: ${BORDER_RADIUS_1};
    box-shadow: ${props => props.shadows.shadow_4};
    padding: ${PADDING_SMALL};
    background-color: ${props => props.palette.background.main};
    width: 20rem;
    border: solid 1px ${props => props.palette.border.divider};
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    transition-property: margin, max-height, opacity, top;
    min-height: 2.625rem;

    :hover {
        background-color: ${props => props.palette.action.hover};
        cursor: pointer;
    }
`;

export default StyledContainer;
