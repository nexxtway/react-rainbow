export default function validateColor(color) {
    const EMPTY_STRING = '';
    if (!color) return EMPTY_STRING;
    const s = new Option().style;
    s.color = color;
    const removeSpaces = colorStr => colorStr.replace(/\s+/g, EMPTY_STRING);
    const isValidColor = removeSpaces(s.color) === removeSpaces(color);
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(color);
    return isValidColor || isValidHex ? color : EMPTY_STRING;
}
