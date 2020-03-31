import styled from 'styled-components';
import DropIcon from '../../icons/drop';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDropImg = attachThemeAttrs(styled(DropIcon))`
    pointer-events: none;
    color: ${props => props.palette.brand.main};
`;

export default StyledDropImg;
