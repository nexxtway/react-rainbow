/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { ButtonMenu, Badge } from '../../../src/components/index';
import { COLOR_BRAND } from '../../../src/styles/colors';
import getTheme from '../../../src/styles/helpers/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttr';

export const StyledWrapper = attachThemeAttrs(styled.div)`
    padding: 0;
    border-radius: 0.875rem;
    background-color: ${props => props.palette.background.secondary};
    background-clip: padding-box;
    border: solid 1px ${props => props.palette.border.divider};
`;

export const StyledTopBar = attachThemeAttrs(styled.header)`
    background-color: ${props => props.palette.background.main};
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 0.875rem 0.875rem 0 0;
    border-bottom: 1px solid ${props => props.palette.border.divider};
    padding: 8px 60px 8px 12px;

    @media (max-width: 600px) {
        padding-right: 50px;
    }
`;

export const StyledContent = styled.div`
    background-color: transparent;
`;

export const StyledLeftElement = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        > svg {
            width: 40px;
            margin-top: -14px;
        }
    }
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

    @media (max-width: 600px) {
        margin: 2px 2px;
        padding: 3px;
    }
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

export const StyledTitle = attachThemeAttrs(styled.h1)`
    font-size: 14px;
    color: ${props => props.palette.text.header};
    margin-left: 4px;
    margin-right: 8px;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const StyledColorCircle = attachThemeAttrs(styled.div)`
    height: 20px;
    width: 20px;
    background-color: ${props => props.palette.brand.main};
    display: inline-block;
    border-radius: 11px;

    &:hover {
        background-color: ${props => props.palette.brand.dark};
    }
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

export const StyledIcon = styled.span`
    width: 1rem;
    height: 1rem;
    line-height: 1.5;
    margin-right: 0.75rem;
    flex-shrink: 0;
`;

export const StyledCheckIcon = attachThemeAttrs(styled(FontAwesomeIcon))`
    color: ${props => props.palette.brand.main};
`;
