import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const IconContainer = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.header};
    height: 100%;
    width: 22px;
    top: 0;
    position: absolute;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 17px !important;
        height: 17px !important;
        font-size: 17px !important;
        ${props =>
            props.size === 'large' &&
            `
            width: 20px !important;
            height: 20px !important;
            font-size: 20px !important;
        `};
    
        ${props =>
            props.size === 'small' &&
            `
            width: 14px !important;
            height: 14px !important;
            font-size: 14px !important;
        `};
    }

    :not(button) {
        pointer-events: none;
    }

    ${props =>
        props.iconPosition === 'left' &&
        `
        left: ${props.readOnly ? 0 : '0.8rem'};
    `}
    ${props =>
        props.iconPosition === 'right' &&
        `
        right: ${props.readOnly ? 0 : '0.8rem'};
    `}
    ${props =>
        props.error &&
        `
        fill: ${props.palette.error.main};
        color: ${props.palette.error.main};
    `}
`;

export default IconContainer;
