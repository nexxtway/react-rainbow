import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledBadge = attachThemeAttrs(styled.span)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    min-width: 20px;
    line-height: 1;
    padding: 0 6px;
    height: 20px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 100px;
    z-index: 1;
    transition-timing-function: ease-in-out;
    transition: 0.2s;
    background-color: ${props => props.palette.error.main};
    color: ${props => props.palette.getContrastText(props.palette.error.main)};

    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${props.palette.success.main};
            color: ${props.palette.getContrastText(props.palette.success.main)};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            background-color: ${props.palette.warning.main};
            color: ${props.palette.getContrastText(props.palette.warning.main)};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${props.palette.brand.main};
            color: ${props.palette.getContrastText(props.palette.brand.main)};
        `};
    ${props =>
        props.position === 'top-left' &&
        props.overlap === 'rectangle' &&
        `
            top: 0;
            left: 0;
            transform: scale(1) translate(-50%, -50%);
            transform-origin: 0% 0%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(-50%, -50%);
            `};
        `};
    ${props =>
        props.position === 'top-left' &&
        props.overlap === 'circle' &&
        `
            top: 12%;
            left: 12%;
            transform: scale(1) translate(-50%, -50%);
            transform-origin: 0% 0%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(-50%, -50%);
            `};
        `};
    ${props =>
        props.position === 'top-right' &&
        props.overlap === 'rectangle' &&
        `
            top: 0;
            right: 0;
            transform: scale(1) translate(50%, -50%);
            transform-origin: 100% 0%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(50%, -50%);
            `};
        `};
    ${props =>
        props.position === 'top-right' &&
        props.overlap === 'circle' &&
        `
            top: 12%;
            right: 12%;
            transform: scale(1) translate(50%, -50%);
            transform-origin: 100% 0%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(50%, -50%);
            `};
        `};
    ${props =>
        props.position === 'bottom-left' &&
        props.overlap === 'rectangle' &&
        `
            bottom: 0;
            left: 0;
            transform: scale(1) translate(-50%, 50%);
            transform-origin: 0% 100%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(-50%, 50%);
            `};
        `};
    ${props =>
        props.position === 'bottom-left' &&
        props.overlap === 'circle' &&
        `
            bottom: 12%;
            left: 12%;
            transform: scale(1) translate(-50%, 50%);
            transform-origin: 0% 100%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(-50%, 50%);
            `};
        `};
    ${props =>
        props.position === 'bottom-right' &&
        props.overlap === 'rectangle' &&
        `
            bottom: 0;
            right: 0;
            transform: scale(1) translate(50%, 50%);
            transform-origin: 100% 100%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(50%, 50%);
            `};
        `};
    ${props =>
        props.position === 'bottom-right' &&
        props.overlap === 'circle' &&
        `
            bottom: 12%;
            right: 12%;
            transform: scale(1) translate(50%, 50%);
            transform-origin: 100% 100%;
            ${props.isHidden &&
                `
                    transform: scale(0) translate(50%, 50%);
            `};
        `};
    ${props =>
        !props.value &&
        `
            border-radius: 4px;
            height: 8px;
            min-width: 8px;
            padding: 0;
        `};
`;

export default StyledBadge;
