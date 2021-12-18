import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTooltip = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.text.main};
    color: ${props => props.palette.getContrastText(props.palette.text.main)};
    text-align: center;
    padding: 6px 12px;
    border-radius: 4px;
    z-index: 1;
    opacity: 0;
    transition-property: opacity;
    transition-duration: 250ms;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    width: auto;
    
    ${props =>
        props.position === 'top' &&
        `
        opacity: 1;
        &::after {
            content: " ";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -7px;
            border-width: 7px;
            border-style: solid;
            border-color: ${props.palette.text.main} transparent transparent transparent;
        }
        `}

    ${props =>
        props.position === 'bottom' &&
        `
        opacity: 1;
        &::after {
            content: " ";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -7px;
            border-width: 7px;
            border-style: solid;
            border-color: transparent transparent ${props.palette.text.main} transparent;
        }
        `}

    ${props =>
        props.position === 'left' &&
        `
        opacity: 1;
        &::after {
            content: " ";
            position: absolute;
            top: 50%;
            left: 100%; /* To the right of the tooltip */
            margin-top: -7px;
            border-width: 7px;
            border-style: solid;
            border-color: transparent transparent transparent ${props.palette.text.main};
        }
        `}

    ${props =>
        props.position === 'right' &&
        `
        opacity: 1;
        &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: 100%; /* To the left of the tooltip */
            margin-top: -7px;
            border-width: 7px;
            border-style: solid;
            border-color: transparent ${props.palette.text.main} transparent transparent;
        }
        `}

    ${props =>
        props.position === 'floating' &&
        `
        opacity: 1;    
        `}
`;

export default StyledTooltip;
