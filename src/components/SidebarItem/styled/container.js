import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    border: 0;
    background-color: transparent;
    transition: color 0.1s linear;
    height: 6rem;
    border-radius: 12px;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0;
    overflow: visible;
    text-transform: none;

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

export default StyledContainer;
