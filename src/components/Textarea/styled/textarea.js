import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';

const StyledTextarea = attachThemeAttrs(styled.textarea)`
    border-radius: ${BORDER_RADIUS_1};
    background-color: transparent;
    border: none;
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
        padding: 0.563rem 0.9375rem;
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[disabled] {
        cursor: not-allowed;
        user-select: none;

        &:focus,
        &:active {
            padding: 0.625rem 1rem;
        }

        &::placeholder {
            color: ${props => props.palette.text.disabled};
        }
    }

    &[readonly] {
        padding: 0;
    }

    ${props =>
        props.error &&
        `
            background-clip: padding-box;

            &:focus,
            &:active {
                padding: 0.625rem 1rem;
            }
        `};
`;

export default StyledTextarea;
