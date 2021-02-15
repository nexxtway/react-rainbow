import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    FONT_SIZE_HEADING_X_LARGE,
    FONT_SIZE_HEADING_LARGE,
    FONT_SIZE_HEADING_MEDIUM,
    FONT_SIZE_HEADING_SMALL,
    FONT_SIZE_HEADING_X_SMALL,
    FONT_SIZE_HEADING_XX_SMALL,
    FONT_SIZE_TEXT_MEDIUM,
    FONT_SIZE_TEXT_LARGE,
} from './fontSizes';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';

const fontSizesMap = {
    1: FONT_SIZE_HEADING_X_LARGE,
    2: FONT_SIZE_HEADING_LARGE,
    3: FONT_SIZE_HEADING_MEDIUM,
    4: FONT_SIZE_HEADING_SMALL,
    5: FONT_SIZE_HEADING_X_SMALL,
    6: FONT_SIZE_HEADING_XX_SMALL,
};

export const StyledHeading = attachThemeAttrs(styled.h1)`
    font-size: ${props => fontSizesMap[props.level] || FONT_SIZE_HEADING_XX_SMALL};
    color: ${props => props.palette.text.main};
    margin-top: 1rem;
    margin-bottom: 0.75rem;
`;

export const StyledParagraph = attachThemeAttrs(styled.p)`
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.palette.text.main};
`;

export const StyledLink = attachThemeAttrs(styled.a)`
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.palette.text.main};
    text-decoration: underline;
`;

export const StyledCode = attachThemeAttrs(
    styled.code.attrs({
        className: 'hljs',
    }),
)`
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    border-radius: 4px;
    border: 1px solid ${props => props.palette.border.divider};
    padding: 2px 6px;
    overflow-x: auto;

    pre > & {
        display: block;
        padding: 0.5rem 1rem;    
    }

    p > & {
        margin-left: 4px;
        margin-right: 4px;
    }
`;

export const StyledHR = attachThemeAttrs(styled.hr)`
    margin: 1rem auto;
    background: ${props => props.palette.border.divider};
`;

export const StyledBlockquote = attachThemeAttrs(styled.blockquote)`
    position: relative;    
    display: block;
    margin: 0;
    padding: 1em;
    border: solid 1px #e4e6eb;
    background-color: #f9f9fc;
    
    :before {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #e4e6eb;
        content: '';
        width: 4px;
        height: 100%;
    }
`;

export const StyledTable = attachThemeAttrs(styled.table)`
    table-layout: fixed;
    border-collapse: separate;
    background-color: ${props => props.palette.background.main};
    border-spacing: 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${props => props.palette.border.divider};
`;

export const StyledTableRow = attachThemeAttrs(styled.tr)`
    box-shadow: 0 1px 0 0 ${props => props.palette.border.divider};
    transition: all 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    box-sizing: border-box;
    counter-increment: rowCounter;
`;

export const StyledTableHeadindCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_LARGE};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 0 18px;
    font-weight: 900;
    color: ${props => props.palette.text.title};
    line-height: normal;
    position: static;
    border-top: 0;
    outline: none;
    height: 44px;
`;

export const StyledTableCell = attachThemeAttrs(styled.td)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    text-align: ${props => props.align};
    border: 1px solid transparent;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 0 18px;
    color: ${props => props.palette.text.label};
    min-height: 42px;
    line-height: 40px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
`;

export const StyledList = styled.ul`
    list-style: disc;

    ul {
        list-style: circle;
    }
`;

export const StyledOrderedList = styled.ol`
    list-style: decimal;
`;

export const StyledListItem = attachThemeAttrs(styled.li)`
    margin-left: 1rem;
    margin-bottom: 4px;
    font-size: ${FONT_SIZE_TEXT_LARGE};

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
