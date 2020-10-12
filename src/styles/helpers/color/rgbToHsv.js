/* eslint-disable default-case, id-length */
import bound01 from './bound01';
import decomposeColor from './decomposeColor';

export default function rgbToHsv(color) {
    const { type, values } = decomposeColor(color);
    if (!type || !values || type.indexOf('rgb') === -1) {
        return '';
    }

    const r = bound01(values[0], 255);
    const g = bound01(values[1], 255);
    const b = bound01(values[2], 255);

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const v = max;
    const d = max - min;
    const s = max === 0 ? 0 : d / max;

    let h;
    if (max === min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return `hsv(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(v * 100)}%)`;
}
