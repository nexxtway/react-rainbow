/* eslint-disable id-length */
import decomposeColor from './decomposeColor';
import bound01 from './bound01';

export default function hsvToRgb(color) {
    const { type, values } = decomposeColor(color);
    if (!type || !values || type !== 'hsv') {
        return '';
    }

    const h = bound01(values[0], 360) * 6;
    const s = bound01(values[1], 100);
    const v = bound01(values[2], 100);

    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;

    const r = [v, q, p, p, t, v][mod];
    const g = [t, v, v, q, p, p][mod];
    const b = [p, p, t, v, v, q][mod];

    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}
