export default function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
