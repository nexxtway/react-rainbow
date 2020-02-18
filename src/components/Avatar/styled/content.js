import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContent = attachThemeAttrs(styled.span)`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    text-shadow: ${props => props.shadows.shadow_1};
    box-sizing: border-box;

    &:hover {
        color: currentColor;
        cursor: default;
    }

    &[title] {
        text-decoration: none;
        cursor: default;
    }

    ${props =>
        props.initialsVariant === 'inverse' &&
        `
            background-color: ${props.palette.background.secondary};
            color: ${props.palette.text.title};
            text-shadow: none;
        
            &:hover {
                color: ${props.palette.text.title};
                cursor: default;
            }
        `};
    ${props =>
        props.as === 'abbr' &&
        `
            border: 0;
            border-bottom: 1px dotted;
            text-decoration: none;
        `};
`;

export default StyledContent;
