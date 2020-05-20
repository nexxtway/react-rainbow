import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

export const StyledScrollable = styled.div`
    margin: 0;
    padding: 0;
    max-height: 225px;
    box-sizing: border-box;
    overflow-y: auto;
`;

export const StyledUl = styled.ul`
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
`;

export const StyledSearchContainer = attachThemeAttrs(styled.div)`
    width: 100%;
    padding: 0 0.75rem 5px 0.75rem;
    border-bottom: 1px solid ${props => props.palette.border.divider};
`;

export const StyledCountryCodeItem = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
`;

export { default as StyledDropdown } from './dropdown';
export { default as StyledItem } from './item';
export { default as StyledSearch } from './search';
