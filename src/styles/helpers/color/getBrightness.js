import decomposeColor from './decomposeColor';
import hslToRgb from './hslToRgb';

export default function getBrightness(color) {
    let rgb = decomposeColor(color);
    if (rgb.type.indexOf('hsl') !== -1) {
        rgb = hslToRgb(rgb);
    }
    return (rgb.values[0] * 299 + rgb.values[1] * 587 + rgb.values[2] * 114) / 1000;
}
