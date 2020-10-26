import decomposeColor from './decomposeColor';

export default function isHsvColor(color) {
    if (typeof color === 'string' && color !== '') {
        const { type, values } = decomposeColor(color);
        if (type === 'hsv' && Array.isArray(values) && values.length === 3) {
            return (
                values.filter(
                    (value, index) =>
                        (index === 0 && value >= 0 && value <= 360) || (value >= 0 && value <= 100),
                ).length === 3
            );
        }
    }
    return false;
}
