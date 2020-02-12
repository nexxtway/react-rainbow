import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';

const StyledTextarea = attachThemeAttrs(styled.textarea)`
    border-radius: ${BORDER_RADIUS_1};
    background-color: ${props => props.palette.background.main};
    border: solid 1px ${props => props.palette.border.main};
    transition: all 0.1s linear;
    width: 100%;
    padding: 0.625rem 1rem;
    resize: none;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    line-height: 1.57;
    color: ${props => props.palette.text.main};
    box-sizing: border-box;
    margin: 0;
    overflow: auto;

    :focus,
    :active {
        outline: 0;
        background-color: ${props => props.palette.background.main};
        border: solid 2px ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
        padding: 0.5625rem 0.9375rem;
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-weight: 300;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        cursor: not-allowed;
        user-select: none;
        background-color: ${props => props.palette.background.disabled};
        border: solid 1px ${props => props.palette.border.disabled};
        color: ${props => props.palette.text.disabled};

        &:focus,
        &:active {
            box-shadow: none;
            padding: 0.625rem 1rem;
        }

        &::placeholder {
            color: ${props => props.palette.text.disabled};
        }
    }

    &[readonly] {
        border: none;
        border-radius: 0;
        background-color: transparent;
        padding: 0;

        &:focus,
        &:active {
            box-shadow: none;
            border: none;
        }
    }

    ${props =>
        props.error &&
        `
            background-color: ${props.palette.background.main};
            border: solid 2px ${props.palette.error.main};
            background-clip: padding-box;

            &:focus,
            &:active {
                padding: 0.625rem 1rem;
                box-shadow: ${props.shadows.error};
                border: solid 2px ${props.palette.error.main};
            }
        `};
`;

export default StyledTextarea;
