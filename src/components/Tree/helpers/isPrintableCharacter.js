export default function isPrintableCharacter(str) {
    return str.length === 1 && str.match(/\S/);
}
