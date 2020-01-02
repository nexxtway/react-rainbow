export default function rgbaToRgb(color) {
    if (color.substring(0, 4) !== 'rgba') {
        return '';
    }
    const rgx = /^rgba\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, 'rgb($1)');
}
