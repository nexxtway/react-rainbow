import styled from 'styled-components';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledInput = attachThemeAttrs(styled.input)`
    flex: 1 0 auto;
    font: inherit;
    background-color: transparent;
    line-height: 2.5rem;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;
    border: 0;
    padding: 0;

    :focus,
    :active {
        outline: 0;
        padding: 0;
    }

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    ::placeholder {
        color: ${props => props.palette.text.header};
        font-weight: 300;
        font-size: ${FONT_SIZE_TEXT_LARGE};
    }

    &[readonly] {
        color: ${props => props.palette.text.main};
        font-weight: 400;
        cursor: text;
        box-sizing: border-box;
    }

    &[disabled] {
        color: ${props => props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;
    }
`;

export default StyledInput;
