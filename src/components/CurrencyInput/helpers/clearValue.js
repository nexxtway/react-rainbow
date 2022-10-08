/* eslint-disable no-useless-escape */
export default function clearValue(value, decimalSeparator) {
    if (decimalSeparator === '.') {
        return value.replace(/[^\d\.-]/g, '');
    }
    return value.replace(/[^\d\,-]/g, '').replaceAll(',', '.');
}
