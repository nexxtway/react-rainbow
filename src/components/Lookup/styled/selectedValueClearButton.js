import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSelectedValueClearButton = attachThemeAttrs(styled.span)`
    height: 100%;
    right: 0.5rem;
    position: absolute;
    line-height: 1;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: ${props => props.palette.border.main};
`;

export default StyledSelectedValueClearButton;
