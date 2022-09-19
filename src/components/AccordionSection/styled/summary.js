import styled from 'styled-components';
import { BORDER_RADIUS_4 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../styles/helpers/color';
import { PADDING_MEDIUM } from '../../../styles/paddings';

const StyledSummary = attachThemeAttrs(styled.button)`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${PADDING_MEDIUM};
    border: 1px solid ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    width: 100%;
    border-radius: ${BORDER_RADIUS_4};

    &:hover {
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
        background-color: ${props => props.palette.background.secondary};
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }
    
    ${props =>
        props.isExpanded &&
        `
        border-bottom: solid 1px ${props.palette.border.divider};
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

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
