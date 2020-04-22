import styled from 'styled-components';
import Input from '../../Input/styled/input';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const hasLeftIcon = props => props.icon && props.iconPosition === 'left';
const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const StyledInput = attachThemeAttrs(styled(Input)).attrs(props => {
    const shadowWarning = `0 0 2px ${props.palette.warning.main}`;
    return { shadowWarning };
})`
    &[readonly] {
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
        border: 2px transparent solid;
        color: ${props => props.palette.text.main};
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
        props.status === 'error' &&
        `
            border: 1px solid ${props.palette.error.main};
            transition-property: border;
            transition-duration: .25s;

            :focus,
            :active {
                border: 2px solid ${props.palette.error.main};
                box-shadow: ${props.shadows.error};
            }
        `}

    ${props =>
        props.status === 'warning' &&
        `
            border: 1px solid ${props.palette.warning.main};
            transition-property: border;
            transition-duration: .25s;

            :focus,
            :active {
                border: 2px solid ${props.palette.warning.main};
                box-shadow: ${props.shadowWarning};
            }
        `}

    ${props =>
        props.status === 'success' &&
        `
            border: 1px solid ${props.palette.success.main};
            transition-property: border;
            transition-duration: .25s;

            :focus,
            :active {
                border: 2px solid ${props.palette.success.main};
                box-shadow: ${props.shadows.success};
            }
        `}
`;

export default StyledInput;
