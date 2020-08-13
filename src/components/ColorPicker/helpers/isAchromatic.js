export default function isAchromatic(color) {
    const [r, g, b] = color.values;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    return max === min;
}
