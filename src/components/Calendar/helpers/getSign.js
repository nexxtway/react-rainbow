export default function getSign(number) {
    // eslint-disable-next-line no-compare-neg-zero
    if (!number || number === 0 || number === -0) return 0;
    return Math.abs(number) / number;
}
