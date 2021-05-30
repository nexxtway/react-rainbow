import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLi = attachThemeAttrs(styled.li)`
    list-style: none;
    box-sizing: border-box;
    border-radius: 8px;

    &:first-child > button {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child > button {
        ${props =>
            !props.isExpanded &&
            `
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        `}        
    }

    &:last-child > section {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;     
    }

    &:not(:first-child) {
        border-top-width: 1px;
    }

    &:not(:last-child) {
        border-bottom-width: 1px;
        margin-bottom: -1px;
    }

    ${props => props.disabled && 'pointer-events: none;'};

    ${props =>
        props.isExpanded &&
        `
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.28);
    `} 
`;

export default StyledLi;
