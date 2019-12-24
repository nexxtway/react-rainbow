export default function rgbaToRgb(color) {
    const rgx = /^rgba\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, 'rgb($1)');
}
