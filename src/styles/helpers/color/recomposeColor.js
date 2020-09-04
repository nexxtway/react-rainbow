export default function recomposeColor(color) {
    const { type, values } = color;
    if (!type || !values) {
        return '';
    }

    const valuesOutput = values.map((value, index) => {
        if (['hsl', 'hsla', 'hsv'].includes(type) && index > 0 && index < 3) {
            return `${value}%`;
        }
        return value;
    });

    return `${type}(${valuesOutput.join(', ')})`;
}
