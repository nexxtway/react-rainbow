import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledButton = attachThemeAttrs(styled.button)`
    border: 0;
    display: flex;
    padding: 1rem 1rem 1rem 1.25rem;
    border-radius: 0;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    background-clip: border-box;
    background-color: transparent;
    text-decoration: none;
    width: 100%;
    cursor: pointer;
    white-space: normal;
    user-select: none;
    appearance: none;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

    :focus {
        outline: 0;
        background-color: ${props => props.palette.background.secondary};
    }

    ${props =>
        props.isExpanded &&
        props.description &&
        `
            padding-bottom: 0;
        `};
`;

export default StyledButton;
