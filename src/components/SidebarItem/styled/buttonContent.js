import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledButtonContent = attachThemeAttrs(styled.button)`
    border: none;
    border-radius: 12px;
    outline: 0;
    padding: 0.5rem 0;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :hover,
    :active,
    :focus {
        background-color: ${props => props.palette.action.hover};
        outline: 0;
    }

    ${props =>
        props.isSelected &&
        `
            background-color: ${props.palette.action.active};
            outline: 0;
        `};
`;

export default StyledButtonContent;
