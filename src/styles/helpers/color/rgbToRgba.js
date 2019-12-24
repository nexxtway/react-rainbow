export default function rgbToRgba(color, alpha) {
    const rgx = /^rgb\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, `rgba($1, ${alpha})`);
}
