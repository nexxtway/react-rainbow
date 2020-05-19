import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledRangeHighlight = attachThemeAttrs(styled.div).attrs(props => {
    const gradientStart = props.palette.brand.light;
    const gradientEnd = props.palette.background.main;

    return {
        gradientStart,
        gradientEnd,
    };
})`
    height: 38px;
    line-height: 38px;
    margin: 5px auto;

    @media (max-width: 600px) {
        margin: 3px auto;
    }

    ${props =>
        props.isVisible &&
        `
        background: ${props.gradientStart};
        `};
    ${props =>
        props.isVisible &&
        props.isFirstDayOfWeek &&
        `
        background: linear-gradient(
            to left,
            ${props.gradientStart}, 
            ${props.gradientEnd}
        );    
        `};
    ${props =>
        props.isVisible &&
        props.isLastDayOfWeek &&
        `
        background: linear-gradient(
            to right,
            ${props.gradientStart}, 
            ${props.gradientEnd}
        );    
        `};
    ${props =>
        props.isVisible &&
        props.isFirstInRange &&
        `
        background: linear-gradient(
            to left,
            ${props.gradientStart}, 
            ${props.gradientEnd} 60%, 
            ${props.gradientEnd}
            );    
        `};
    ${props =>
        props.isVisible &&
        props.isLastInRange &&
        `
        background: linear-gradient(
            to right,
            ${props.gradientStart}, 
            ${props.gradientEnd} 60%, 
            ${props.gradientEnd}
            );    
        `};
    
`;

export default StyledRangeHighlight;
