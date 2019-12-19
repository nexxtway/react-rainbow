/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import getTheme from '../../../src/styles/helpers/getTheme';
import { darken } from '../../../src/styles/helpers/color';

export const StyledGlobalHeader = styled.header.attrs(props => {
    const { primary: primaryBackground, secondary: secondaryBackground } = getTheme(
        props,
    ).palette.background;
    const divider = darken(secondaryBackground, 0.1);
    return {
        primaryBackground,
        divider,
    };
})`
    background-color: ${props => props.primaryBackground};
    border-bottom: 1px solid ${props => props.divider};
`;

export const StyledLogo = styled.img`
    width: 30px;
    height: 30px;
`;
