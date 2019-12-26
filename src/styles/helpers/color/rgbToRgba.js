export default function rgbToRgba(color, alpha = 0.5) {
    if (color.substring(0, 3) !== 'rgb' || color.substring(0, 4) === 'rgba') {
        return '';
    }
    const rgx = /^rgb\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, `rgba($1, ${alpha})`);
}
