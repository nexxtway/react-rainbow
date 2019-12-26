export default function recomposeColor(color) {
    const { type } = color;
    const { values } = color;
    let valuesOutput = [];

    if (!type || !values) {
        return '';
    }

    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        valuesOutput = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
        valuesOutput[0] = values[0];
        valuesOutput[1] = `${values[1]}%`;
        valuesOutput[2] = `${values[2]}%`;
    }

    return `${type}(${valuesOutput.join(', ')})`;
}
