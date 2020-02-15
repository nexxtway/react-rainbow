import styled from 'styled-components';
import DownArrow from '../icons/downArrow';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDownArrow = attachThemeAttrs(styled(DownArrow))`
    color: ${props => props.palette.brand.main};
`;

export default StyledDownArrow;
