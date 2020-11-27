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
