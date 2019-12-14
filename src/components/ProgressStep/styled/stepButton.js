import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';
import { COLOR_GRAY_2, COLOR_WHITE } from '../../../styles/colors';
import getTheme from '../../../styles/helpers/getTheme';

const StyledStepButton = styled(ButtonIcon).attrs(props => {
    const palette = getTheme(props).palette;
    const brandMainColor = palette.brand.main;
    const errorMainColor = palette.error.main;
    return {
        brandMainColor,
        errorMainColor,
    };
})`
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
            color: ${props.brandMainColor};

            &:hover, &:focus, &active {
                color: ${props.brandMainColor};
            }

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
            color: ${props.errorMainColor};

            &:hover, &:focus, &active {
                color: ${props.errorMainColor};
            }

            > svg {
                width: 100% !important;
                height: 100% !important;
        `};
`;

export default StyledStepButton;
