import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCardInput = attachThemeAttrs(styled.div)`
    height: 2.5rem;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    padding: 0.58rem 1rem 0 1rem;
    cursor: text;

    ${props =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled} !important;
        border: 1px solid ${props.palette.border.disabled} !important;
        cursor: not-allowed;
        user-select: none;

        &:focus,
            &:active {
                box-shadow: none;
                background-color: ${props.palette.background.disabled} !important;
                border: 1px solid ${props.palette.border.disabled} !important;
            }
    `}
`;

export default StyledCardInput;
