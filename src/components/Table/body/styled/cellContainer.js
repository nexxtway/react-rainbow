import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCellContainer = attachThemeAttrs(styled.td)`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    ${props =>
        props.variant === 'listview' &&
        `
        background-color: ${props.palette.background.main};
        border: none;
        border-top: 1px solid ${props.palette.border.divider};
        border-right: 1px solid ${props.palette.border.divider};

        :first-child {
            border-left: 1px solid ${props.palette.border.divider};
            border-left-style: solid;
            border-top-left-radius: 12px; 
            border-bottom-left-radius: 12px;
        }

        :first-child * {
            border-top-left-radius: 12px; 
            border-bottom-left-radius: 12px;
        }

        :last-child {
            border-right-style: solid;
            border-bottom-right-radius: 12px; 
            border-top-right-radius: 12px; 
        }
        
        :last-child > * {
            border-bottom-right-radius: 12px; 
            border-top-right-radius: 12px; 
        }
    `}

    :focus {
        outline: none;
    }
`;

export default StyledCellContainer;
