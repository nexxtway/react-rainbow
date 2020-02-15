import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledAnchor = attachThemeAttrs(styled.a)`
    letter-spacing: 0.3px;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    color: ${props => props.palette.text.label};
    background-color: transparent;
    text-decoration: none;
    transition: color 0.1s linear;
    cursor: pointer;
    box-sizing: border-box;

    :hover,
    :focus {
        text-decoration: underline;
        color: ${props => props.palette.brand.main};
    }

    :active {
        color: ${props => props.palette.brand.main};
    }

    :active,
    :hover {
        outline: 0;
    }

    :hover {
        color: ${props => props.palette.brand.main};
    }

    ${props =>
        props.disabled &&
        `
            color: ${props.palette.text.disabled};
            pointer-events: none;
    `};
`;

export default StyledAnchor;
