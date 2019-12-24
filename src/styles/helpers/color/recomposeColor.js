export default function recomposeColor(color) {
    const { type } = color;
    let { values } = color;

    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    }

    return `${type}(${values.join(', ')})`;
}
