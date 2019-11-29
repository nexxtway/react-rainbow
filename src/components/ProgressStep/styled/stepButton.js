import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_2, COLOR_WHITE } from '../../../styles/colors';

const StyledStepButton = styled(ButtonIcon)`
    width: 1.25rem;
    height: 1.25rem;
    cursor: auto;
    ${props =>
        props.stepState === 'Inactive' &&
        `
            width: 0.75rem;
            height: 0.75rem;
            background-color: ${COLOR_GRAY_2};
        `};
    ${props =>
        props.stepState === 'Completed' &&
        `
            > svg {
                width: 100% !important;
                height: 100% !important;
        `};
    ${props =>
        props.stepState === 'Active' &&
        `
            background-color: ${COLOR_WHITE};
        `};
    ${props =>
        props.stepState === 'Error' &&
        `
            > svg {
                width: 100% !important;
                height: 100% !important;
        `};
`;

export default StyledStepButton;
