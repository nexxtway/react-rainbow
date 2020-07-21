import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = attachThemeAttrs(styled.a)`
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    outline: inherit;
    cursor: pointer;
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.label};
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    :hover {
        color: ${props => props.palette.brand.main};
    }

    &:focus {
        color: ${props => props.palette.brand.main};
    }

    :active {
        transform: scale(0.95);
        transition: all 0.2s ease;
    }

    ::after {
        display: block;
        content: "";
        border-bottom: 2px solid ${props => props.palette.brand.main};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    :hover::after {
        transform: scaleX(1);
    }

    ${props =>
        props.disabled &&
        `
            color: ${props.palette.text.disabled};
            pointer-events: none;
    `};
`;

export default StyledAnchor;
