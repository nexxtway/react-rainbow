import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentColor({ color, backgroundColor, palette }) {
    const { getContrastText, brand } = palette;

    if (color && isValidColor(color)) {
        return color;
    }
    if (backgroundColor && isValidColor(backgroundColor)) {
        return getContrastText(backgroundColor);
    }
    return getContrastText(brand.main);
}
