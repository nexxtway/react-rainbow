import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentColor({ color, backgroundColor, theme }) {
    const { getContrastText, brand } = theme.palette;

    if (color && isValidColor(color)) {
        return color;
    }
    if (backgroundColor && isValidColor(backgroundColor)) {
        return getContrastText(backgroundColor);
    }
    return getContrastText(brand.main);
}
