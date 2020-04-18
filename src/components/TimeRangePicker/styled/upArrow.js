import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import UpArrow from '../icons/upArrow';

const StyledUpArrow = attachThemeAttrs(styled(UpArrow))`
    color: ${props => props.palette.brand.main};
`;

export default StyledUpArrow;
