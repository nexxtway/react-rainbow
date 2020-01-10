import isValidColor from './isValidColor';
import decomposeColor from './decomposeColor';
import hslToRgb from './hslToRgb';

/* http://www.w3.org/TR/AERT#color-contrast */

/* eslint-disable no-param-reassign */
export default function getBrightness(color) {
    if (isValidColor(color)) {
        color = decomposeColor(color);
        if (color.type.indexOf('hsl') !== -1) {
            color = hslToRgb(color);
        }
        return (color.values[0] * 299 + color.values[1] * 587 + color.values[2] * 114) / 1000;
    }
    return undefined;
}
