export default function replaceAlpha(color, alpha) {
    const rgx = /^rgba\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, `rgba($1, ${alpha})`);
}
