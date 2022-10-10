export default function isValidStringNumber(str) {
    return str === '-' || !Number.isNaN(Number(str));
}
