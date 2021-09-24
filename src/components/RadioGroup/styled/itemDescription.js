import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { lighten } from '../../../styles/helpers/color';

const StyledItemDescription = attachThemeAttrs(styled.span)`
    color: ${props => lighten(props.palette.text.label, 0.2)};
    display: inline-block;
    margin-left: 2rem;
`;

export default StyledItemDescription;
