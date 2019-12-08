/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Badge from '../../../components/Badge';
import { ButtonMenu } from '../../../src/components/index';
import { COLOR_WHITE, COLOR_BRAND } from '../../../src/styles/colors';

export const StyledTopBar = styled.header`
    background-color: ${COLOR_WHITE};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.875rem 0.875rem 0 0;
    height: 48px;
    border-bottom: 1px solid #edeef3;
    padding: 0 60px 0 12px;
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
        width: 32px;
        height: 32px;
    }
`;

export const StyledLogo = styled.img`
    width: 16px;
    height: 16px;
`;

export const StyledTitle = styled.h1`
    font-size: 14px;
    color: ${COLOR_BRAND};
    margin-left: 2px;
    text-transform: italic;
    font-style: italic;
`;

export const StyledColorBox = styled.div`
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
