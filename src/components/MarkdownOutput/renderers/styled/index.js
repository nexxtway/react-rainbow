import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_HEADING_X_LARGE,
    FONT_SIZE_HEADING_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_HEADING_SMALL,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../../styles/fontSizes';

export const Heading = attachThemeAttrs(styled.h1)`
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

export const Paragraph = attachThemeAttrs(styled.p)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.main};
`;

export const CodeBlock = attachThemeAttrs(styled.code)`
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    border-radius: 10px;
    border: 1px solid ${props => props.palette.border.divider};
    padding: 3px 6px 2px 7px;
    ${props =>
        !props.inline &&
        `
        display:block;
        padding: 0.5rem 1rem;
        `};
    ${props =>
        props.inline &&
        `
        margin-left: 3px;
        margin-right: 3px;
        `};
`;

export const HorizontalRule = attachThemeAttrs(styled.hr)`
    margin: 1rem auto;
    background: ${props => props.palette.border.divider};
`;

export const Table = attachThemeAttrs(styled.table)`
    table-layout: fixed;
    border-collapse: separate;
    background-color: ${props => props.palette.background.main};
    border-spacing: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const TableHead = attachThemeAttrs(styled.thead)`
`;

export const TableBody = attachThemeAttrs(styled.tbody)`
    background-color: ${props => props.palette.background.main};
`;

export const TableRow = attachThemeAttrs(styled.tr)`
    box-shadow: 0 1px 0 0 ${props => props.palette.border.divider};
    transition: all 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    box-sizing: border-box;
    counter-increment: rowCounter;

    &:last-of-type {
        box-shadow: none;
    }
`;

export const TableCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;

    ${props =>
        !props.isHeader &&
        `
        color: ${props.palette.text.label};
        min-height: 42px;
        line-height: 40px;
        padding: 0 0.5rem;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        `};

    ${props =>
        props.isHeader &&
        `
            text-transform: uppercase;
            font-weight: 900;
            color: ${props.palette.text.title};
            line-height: normal;
            position: static;
            border-top: 0;
            outline: none;
            height: 44px;
            background-color: ${props.palette.background.highlight};
                
            &:first-of-type {
                padding-left: 18px;
                border-radius: 10px 0 0 0;    
            }
            
            &:last-of-type {
                border-radius: 0 10px 0 0;
            }
        
        `};
`;
