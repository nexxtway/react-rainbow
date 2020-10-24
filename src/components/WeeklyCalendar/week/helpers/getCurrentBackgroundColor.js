import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentBackgroundColor({ backgroundColor, theme }) {
    const { brand } = theme.palette;

    if (backgroundColor && isValidColor(backgroundColor)) {
        return backgroundColor;
    }
    return brand.main;
}
