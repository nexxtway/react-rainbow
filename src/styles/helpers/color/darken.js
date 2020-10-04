import decomposeColor from './decomposeColor';
import recomposeColor from './recomposeColor';
import clamp from './clamp';

/* eslint-disable no-param-reassign */
export default function darken(color, coefficient = 0.1) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
        color.values[2] = Math.min(100, Math.floor(color.values[2]));
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let index = 0; index < 3; index += 1) {
            color.values[index] *= 1 - coefficient;
            color.values[index] = Math.min(255, Math.floor(color.values[index]));
        }
    }

    return recomposeColor(color);
}
