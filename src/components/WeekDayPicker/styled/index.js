import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import HelpText from '../../Input/styled/helpText';

const StyledFieldset = styled.fieldset`
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-align: center;
`;

const StyledHelpText = styled(HelpText)`
    text-align: center;
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

    const borderColor = palette.border.divider;
    const defaultColor = palette.text.label;
    const defaultBackground = '#ffffff';
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
            cursor: pointer;
            box-shadow: ${props.shadows.brand};
        }
    `}

    ${props =>
        props.disabled &&
        !props.isChecked &&
        `
        border-color: ${props.palette.border.disabled};
        background-color: ${props.palette.background.disabled};
    `};

    
`;

export { StyledFieldset, StyledHelpText, StyledWeekDayContainer, StyledWeekDayLabel };
