import { decomposeColor, recomposeColor } from './index';
import clamp from './clamp';

/* eslint-disable no-param-reassign */
export default function darken(color, coefficient = 0.1) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
        color.values[2] = Math.min(100, Math.floor(color.values[2]));
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] *= 1 - coefficient;
            color.values[i] = Math.min(255, Math.floor(color.values[i]));
        }
    }

    return recomposeColor(color);
}
