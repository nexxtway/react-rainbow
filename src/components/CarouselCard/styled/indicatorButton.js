import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledIndicatorButton = attachThemeAttrs(styled.button)`
    font: inherit;
    width: 0.5rem;
    height: 0.5rem;
    background: ${props => props.palette.border.divider};
    border-radius: 50%;
    border: 1px solid ${props => props.palette.border.divider};
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    appearance: button;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    :hover {
        background-color: ${props => props.palette.border.main};
        border: 1px solid ${props => props.palette.border.main};
    }

    :focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
        border: 1px solid ${props => props.palette.brand.main};
    }

    ${props =>
        props.isSelected &&
        `
            background: ${props.palette.brand.main};
            border: 1px solid ${props.palette.brand.main};

            :hover {
                background: ${props.palette.brand.dark};
                border: 1px solid ${props.palette.brand.dark};
            }
        `};
`;

export default StyledIndicatorButton;
