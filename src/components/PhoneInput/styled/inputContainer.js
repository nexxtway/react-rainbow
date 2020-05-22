import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInputContainer = attachThemeAttrs(styled.div)`
    position: relative;
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    padding: 1px 1rem 1px 1px;
    line-height: 2.5rem;
    height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;
    display: flex;


    ${props =>
        props.isFocus &&
        `
        outline: 0;
        padding: 0 0.9375rem 0 0;
        border: 2px solid ${props.palette.brand.main};
        background-color: ${props.palette.background.main};
        box-shadow: ${props.shadows.brand};
    `};

    ${props =>
        props.error &&
        `
        padding: 0 0.9375rem 0 0;
        background-color: ${props.palette.background.main};
        border: 2px solid ${props.palette.error.main};
        background-clip: padding-box;

        ${props.isFocus &&
            `
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
            outline: 0;
        `}

    `}

    ${props =>
        props.readOnly &&
        `
        padding: 0 1rem 0 0;
        background-color: transparent;
        border: 2px transparent solid;
        box-sizing: border-box;
        box-shadow: inherit;
    `};


    &[disabled] {
        padding: 1px 0.9375rem 1px 1px;
        background-color: ${props => props.palette.background.disabled};
        border: 1px solid ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;
        ${props => !props.icon && 'padding: 0 1rem;'}

        &:focus,
        &:active {
            box-shadow: none;
            background-color: ${props => props.palette.background.disabled};
            border: 1px solid ${props => props.palette.border.disabled};
        }
    }
`;

export default StyledInputContainer;
