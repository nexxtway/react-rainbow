/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { ButtonMenu, Badge } from '../../../src/components/index';
import { COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_3 } from '../../../src/styles/colors';
import getTheme from '../../../src/styles/helpers/getTheme';

export const StyledWrapper = styled.div.attrs(props => {
    const palette = getTheme(props).palette;
    const secondaryBackground = palette.background.secondary;
    const divider = palette.divider;
    return {
        secondaryBackground,
        divider,
    };
})`
    padding: 0;
    border-radius: 0.875rem;
    background-color: ${props => props.secondaryBackground};
    background-clip: padding-box;
    border: solid 1px ${props => props.divider};
`;

export const StyledTopBar = styled.header.attrs(props => {
    const palette = getTheme(props).palette;
    const primaryBackground = palette.background.primary;
    const divider = palette.divider;
    return {
        primaryBackground,
        divider,
    };
})`
    background-color: ${props => props.primaryBackground};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.875rem 0.875rem 0 0;
    height: 48px;
    border-bottom: 1px solid ${props => props.divider};
    padding: 0 60px 0 12px;
`;

export const StyledContent = styled.div.attrs(props => {
    const primaryBackground = getTheme(props).palette.background.primary;
    return {
        primaryBackground,
    };
})`
    background-color: transparent;
`;

export const StyledLeftElement = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledInfoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 72px;
`;

export const StyledContentText = styled.h2`
    font-size: 16px;
    text-align: center;
    color: #576574;
    letter-spacing: 0.5;
`;

export const StyledBadge = styled(Badge)`
    margin: 2px 8px;
`;

export const StyledPickerTheme = styled(ButtonMenu)`
    > button {
        background-color: transparent;
        width: 32px;
        height: 32px;

        &:hover {
            background-color: transparent;
        }
    }
`;

export const StyledLogo = styled.img`
    width: 16px;
    height: 16px;
`;

export const StyledTitle = styled.h1`
    font-size: 14px;
    color: ${COLOR_GRAY_3};
    margin-left: 4px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledColorCircle = styled.div.attrs(props => {
    const { main: brandMainColor, dark: brandDarkColor } = getTheme(props).palette.brand;
    return {
        brandMainColor,
        brandDarkColor,
    };
})`
    height: 20px;
    width: 20px;
    background-color: ${props => props.brandMainColor};
    display: inline-block;
    border-radius: 11px;
    border: 1px solid ${props => props.brandDarkColor};
`;

export const StyledColorBox = styled.div.attrs(props => {})`
    height: 18px;
    width: 18px;
    background-color: ${COLOR_BRAND};
    display: inline-block;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -4px;

    ${props =>
        props.rainbowTheme &&
        props.rainbowTheme.palette &&
        `
        background-color: ${props.rainbowTheme.palette.brand};
    `}
`;
