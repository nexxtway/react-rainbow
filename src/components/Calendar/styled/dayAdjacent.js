import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDayAdjacent = attachThemeAttrs(styled.span)`
    display: inline-block;
    background-color: transparent;
    color: ${props => props.palette.text.disabled};
    text-align: center;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 400;
    line-height: 38px;
    height: 38px;
    width: 38px;
    margin: 6px auto;
    cursor: not-allowed;
    user-select: none;
    border-radius: 48px;
    position: relative;

    @media (max-width: 600px) {
        margin: 3px auto;
    }

    &:focus,
    &:active,
    &:focus-visible {
        box-shadow: ${props => props.shadows.shadow_1};
        border: 1px solid ${props => props.palette.border.disabled};
        line-height: 36px;
        outline: none;
    }

    ${props =>
        props.isHighlighted &&
        `
        &::after {
            content: '';
            height: 6px;
            width: 6px;
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background-color: ${props.palette.error.main};
        }
    `}
`;

export default StyledDayAdjacent;
