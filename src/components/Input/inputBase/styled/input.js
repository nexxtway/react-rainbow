import styled from 'styled-components';
import Input from '../../styled/input';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import {
    BORDER_RADIUS_SQUARE,
    BORDER_RADIUS_SEMI_SQUARE,
    BORDER_RADIUS_SEMI_ROUNDED,
} from '../../../../styles/borderRadius';

const hasLeftIcon = props => props.icon && props.iconPosition === 'left';
const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const StyledInput = attachThemeAttrs(styled(Input))`
    ${props =>
        !props.disabled &&
        `
        &[readonly] {
            padding-left: 0;
            padding-right: 0;
            background-color: transparent;
            border: 2px transparent solid;
            color: ${props.palette.text.main};
            font-weight: 400;
            cursor: text;
            box-sizing: border-box;
    
            &:focus,
            &:active {
                box-shadow: none;
                background-color: transparent;
                border: 2px transparent solid;
            }
        }
    `}
    ${props =>
        props.error &&
        `
        &[readonly] {
            &:focus,
            &:active {
                padding: 0;

                ${hasLeftIcon(props) &&
                    `
                    padding-left: 1.75rem;
                    padding-right: 0;
                `}
                ${hasRightIcon(props) &&
                    `
                    padding-left: 0;
                    padding-right: 1.75rem;
                `}
            }
        }
    `}
    ${props =>
        hasLeftIcon(props) &&
        `
        &[readonly] {
            padding-left: 1.75rem;
            padding-right: 0;
        }
    `};
    ${props =>
        hasRightIcon(props) &&
        `
        &[readonly] {
            padding-left: 0;
            padding-right: 1.75rem;
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

export default StyledInput;
