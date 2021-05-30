import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledSummary = attachThemeAttrs(styled.button)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${PADDING_MEDIUM};
    border: 1px solid ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    width: 100%;

    &:hover {
        box-shadow: ${props => props.shadows.shadow_1};
    }

    &:focus {
        position: relative;
        z-index: 1;
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }
    
    ${props =>
        props.isExpanded &&
        `
        border-bottom: solid 1px ${props.palette.border.divider};
        box-shadow: ${props.shadows.shadow_1};

        &:hover {
            background-color: ${props.palette.background.secondary};
        }
    `}

    ${props =>
        props.variant === 'error' &&
        `
        
        background-color: ${replaceAlpha(props.palette.error.main, 0.1)};
        border-color: ${replaceAlpha(props.palette.error.main, 0.3)};

        &:hover {
            background-color: ${replaceAlpha(props.palette.error.main, 0.2)};
        }

        &:focus {
            outline: 0;
            box-shadow: ${props.shadows.error};
        }
    `}
`;

export default StyledSummary;
