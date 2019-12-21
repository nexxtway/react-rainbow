/* eslint-disable indent */
import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';
import { replaceAlpha } from '../../../styles/helpers/color';

const StyledOptionLabel = styled.label.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const brandDarkColor = brand.dark;
    const brandMainColor = brand.main;
    const brandMainContrastText = getContrastText(brandMainColor);
    const brandMainContrastTextInactive = replaceAlpha(brandMainContrastText, 0.3);

    return {
        brandDarkColor,
        brandMainContrastTextInactive,
    };
})`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => props.brandMainContrastTextInactive};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.brandDarkColor};
        border-radius: 4px;
    }

    @media (max-width: 340px) {
        font-size: 22px;
    }
`;

export default StyledOptionLabel;
