import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { BorderRadiusElement } from '../../../Structural';

const StyledDropdown = attachThemeAttrs(styled(BorderRadiusElement))`
    position: relative;
    overflow: hidden;
    float: left;
    width: 100%;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    border: solid 1px ${props => props.palette.border.divider};
    padding: 0 0 1rem 0;
    font-size: 0.75rem;
    background: ${props => props.palette.background.main};
    box-shadow: ${props => props.shadows.shadow_2};
    top: 100%;
`;

export default StyledDropdown;
