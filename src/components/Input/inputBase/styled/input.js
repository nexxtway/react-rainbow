import styled from 'styled-components';
import Input from '../../styled/input';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const hasLeftIcon = props => props.icon && props.iconPosition === 'left';
const hasRightIcon = props => props.icon && props.iconPosition === 'right';

const StyledInput = attachThemeAttrs(styled(Input))`
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
`;

export default StyledInput;
