import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledAnchorContent = attachThemeAttrs(styled.a)`
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 100%;
    border-radius: 12px;
    cursor: pointer;
    flex-direction: column;
    box-sizing: border-box;
    color: transparent;

    :hover,
    :active,
    :focus {
        background-color: ${props => props.palette.action.hover};
        text-decoration: none;
        color: transparent;
        outline: 0;
    }

    ${props =>
        props.isSelected &&
        `
        background-color: ${props.palette.action.active};
            outline: 0;
        `};
`;

export default StyledAnchorContent;
