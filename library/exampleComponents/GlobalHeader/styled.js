/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttrs';

export const StyledGlobalHeader = attachThemeAttrs(styled.header)`
    background-color: ${props => props.palette.background.main};
    border-bottom: 1px solid ${props => props.palette.border.divider};
`;

export const StyledLogo = styled.img`
    width: 30px;
    height: 30px;
`;
