import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import CheckmarkIcon from '../checkmark';

const StyledCheckmarkIcon = attachThemeAttrs(styled(CheckmarkIcon))`
    width: 0.8rem;
    height: 0.8rem;
    line-height: 1;
    margin-left: 0.75rem;
    flex-shrink: 0;
    color: ${props => props.palette.brand.main};
`;

export default StyledCheckmarkIcon;
