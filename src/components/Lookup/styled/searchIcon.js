import styled from 'styled-components';
import SearchIcon from '../icons/searchIcon';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledSearchIcon = attachThemeAttrs(styled(SearchIcon))`
    color: ${props => props.palette.text.main};
`;

export default StyledSearchIcon;
