export default function zeroFill(value, length) {
    if ([undefined, null, ''].includes(value)) return '';
    const string = `${value}`;
    const size = length - string.length;
    if (size > 0) {
        const zerofill = new Array(size + 1).join('0').substr(0, size);
        return `${zerofill}${string}`;
    }
    return `${string}`;
}
