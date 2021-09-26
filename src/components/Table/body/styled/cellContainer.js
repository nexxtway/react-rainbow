import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCellContainer = attachThemeAttrs(styled.td)`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    ${props =>
        props.theme.variant === 'listview' &&
        `
        background-color: ${props.palette.background.main};
        border: none;
        border-top: 1px solid ${props.palette.border.divider};

        :first-child {
            border-left: 1px solid ${props.palette.border.divider};
            border-left-style: solid;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }

        :first-child > div {
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            overflow: hidden;
        }

        :last-child {
            border-right: 1px solid ${props.palette.border.divider};
            border-right-style: solid;
            border-bottom-right-radius: 12px;
            border-top-right-radius: 12px;
        }
        
        :last-child > div {
            border-bottom-right-radius: 12px;
            border-top-right-radius: 12px;
            overflow: hidden;
            padding: 2px 0;
        }
    `}

    ${props =>
        props.varaint === 'listview' &&
        !props.hideBorderRight &&
        `
        border-right: 1px solid ${props.palette.border.divider};
    `}

    :focus {
        outline: none;
    }
`;

export default StyledCellContainer;
