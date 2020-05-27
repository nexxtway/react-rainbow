import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import replaceAlpha from '../../../styles/helpers/color/replaceAlpha';

const StyledRangeHighlight = attachThemeAttrs(styled.div).attrs(props => {
    const gradientStart = replaceAlpha(props.palette.brand.main, 0.2);
    const gradientEnd = replaceAlpha(props.palette.brand.main, 0);

    return {
        gradientStart,
        gradientEnd,
    };
})`
    height: 38px;
    line-height: 38px;
    margin: 5px auto;
    color: ${props => props.palette.text.main};

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
        !props.isLastDayOfWeek &&
        `
        background: linear-gradient(
            to left,
            ${props.gradientStart}, 
            ${props.gradientStart} 50%, 
            ${props.gradientEnd} 50%, 
            ${props.gradientEnd}
            );    
        `};
    ${props =>
        props.isVisible &&
        props.isFirstInRange &&
        props.isLastDayOfWeek &&
        `
        background: linear-gradient(
            to right,
            ${props.gradientEnd},
            ${props.gradientEnd} 50%,
            ${props.gradientStart} 50%, 
            ${props.gradientEnd}
            );    
        `};
    ${props =>
        props.isVisible &&
        props.isLastInRange &&
        !props.isFirstDayOfWeek &&
        `
        background: linear-gradient(
            to right,
            ${props.gradientStart}, 
            ${props.gradientStart} 50%, 
            ${props.gradientEnd} 50%, 
            ${props.gradientEnd}
            );    
        `};
    ${props =>
        props.isVisible &&
        props.isLastInRange &&
        props.isFirstDayOfWeek &&
        `
        background: linear-gradient(
            to left,
            ${props.gradientEnd},
            ${props.gradientEnd} 50%,
            ${props.gradientStart} 50%,
            ${props.gradientEnd}
            );    
        `};                
`;

export default StyledRangeHighlight;
