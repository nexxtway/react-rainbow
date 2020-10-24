import { isValidColor } from '../../../../styles/helpers/color';

export default function getCurrentBackgroundColor({ backgroundColor, palette }) {
    const { brand } = palette;

    if (backgroundColor && isValidColor(backgroundColor)) {
        return backgroundColor;
    }
    return brand.main;
}
