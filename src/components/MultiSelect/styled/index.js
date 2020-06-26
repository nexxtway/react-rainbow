import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import Chip from '../../Chip';
import ButtonIcon from '../../ButtonIcon';
import { TruncatedText } from '../../Structural';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const StyledInput = styled.input`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
`;

export const StyledCombobox = attachThemeAttrs(styled.div)`
    font: inherit;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: 20px;
    width: 100%;
    transition: all 0.1s linear, padding 0s, border 0s;
    display: flex;
    color: ${props => props.palette.text.main};
    font-size: ${FONT_SIZE_TEXT_LARGE};
    box-sizing: border-box;
    margin: 0;
    padding: 0.1rem 1px;

    ${props =>
        props.isBare &&
        `
        background: transparent;
        border-color: transparent;
        `}

    :focus,
    :active,
    :focus-within {
        outline: 0;
        padding: 0.0325rem 0;
        border: 2px solid ${props => props.palette.brand.main};
        background-color: ${props => props.palette.background.main};
        box-shadow: ${props => props.shadows.brand};
    }

    ${props =>
        props.error &&
        `
        border: 2px solid ${props.palette.error.main};
        padding: 0.0375rem 0;

        :focus,
        :active {
            outline: 0;
            background-color: ${props.palette.background.main};
            border: 2px solid ${props.palette.error.main};
            box-shadow: ${props.shadows.error};
        }
        `}    

    ${props =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled};
        border: 1px solid ${props.palette.border.disabled};
        color: ${props.palette.text.disabled};
        cursor: not-allowed;
        user-select: none;

        :focus,
        :active {
            box-shadow: none;
            background-color: ${props.palette.background.disabled};
            border: 1px solid ${props.palette.border.disabled};
        }
        `}
`;

export const StyledChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    overflow: hidden;
    min-height: 2.2rem;
`;

export const StyledChip = styled(Chip)`
    margin: 0.1rem 0 0.1rem 0.2rem;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
    flex-shrink: 0;
    align-self: flex-start;
    margin: 0.3rem 0.4rem;

    svg {
        width: 0.85rem !important;
        height: 0.85rem !important;
        font-size: 0.85rem !important;
    }
`;

export const StyledPlaceholder = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.header};
    font-weight: 500;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    align-self: center;
    max-width: 100%;
    padding: 0 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const StyledText = attachThemeAttrs(styled(TruncatedText))`
    color: ${props => props.palette.text.main};
    font-weight: 500;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    align-self: center;
    max-width: 100%;
    padding: 0.1rem 0.8rem;
`;

export const StyledCountText = attachThemeAttrs(styled.span)`
    color: ${props => props.palette.text.title};
    font-weight: bold;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    align-self: center;

    ${props =>
        props.readOnly &&
        `
            margin-right: 0.8rem;
        `}
`;
