import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledFlagContainer = styled.div`
    flex: 0 0 auto;
`;

const StyledCountryCode = attachThemeAttrs(styled.div)`
    border-right: 1px solid ${props => props.palette.text.header};
    flex: 1 0 auto;
    text-align: center;
`;

const StyledFlagIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: -3px;
    flex: 0 0 auto;
`;

export { StyledFlagContainer, StyledCountryCode, StyledFlagIcon };
export { default as StyledIndicator } from './indicator';
export { default as StyledInput } from './input';
export { default as StyledTrigger } from './trigger';
