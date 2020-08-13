export default function getAlpha(rgbaColor) {
    return Math.round(rgbaColor.values[3] * 100);
}
