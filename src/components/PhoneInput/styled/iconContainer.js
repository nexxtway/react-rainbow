import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIconContainer = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
    color: ${props => props.palette.text.header};
    height: 100%;
    width: 22px;
    line-height: 1;
    border: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 16px !important;
        height: 16px !important;
        font-size: 16px !important;
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
        props.error &&
        `
        fill: ${props.palette.error.main};
        color: ${props.palette.error.main};
    `}
`;

export default StyledIconContainer;
