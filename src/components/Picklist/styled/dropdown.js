import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDropdown = attachThemeAttrs(styled.div)`
    position: absolute;
    overflow: hidden;
    z-index: 2000;
    left: 50%;
    float: left;
    width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: 0.875rem;
    padding: 1rem 0;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    transform: translateX(-50%);
    display: none;
    opacity: 0;
    transition: opacity 0.1s linear, visibility 0.1s linear;
    visibility: hidden;
    top: 100%;
    ${props =>
        props.isVisible &&
        `
            display: block;
            opacity: 1;
            transition: opacity 0.1s linear, visibility 0.1s linear;
            visibility: visible;

            & > ul {
                overflow-y: auto;
            }
    `}
    ${props =>
        props.isLoading &&
        `
            padding: 2rem;
            height: 3rem;
            width: 3rem;
    `}
`;

export default StyledDropdown;
