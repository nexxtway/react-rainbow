import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledCheckmarkIcon = attachThemeAttrs(styled.svg)`
    width: 0.8rem;
    height: 0.8rem;
    line-height: 1;
    margin-left: 0.75rem;
    flex-shrink: 0;
    fill: ${props => props.palette.brand.main};
`;

export default StyledCheckmarkIcon;
