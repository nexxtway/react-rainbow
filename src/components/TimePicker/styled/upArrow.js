import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';
import UpArrow from '../icons/upArrow';

const StyledUpArrow = attachThemeAttrs(styled(UpArrow))`
    color: ${props => props.palette.brand.main};
`;

export default StyledUpArrow;
