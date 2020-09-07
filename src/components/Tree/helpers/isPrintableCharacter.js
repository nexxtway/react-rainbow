export default function isPrintableCharacter(str) {
    if (typeof str !== 'string') return false;
    return str.length === 1 && /\S/.test(str);
}
