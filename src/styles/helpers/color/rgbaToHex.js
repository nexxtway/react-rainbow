import { decomposeColor } from '.';

function pad2(c) {
    return c.length === 1 ? `0${c}` : `${c}`;
}

export default function rgbaToHex(color) {
    const rgbaColor = decomposeColor(color);

    if (rgbaColor.type !== 'rgba') {
        return '';
    }

    const hex = [
        pad2(Math.round(rgbaColor.values[0]).toString(16)),
        pad2(Math.round(rgbaColor.values[1]).toString(16)),
        pad2(Math.round(rgbaColor.values[2]).toString(16)),
    ];

    return hex.join('');
}
