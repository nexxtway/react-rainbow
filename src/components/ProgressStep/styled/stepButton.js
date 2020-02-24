import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledStepButton = attachThemeAttrs(styled(ButtonIcon))`
    width: 1.25rem;
    height: 1.25rem;
    cursor: auto;
    ${props =>
        props.stepState === 'Inactive' &&
        `
            width: 0.75rem;
            height: 0.75rem;
            background-color: ${props.palette.background.highlight};
        `};
    ${props =>
        props.stepState === 'Completed' &&
        `
            color: ${props.palette.brand.main};

            &:hover, &:focus, &active {
                color: ${props.palette.brand.main};
            }

            > svg {
                width: 100% !important;
                height: 100% !important;
        `};
    ${props =>
        props.stepState === 'Active' &&
        `
            background-color: ${props.palette.background.main};
        `};
    ${props =>
        props.stepState === 'Error' &&
        `
            color: ${props.palette.error.main};

            &:hover, &:focus, &active {
                color: ${props.palette.error.main};
            }

            > svg {
                width: 100% !important;
                height: 100% !important;
        `};
`;

export default StyledStepButton;
