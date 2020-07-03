import styled, { keyframes } from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_HEADING_X_LARGE,
    FONT_SIZE_HEADING_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_HEADING_SMALL,
    FONT_SIZE_TEXT_MEDIUM,
} from '../../../../styles/fontSizes';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';
import { MARGIN_SMALL } from '../../../../styles/margins';
import { replaceAlpha } from '../../../../styles/helpers/color';
import HiddenElement from '../../../Structural/hiddenElement';

const getListStyle = isOrdered => (isOrdered ? 'decimal' : 'circle');

const flash = color => keyframes`
    100% {
        box-shadow: 0 0 0 5px ${color};
    }
`;

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

export const TableBody = attachThemeAttrs(styled.tbody)`
    background-color: ${props => props.palette.background.main};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const TableRow = attachThemeAttrs(styled.tr)`
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

export const TableCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
    padding: 0 18px;

    ${props =>
        !props.isHeader &&
        `
        color: ${props.palette.text.label};
        min-height: 42px;
        line-height: 40px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
        border-radius: 10px;
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
                border-radius: 10px 0 0 0;
            }
            
            &:last-of-type {
                border-radius: 0 10px 0 0;
            }
        `};
`;

export const List = styled.ul`
    list-style: ${props => getListStyle(props.isOrdered)};
`;

export const ListItem = styled.li`
    margin-left: 1rem;
    ${props =>
        props.isTask &&
        `
        margin-left: 0;
        display: flex;
        align-items: center;
        `};
`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    margin-bottom: 2px;
`;

export const Checkbox = attachThemeAttrs(styled(HiddenElement))`
    & ~ label > .rainbow-input_faux {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        border: 1px solid ${props => props.palette.border.divider};
        border-radius: ${BORDER_RADIUS_3};
        background: ${props => props.palette.background.main};
        margin-right: ${MARGIN_SMALL};
        transition: border 0.1s linear, background-color 0.1s linear;
        box-sizing: border-box;
    }

    :checked ~ label > .rainbow-input_faux::after {
        display: block;
        content: '';
        height: 0.4rem;
        width: 0.65rem;
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
        border-bottom: 2px solid;
        border-left: 2px solid;
        border-color: ${props => props.palette.brand.main};
        box-sizing: border-box;
        padding: 0;
    }

    :checked ~ label > .rainbow-input_faux {
        animation: ${props =>
            props.error
                ? flash(replaceAlpha(props.palette.error.main, 0.5))
                : flash(replaceAlpha(props.palette.brand.main, 0.5))} 0.2s linear;
        border: 2px solid;
        border-color: ${props => props.palette.brand.main};
    }

    &[disabled] ~ label > .rainbow-input_faux {
        background-color: ${props => props.palette.background.disabled};
        border-color: ${props => props.palette.border.disabled};
    }

    &[disabled] ~ label > .rainbow-input_faux::after {
        border-color: ${props => props.palette.background.main};
        box-sizing: border-box;
    }
`;
