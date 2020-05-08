import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledScrollable = styled.div`
    margin: 0;
    padding: 0;
    height: 200px;
    box-sizing: border-box;
    overflow-y: auto;
`;

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    height: ${props => props.height}px;
    list-style: none;
    box-sizing: border-box;
`;

const StyledSearchContainer = styled.div`
    width: 100%;
    padding: 0 0.75rem;
    margin-bottom: 5px;
`;

const StyledCountryCodeItem = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
`;

export { StyledScrollable, StyledUl, StyledSearchContainer, StyledCountryCodeItem };
export { default as StyledDropdown } from './dropdown';
export { default as StyledItem } from './item';
export { default as StyledSearch } from './search';
