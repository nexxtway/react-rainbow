import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCell = attachThemeAttrs(styled.th)`
    padding: 0;
    text-align: ${props => props.cellAlignment || 'left'};
    box-sizing: border-box;
    height: 1px; // This is needed for expanding the cell height in all browsers but doesn't work in Firefox
    
    @-moz-document url-prefix() {
        height: 100%; // This is needed for expanding the cell height in Firefox
    }
    

    :first-child > div {
        padding-left: 18px;
    }

    ${props =>
        props.theme.variant === 'listview' &&
        `
        background-color: ${props.palette.background.main};
        border: none;
        text-align: ${props.cellAlignment || 'center'};
        border-top: 1px solid ${props.palette.border.divider};
        border-right: 1px solid ${props.palette.border.divider};

        :first-child {
            border-left: 1px solid ${props.palette.border.divider};
            border-left-style: solid;
            border-top-left-radius: 13px; 
            border-bottom-left-radius: 13px;
        }
        
        :last-child {
            border-right-style: solid;
            border-bottom-right-radius: 13px; 
            border-top-right-radius: 13px; 
        }

        :last-child > div {
            border-bottom-right-radius: 12px; 
            border-top-right-radius: 12px;
            overflow: hidden;
        }

        :first-child > div {
            border-top-left-radius: 12px; 
            border-bottom-left-radius: 12px;
            overflow: hidden;
            padding-left: 0.75rem;
        }
    `}

    :focus {
        outline: none;

        > div {
            border-color: ${props => props.palette.brand.main};
        }
    }

    ${props =>
        props.isEditable &&
        `
        :focus {
            outline: none;
            > div {
                border-color: transparent;
            }
        }
    `}

    
`;

export default StyledCell;
