import styled from 'styled-components';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HelpText from '../../Input/styled/helpText';

export const StyledFieldset = styled.fieldset`
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-align: center;
`;

export const StyledHelpText = styled(HelpText)`
    text-align: center;
`;

export const StyledLabel = attachThemeAttrs(styled.legend)`
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

export const StyledWeekDayContainer = styled.span`
    line-height: inherit;
    height: inherit;

    :not(:last-child) {
        margin-right: 0.25rem;
    }
`;

export const StyledWeekDayLabel = attachThemeAttrs(styled.label).attrs(props => {
    const { palette } = props;

    const borderColor = palette.border.divider;
    const defaultColor = palette.text.label;
    const defaultBackground = palette.background.main;
    const activeColor = palette.getContrastText(palette.brand.main);
    const activeBackground = palette.brand.main;

    return {
        borderColor,
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
    border: 1px solid ${props => props.borderColor};
    transition: all 0.2s ease;

    ${props =>
        !props.readOnly &&
        !props.disabled &&
        `
        &:hover {
            color: ${props.activeColor};
            background: ${props.activeBackground};
            border: 1px solid ${props.activeBackground};
            cursor: pointer;
            box-shadow: ${props.shadows.brand};
        }
    `}

    ${props =>
        props.isChecked &&
        `
        color: ${props.activeColor};
        background: ${props.activeBackground};
        border: 1px solid ${props.activeBackground};

        &:hover {
            background: ${props.palette.brand.dark};
            border: 1px solid ${props.palette.brand.dark};
            box-shadow: ${props.shadows.brand};

            ${!props.readOnly &&
                `
                cursor: pointer;
            `}
        }
    `}

    ${props =>
        props.isFocused &&
        `
        border: 1px solid ${props.activeBackground};
        `}

    ${props =>
        props.disabled &&
        !props.isChecked &&
        `
        border-color: ${props.palette.border.disabled};
        background-color: ${props.palette.text.disabled};
    `};

`;
