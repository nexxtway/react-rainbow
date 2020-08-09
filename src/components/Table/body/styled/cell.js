import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledCell = attachThemeAttrs(styled.th)`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }

    ${props =>
        props.variant === 'listview' &&
        `
        background-color: ${props.palette.background.main};
        border: none;
        text-align: center;
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

        :first-child * {
            border-top-left-radius: 12px; 
            border-bottom-left-radius: 12px;
        }
        
        :last-child * {
            border-bottom-right-radius: 12px; 
            border-top-right-radius: 12px; 
        }

        :first-child > div {
            padding-left: 0;
        }
    `}

    

    :focus {
        outline: none;

        > div {
            border-color: ${props => props.palette.brand.main};
        }
    }
`;

export default StyledCell;
