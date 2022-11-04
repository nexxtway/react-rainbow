import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_1,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';

const StyledTextareaContainer = attachThemeAttrs(styled.div)`
    display: flex;
    flex-direction: column;
    border-radius: ${BORDER_RADIUS_1};
    transition: all 0.1s linear, padding 0s, border 0s;
    background-color: ${props => props.palette.background.main};
    border: solid 1px ${props => props.palette.border.main};

    ${props =>
        props.isFocused &&
        `
        background-color: ${props.palette.background.main};
        border: solid 2px ${props.palette.brand.main};
        box-shadow: ${props.shadows.brand};
        `}
    ${props =>
        props.variant === 'shaded' &&
        `
        box-shadow:${props.disabled || props.readOnly ? '' : props.shadows.shadow_10};
        border: 1px solid transparent;
        `}

    ${props =>
        props.error &&
        `
            border: solid 2px ${props.palette.error.main};
            background-clip: padding-box;

            :focus-within {
                box-shadow: ${props.shadows.error};
                border: solid 2px ${props.palette.error.main};
            }
        `};

    ${props =>
        props.disabled &&
        `
            background-color: ${props.palette.background.disabled};
            border: solid 1px ${props.palette.border.disabled};
            color: ${props.palette.text.disabled};

            :focus-within {
                box-shadow: none;
            }
        `};

    ${props =>
        props.readOnly &&
        `
            border: none;
            border-radius: 0;
            background-color: transparent;

            :focus-within {
                box-shadow: none;
                border: none;
            }
        `};
    
        ${props =>
            props.borderRadius === 'square' &&
            `
                border-radius: ${BORDER_RADIUS_SQUARE};
            `};
    
        ${props =>
            props.borderRadius === 'semi-rounded' &&
            `
                border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
            `};
`;

export default StyledTextareaContainer;
