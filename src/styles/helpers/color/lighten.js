import { decomposeColor, recomposeColor } from './index';
import clamp from './clamp';

/* eslint-disable no-param-reassign */
export default function lighten(color, coefficient = 0.8) {
    color = decomposeColor(color);

    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (255 - color.values[i]) * coefficient;
        }
    }

    return recomposeColor(color);
}
