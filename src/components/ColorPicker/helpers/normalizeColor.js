import {
    isValidColor,
    recomposeColor,
    hexToRgba,
    decomposeColor,
    hsvToRgb,
    rgbaToHex,
    rgbToHsv,
    rgbToRgba,
    isHsvColor,
} from '../../../styles/helpers/color';

function getRgba(value, isValidHex) {
    if (isValidHex) {
        return hexToRgba(value.hex);
    }
    return rgbToRgba(hsvToRgb(recomposeColor({ type: 'hsv', values: value.hsv })), 1);
}

export const defaultColor = {
    hex: '#000000',
    rgba: [0, 0, 0, 1],
    hsv: [0, 0, 0],
};

export default function normalizeColor(value) {
    const { hex, rgba, hsv } = value;
    const isValidHex = isValidColor(hex);
    const isValidRgba = isValidColor(recomposeColor({ type: 'rgba', values: rgba }));
    const isValidHsv = isHsvColor(recomposeColor({ type: 'hsv', values: hsv }));

    if (!isValidHex && !isValidRgba && !isValidHsv) {
        return defaultColor;
    }

    const rgbaColor = isValidRgba
        ? recomposeColor({ type: 'rgba', values: rgba })
        : getRgba(value, isValidHex);
    const hexColor = isValidHex ? hex : `#${rgbaToHex(rgbaColor)}`;
    const hsvColor = isValidHsv ? hsv : decomposeColor(rgbToHsv(rgbaColor)).values;

    return {
        hex: hexColor,
        rgba: decomposeColor(rgbaColor).values,
        hsv: hsvColor,
    };
}
