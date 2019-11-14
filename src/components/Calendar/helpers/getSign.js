export default function getSign(number) {
    if (!number || number === 0 || number === -0) return 0;
    return Math.abs(number) / number;
}
