/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';

const getBackgroundgColor = props => {
    if (props.hasError) return props.palette.error.main;
    return props.palette.brand.main;
};

export const StyledStepItem = attachThemeAttrs(styled.button)`
    display: inline-block;
    align-items: center;
    position: relative;
    margin-left: -2.5rem;
    box-sizing: border-box;
    height: 2.5rem;
    padding-left: 3.5rem;
    padding-right: 2.5rem;
    border: none;
    background: ${props => props.palette.background.highlight};
    color: ${props => props.palette.text.header};
    border-radius: 20px;
    border-right: 2px solid ${props => props.palette.background.main};
    z-index: ${props => props.zIndex};
    cursor: pointer;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    font-weight: 400;
    transition: all 0.3s linear;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden

    ::-moz-focus-inner,
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:hover {
        background: ${props => getBackgroundgColor(props)};
        color: ${props => props.palette.getContrastText(getBackgroundgColor(props))};
        border-right: 2px solid ${props => getBackgroundgColor(props)};
        box-shadow: ${props => props.shadows.shadow_10};
    }

    &:focus,
    &:active {
        outline: 0;
    }

    ${props =>
        props.hasError &&
        `
        border-right: 2px solid ${props.palette.background.main};
        color: ${props.palette.error.main};
        `};

    ${props =>
        props.isSelected &&
        `
        background: ${getBackgroundgColor(props)};
        color: ${props.palette.getContrastText(getBackgroundgColor(props))};
        border-right: 2px solid ${getBackgroundgColor(props)};
        box-shadow: ${props.shadows.shadow_10};
        `};

    ${props =>
        props.isChecked &&
        `
        background: ${props.palette.background.main};
        border-right: 2px solid ${props.palette.background.main};
        color: ${props.palette.brand.main};
        box-shadow: ${props.shadows.shadow_11};
        `};
    
    ${props =>
        props.isChecked &&
        props.hasError &&
        `
        background: ${props.palette.background.main};
        border-right: 2px solid ${props.palette.background.main};
        color: ${props.palette.error.main};
        box-shadow: ${props.shadows.shadow_11};
        `};

    & > svg {
        position: absolute;
        right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        box-sizing: border-box;
    }

    &:first-child {
        margin-left: 0;
        padding-left: 1.5rem;
    }

    &:last-child {
        border-right: none;
    }
`;
