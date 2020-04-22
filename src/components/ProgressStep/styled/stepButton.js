import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledStepButton = attachThemeAttrs(styled(ButtonIcon)).attrs(props => {
    const contrastText = props.palette.getContrastText(props.palette.brand.main);
    return { contrastText };
})`
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
            color: ${props.contrastText};
            background-color: ${props.palette.brand.main};
            

            &:hover, &:focus, &active {
                color: ${props.contrastText};
            }

            > svg {
                width: 0.75rem !important;
                height: 0.75rem !important;
            }
        `};
    ${props =>
        props.stepState === 'Active' &&
        `
            background-color: ${props.contrastText};
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
