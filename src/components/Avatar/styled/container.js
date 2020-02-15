/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { isValidColor } from '../../../styles/helpers/color';

const StyledContainer = attachThemeAttrs(styled.span)`
    background-color: ${props =>
        isValidColor(props.backgroundColor) ? props.backgroundColor : props.palette.brand.main};
    color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    border-radius: 50%;
    display: inline-block;
    height: 2.5rem;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    width: 2.5rem;
    box-sizing: border-box;

    &:hover,
    &:focus {
        color: ${props => props.palette.getContrastText(props.palette.brand.main)};
    }

    ${props =>
        props.size === 'large' &&
        `
            font-size: 1.125rem;
            height: 3.2rem;
            width: 3.2rem;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            font-size: 1rem;
            height: 2.5rem;
            width: 2.5rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            font-size: 0.625rem;
            height: 1.5rem;
            width: 1.5rem;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            font-size: 0.625rem;
            height: 1.25rem;
            width: 1.25rem;
        `};
`;

export default StyledContainer;
