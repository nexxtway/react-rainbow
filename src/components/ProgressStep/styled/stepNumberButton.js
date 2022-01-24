import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledStepNumberButton = attachThemeAttrs(styled.button).attrs(props => {
    const contrastText = props.palette.getContrastText(props.palette.brand.main);
    return { contrastText };
})`
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: auto;
    z-index: 1;

    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    &:active {
        transform: scale(0.7);
        transition: all 0.3s ease;
    }

    &:focus {
        outline: 0;
        box-shadow: ${props => props.shadows.brand};
    }

    ${props =>
        props.stepState === 'Inactive' &&
        `
            background-color: ${props.palette.background.highlight};
        `};

    ${props =>
        props.stepState === 'Active' &&
        `
            color: ${props.contrastText};
            background-color: ${props.palette.brand.main};            

            &:hover, &:focus, &:active {
                color: ${props.contrastText};
            }
        `};
`;

export default StyledStepNumberButton;
