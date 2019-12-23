/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import getTheme from '../../../src/styles/helpers/getTheme';
import { darken } from '../../../src/styles/helpers/color';

export const StyledGlobalHeader = styled.header.attrs(props => {
    const secondaryBackground = getTheme(props).palette.background.secondary;
    const divider = darken(secondaryBackground, 0.1);
    return {
        secondaryBackground,
        divider,
    };
})`
    background-color: ${props => props.secondaryBackground};
    border-bottom: 1px solid ${props => props.divider};
`;

export const StyledLogo = styled.img`
    width: 30px;
    height: 30px;
`;
