import { decomposeColor, hexToRgba } from '../../../styles/helpers/color';
import isHexColor from '../../../styles/helpers/color/isHexColor';

const getColorValue = value => {
    if (!value) return undefined;

    const { hex, alpha } = value;
    if (!isHexColor(hex)) return undefined;

    const rgba = decomposeColor(hexToRgba(hex, alpha)).values;
    return { hex, rgba };
};

export default getColorValue;
