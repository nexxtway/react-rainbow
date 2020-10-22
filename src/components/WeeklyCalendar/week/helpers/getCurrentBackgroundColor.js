import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentBackgroundColor(color1, theme) {
    const { brand } = theme.palette;

    if (color1 && isValidColor(color1)) {
        return color1;
    }
    return brand.main;
}
