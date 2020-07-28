import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_HEADING_X_LARGE,
    FONT_SIZE_HEADING_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_HEADING_SMALL,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../styles/fontSizes';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';

export const StyledHeading = attachThemeAttrs(styled.h1)`
    font-size: ${FONT_SIZE_HEADING_SMALL};
    color: ${props => props.palette.text.main};
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    ${props =>
        props.level === 1 &&
        `
        font-size: ${FONT_SIZE_HEADING_X_LARGE};
        `};
    ${props =>
        props.level === 2 &&
        `
        font-size: ${FONT_SIZE_HEADING_LARGE};
        `};
    ${props =>
        props.level === 3 &&
        `
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
        `};
`;

export const StyledParagraph = attachThemeAttrs(styled.p)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.main};
`;

export const StyledCode = attachThemeAttrs(styled.code)`
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    border-radius: 4px;
    border: 1px solid ${props => props.palette.border.divider};
    padding: 2px 6px;

    pre > & {
        display: block;
        padding: 0.5rem 1rem;    
    }

    p > & {
        margin-left: 4px;
        margin-right: 4px;
    }

    
    .hljs-comment,
    .hljs-meta {
        color: #969896;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-strong,
    .hljs-emphasis,
    .hljs-quote {
        color: #df5000;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-type {
        color: #d73a49;
    }

    .hljs-literal,
    .hljs-symbol,
    .hljs-bullet,
    .hljs-attribute {
        color: #0086b3;
    }

    .hljs-section,
    .hljs-name {
        color: #63a35c;
    }

    .hljs-tag {
    color: #333333;
    }

    .hljs-title,
    .hljs-attr,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
        color: #6f42c1;
    }

    .hljs-addition {
        color: #55a532;
        background-color: #eaffea;
    }

    .hljs-deletion {
        color: #bd2c00;
        background-color: #ffecec;
    }

    .hljs-link {
        text-decoration: underline;
    }

    .hljs-number {
        color: #005cc5;
    }

    .hljs-string {
        color: #032f62;
    }
`;

export const StyledHR = attachThemeAttrs(styled.hr)`
    margin: 1rem auto;
    background: ${props => props.palette.border.divider};
`;

export const StyledTable = attachThemeAttrs(styled.table)`
    table-layout: fixed;
    border-collapse: separate;
    background-color: ${props => props.palette.background.main};
    border-spacing: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledTableBody = attachThemeAttrs(styled.tbody)`
    background-color: ${props => props.palette.background.main};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const StyledTableRow = attachThemeAttrs(styled.tr)`
    box-shadow: 0 1px 0 0 ${props => props.palette.border.divider};
    transition: all 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    box-sizing: border-box;
    counter-increment: rowCounter;

    &:last-of-type {
        box-shadow: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`;

export const StyledTableHeadindCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
    padding: 0 18px;
    text-transform: uppercase;
    font-weight: 900;
    color: ${props => props.palette.text.title};
    line-height: normal;
    position: static;
    border-top: 0;
    outline: none;
    height: 44px;
    background-color: ${props => props.palette.background.highlight};
        
    &:first-of-type {
        border-radius: 10px 0 0 0;
    }
    
    &:last-of-type {
        border-radius: 0 10px 0 0;
    }
`;

export const StyledTableCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
    padding: 0 18px;
    color: ${props => props.palette.text.label};
    min-height: 42px;
    line-height: 40px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    border-radius: 10px;
`;

export const StyledList = styled.ul`
    list-style: circle;
`;

export const StyledOrderedList = styled.ol`
    list-style: decimal;
`;

export const StyledListItem = attachThemeAttrs(styled.li)`
    margin-left: 1rem;
    margin-bottom: 4px;

    input[type='checkbox'] {
        width: 18px;
        height: 18px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: 1px solid ${props => props.palette.border.divider};
        border-radius: ${BORDER_RADIUS_3};
        background-color: ${props => props.palette.background.main};
        margin-right: 6px;
        transition: border 0.1s linear, background-color 0.1s linear;
        box-sizing: border-box;
        appearance: none;

        :checked {
            border: 2px solid ${props => props.palette.brand.main};

            &::after {
                display: block;
                content: '';
                height: 0.3rem;
                width: 0.6rem;
                position: absolute;
                top: 46%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0) rotate(-45deg);
                border-bottom: 2px solid;
                border-left: 2px solid;
                box-sizing: border-box;
                padding: 0;
                border-color: ${props => props.palette.brand.main};
            }
        }

        :focus {
            border: 2px solid ${props => props.palette.brand.main};
            box-shadow: ${props => props.shadows.brand};
        }
    }
`;
