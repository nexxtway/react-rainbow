import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentColor(color1, color2, theme) {
    const { getContrastText, brand } = theme.palette;

    if (color1 && isValidColor(color1)) {
        return color1;
    }
    if (color2 && isValidColor(color2)) {
        return getContrastText(color2);
    }
    return getContrastText(brand.main);
}
