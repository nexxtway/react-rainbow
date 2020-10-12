import decomposeColor from './decomposeColor';
import rgbToRgba from './rgbToRgba';
import hslToRgb from './hslToRgb';
import recomposeColor from './recomposeColor';

export default function colorToRgba(color) {
    if (typeof color !== 'string') return '';

    try {
        const { type, values } = decomposeColor(color);

        if (!['rgb', 'rgba', 'hsl', 'hsla'].includes(type)) return '';

        if (type === 'rgb') return rgbToRgba(color);
        if (type === 'hsl') return rgbToRgba(hslToRgb(color));
        if (type === 'hsla') return hslToRgb(color);

        return recomposeColor({ type, values });
    } catch (error) {
        return '';
    }
}
