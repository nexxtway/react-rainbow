import styled from 'styled-components';
import {
    BORDER_RADIUS_2,
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCardInput = attachThemeAttrs(styled.div)`
    height: 2.5rem;
    background-color: ${props => props.palette.background.main};
    border: 1px solid ${props => props.palette.border.main};
    border-radius: ${BORDER_RADIUS_2};
    padding: 0.58rem 1rem 0 1rem;
    cursor: text;

    ${props =>
        props.size === 'large' &&
        `
            padding: 0.9rem 1.2rem 0 1.2rem;
            height: 3.4rem;
        `};

    ${props =>
        props.size === 'small' &&
        `
            padding: 0.38rem 0.8rem 0 0.8rem;
            height: 1.9rem;
        `};

    ${props =>
        props.disabled &&
        `
        background-color: ${props.palette.background.disabled} !important;
        border: 1px solid ${props.palette.border.disabled} !important;
        cursor: not-allowed;
        user-select: none;

        &:focus,
            &:active {
                box-shadow: none;
                background-color: ${props.palette.background.disabled} !important;
                border: 1px solid ${props.palette.border.disabled} !important;
            }
    `}

    ${props =>
        props.borderRadius === 'square' &&
        `
            border-radius: ${BORDER_RADIUS_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-square' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_SQUARE};
        `};

    ${props =>
        props.borderRadius === 'semi-rounded' &&
        `
            border-radius: ${BORDER_RADIUS_SEMI_ROUNDED};
        `};

`;

export default StyledCardInput;
