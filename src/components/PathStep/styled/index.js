/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { replaceAlpha } from '../../../styles/helpers/color';

export const StyledStepItem = attachThemeAttrs(styled.li)`
    display: inline-flex;
    align-items: center;
    position: relative;
    margin-left: -2rem;
    box-sizing: border-box;
    height: 2.5rem;
    padding-left: 3.5rem;
    padding-right: 2.5rem;
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.header};
    border-radius: 20px;
    border-right: 2px solid ${props => props.palette.background.main};
    z-index: ${props => props.zIndex};
    cursor: pointer;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    font-weight: 400;

    &:hover {
        background: ${props => props.palette.brand.main};
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
        border-right: 2px solid ${props => props.palette.brand.main};
        box-shadow: 0 0 5px 0 ${props => replaceAlpha(props.palette.brand.light, 0.1)};
        padding-right: 2.5rem;
    }

    ${props =>
        props.isSelected &&
        `
        background: ${props.palette.brand.main};
        color: ${props.palette.getContrastText(props.palette.brand.main)};
        border-right: 2px solid ${props.palette.brand.main};
        box-shadow: 0 0 5px 0 ${replaceAlpha(props.palette.brand.dark, 0.1)};
        padding-right: 2.5rem;
        `};

    ${props =>
        props.isChecked &&
        `
        background: ${props.palette.background.main};
        border-right: 2px solid ${props.palette.background.main};
        color: ${props.palette.brand.main};
        box-shadow: 0 0 5px 2px ${replaceAlpha(props.palette.brand.dark, 0.1)};
        padding-right: 0.5rem;
        `};

    ${props =>
        props.hasError &&
        `
        background: ${props.palette.background.main};
        border-right: 2px solid ${props.palette.background.main};
        color: ${props.palette.error.main};
        box-shadow: 0 0 5px 0 ${replaceAlpha(props.palette.error.dark, 0.1)};
        padding-right: 0.5rem;
        `};

    &> svg {
        margin-left: 1rem;
        width: 1.25rem;
        height: 1.25rem;
        box-sizing: border-box;
    }

    &:first-child {
        margin-left: 0;
        padding-left: 2.5rem;
    }

    &:last-child {
        border-right: none;
    }
`;
