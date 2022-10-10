import styled from 'styled-components';
import {
    FONT_SIZE_TEXT_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
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

    ${props =>
        props.size === 'large' &&
        `
            line-height: 3.275rem;
            font-size: ${FONT_SIZE_HEADING_MEDIUM};
        `};

    ${props =>
        props.size === 'small' &&
        `
            line-height: 1.775rem;
            font-size: ${FONT_SIZE_TEXT_MEDIUM};
        `};

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
        ${props =>
            props.size === 'large' &&
            `
                font-size: ${FONT_SIZE_HEADING_MEDIUM};
            `};
    
        ${props =>
            props.size === 'small' &&
            `
                font-size: ${FONT_SIZE_TEXT_MEDIUM};
            `};
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
