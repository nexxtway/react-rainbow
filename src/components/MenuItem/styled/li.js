import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLi = attachThemeAttrs(styled.li)`
    font: inherit;
    line-height: 1.5;
    width: 100%;
    background: none;
    border: none;
    outline: inherit;
    margin: 0;
    transition: color 0.1s linear;
    position: relative;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0.75rem;
    color: ${props => props.palette.text.main};
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:focus {
        outline: 0;
        background-color: ${props => props.palette.action.active};
    }

    &:active {
        background-color: ${props => props.palette.action.active};
        outline: 0;
    }

    &[aria-disabled='true'] {
        color: ${props => props.palette.text.disabled};
        cursor: default;

        &:hover,
        &:focus {
            background-color: transparent;
            outline: 0;
        }
    }
`;

export default StyledLi;
