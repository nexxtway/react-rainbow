import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_3 } from '../../../styles/borderRadius';

const StyledFaux = attachThemeAttrs(styled.span)`
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    border: 1px solid ${props => props.palette.border.divider};
    border-radius: ${BORDER_RADIUS_3};
    background: ${props => props.palette.background.main};
    margin-right: $margin-small;
    transition: border 0.1s linear, background-color 0.1s linear;
`;

export default StyledFaux;
