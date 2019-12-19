import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const hexToRgb = hex => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    // eslint-disable-next-line no-param-reassign
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // eslint-disable-next-line indent
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

const StyledOptionLabel = styled.label.attrs(props => {
    const theme = getTheme(props);
    const { getContrastText, brand } = theme.palette;
    const brandDarkColor = brand.dark;
    const brandMainColor = brand.main;
    const brandMainContrastText = getContrastText(brandMainColor);

    const rgba = alpha => {
        if (brandMainContrastText[0] !== '#' && brandMainContrastText[0] === 'r') {
            return brandMainContrastText.replace('0.87', alpha);
        }
        const color = hexToRgb(brandMainContrastText);
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    };

    return {
        brandDarkColor,
        rgba,
    };
})`
    box-sizing: border-box;
    font-size: 24px;
    font-weight: 200;
    text-transform: uppercase;
    color: ${props => props.rgba(0.3)};
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
