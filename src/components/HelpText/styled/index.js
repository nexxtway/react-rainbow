import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledButton = styled.button`
    border: none;
    background: transparent;
    height: fit-content;

    &:focus,
    &:active {
        outline: 0;
    }
`;
export const StyledTooltip = attachThemeAttrs(styled.div)`
    padding: 10px;
    border-radius: 0.875rem;
    box-shadow: ${props => props.shadows.shadow_2};
    border: solid 1px ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    min-width: 60px;
    max-width: 400px;
`;

export const StyledTitle = attachThemeAttrs(styled.div).attrs(props => {
    const { palette, variant } = props;
    const variantColorMap = {
        info: palette.brand.main,
        error: palette.error.main,
        warning: palette.warning.main,
        question: palette.text.header,
    };
    const variantColor = variantColorMap[variant] || variantColorMap.info;
    return { variantColor };
})`
    display: flex;
    font-size: 1rem;
    line-height: 1.3rem;
    margin-bottom: 5px;
    color: ${props => props.variantColor};
    align-items: center;
`;

export const StyledIconContainer = styled.span`
    margin-right: 8px;
`;

export const StyledText = attachThemeAttrs(styled.div)`
    font-size: 0.8125rem;
    line-height: 1.42;
    color: ${props => props.palette.text.main}
`;
