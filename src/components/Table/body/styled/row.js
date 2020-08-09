import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';

const StyledRow = attachThemeAttrs(styled.tr)`
    counter-increment: rowCounter;
    box-sizing: border-box;
    ${props =>
        props.variant === 'default' &&
        `
        box-shadow: ${props.shadows.shadow_8};
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
            background-color: ${replaceAlpha(props.palette.action.hover, 0.4)};
            box-shadow: ${props.shadows.shadow_9}, ${props.shadows.shadow_3};
        }
    `}

    ${props =>
        props.variant === 'listview' &&
        `
        border-radius: 13px;
        box-shadow: 0 1px 1px 0 ${props.palette.border.divider};

        :last-child th, :last-child td{
            border-bottom: 1px solid ${props.palette.border.divider};
        }
        

        &:hover {
            background-color: ${replaceAlpha(props.palette.action.hover, 0.4)};
        }
    `}

    ${props =>
        props.isSelected &&
        `
        background-color: ${replaceAlpha(props.palette.action.active, 0.4)};
        `};
`;

export default StyledRow;
