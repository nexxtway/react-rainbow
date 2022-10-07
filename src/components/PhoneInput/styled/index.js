import styled from 'styled-components';

export const StyledCountryCode = styled.div`
    flex: 0 0 auto;
    padding: 0 8px 0 8px;
    line-height: 2.2rem;
    ${props =>
        props.size === 'large' &&
        `
            line-height: 3.125rem;
        `};
    ${props =>
        props.size === 'small' &&
        `
            line-height: 1.6rem;
    `};
`;

export const StyledFlagIcon = styled.svg`
    width: 28px !important;
    height: 28px !important;
    vertical-align: middle;
    ${props =>
        props.size === 'small' &&
        `
            width: 20px !important;
            height: 20px !important;
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 40px !important;
            height: 40px !important;
        `};
`;

export { default as StyledIndicator } from './indicator';
export { default as StyledInputContainer } from './inputContainer';
export { default as StyledInput } from './input';
export { default as StyledTrigger } from './trigger';
export { default as StyledIconContainer } from './iconContainer';
export { default as StyledFlagContainer } from './flagContainer';
