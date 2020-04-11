import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { MARGIN_X_SMALL } from '../../../styles/margins';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';

const StyledFieldset = styled.fieldset`
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-align: center;
`;

const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0;
    color: ${props => props.palette.text.label};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-bottom: 0.125rem;
    align-self: center;
    box-sizing: border-box;
    text-align: center;

    &:empty {
        margin: 0;
    }
`;

const StyledTextError = attachThemeAttrs(styled.div)`
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    margin-top: ${MARGIN_X_SMALL};
    color: ${props => props.palette.error.main};
`;

const StyledWeekDayContainer = styled.span`
    line-height: inherit;
    height: inherit;

    :not(:last-child) {
        margin-right: 0.25rem;
    }
`;

const StyledWeekDayLabel = attachThemeAttrs(styled.label).attrs(props => {
    const { palette } = props;

    const defaultColor = palette.text.label;
    const defaultBackground = '#ffffff';
    const activeColor = palette.getContrastText(palette.brand.main);
    const activeBackground = palette.brand.main;

    return {
        defaultColor,
        defaultBackground,
        activeColor,
        activeBackground,
    };
})`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 10px;
    color: ${props => props.defaultColor};
    background: ${props => props.defaultBackground};
    border: 1px solid ${props => props.defaultColor};

    ${props =>
        !props.readOnly &&
        !props.disabled &&
        `
        &:hover {
            color: ${props.activeColor};
            background: ${props.activeBackground};
            border: 1px solid ${props.activeBackground};
        }
    `}

    ${props =>
        props.isChecked &&
        `
        color: ${props.activeColor};
        background: ${props.activeBackground};
        border: 1px solid ${props.activeBackground};
    `}

    ${props =>
        props.disabled &&
        !props.isChecked &&
        `
        border-color: ${props.palette.border.disabled};
        background-color: ${props.palette.background.disabled};
    `};

    
`;

export { StyledFieldset, StyledLabel, StyledTextError, StyledWeekDayContainer, StyledWeekDayLabel };
