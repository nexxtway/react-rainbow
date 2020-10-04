export default function isPercentage(value) {
    return typeof value === 'string' && value.indexOf('%') !== -1;
}
