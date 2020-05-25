import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

export const StyledCountryCode = attachThemeAttrs(styled.div)`
    flex: 0 0 auto;
    padding: 0px 8px 0px 8px;
    line-height: 2.2rem;
`;

export const StyledFlagIcon = styled.img`
    width: 28px;
    height: 100%;
`;

export { default as StyledIndicator } from './indicator';
export { default as StyledInputContainer } from './inputContainer';
export { default as StyledInput } from './input';
export { default as StyledTrigger } from './trigger';
export { default as StyledIconContainer } from './iconContainer';
export { default as StyledFlagContainer } from './flagContainer';
