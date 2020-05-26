import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import MenuArrowButton from '../../../Picklist/menuArrowButton';

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
    height: ${props => props.listHeight}px;
`;

export const StyledSearchContainer = attachThemeAttrs(styled.div)`
    width: 100%;
    border-bottom: 1px solid ${props => props.palette.border.divider};
    padding: 0 1rem;
    margin-top: 5px;
`;

export const StyledCountryCodeItem = attachThemeAttrs(styled.span)`
    flex: 0 0 auto;
`;

export const StyledScrollControls = styled.div`
    position: relative;
    padding-top: 1rem;
`;

export const StyledMenuArrowButton = styled(MenuArrowButton)`
    position: absolute;
`;

export { default as StyledDropdown } from './dropdown';
export { default as StyledItem } from './item';
export { default as StyledSearch } from './search';
