import { decomposeColor } from './index';
import hslToRgb from './hslToRgb';

/* eslint-disable no-param-reassign */
export default function getLuminance(color) {
    color = decomposeColor(color);

    let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
