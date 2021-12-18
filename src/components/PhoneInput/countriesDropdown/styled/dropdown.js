import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDropdown = attachThemeAttrs(styled.div)`
    position: relative;
    overflow: hidden;
    float: left;
    width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    border: solid 1px ${props => props.palette.border.divider};
    border-radius: 0.875rem;
    padding: 0 0 1rem 0;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    top: 100%;
`;

export default StyledDropdown;
