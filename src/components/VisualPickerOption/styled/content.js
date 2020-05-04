import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContent = attachThemeAttrs(styled.span)`
    height: 142px;
    width: 100%;
    border-radius: 22px;
    box-shadow: ${props => props.shadows.shadow_4};
    border: solid 2px ${props => props.palette.border.divider};
    background-color: ${props => props.palette.background.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ${props =>
        props.size === 'large' &&
        `
            height: 210px;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            height: 142px;
        `};
    ${props =>
        props.size === 'small' &&
        `
            height: 100px;
        `};
`;

export default StyledContent;
