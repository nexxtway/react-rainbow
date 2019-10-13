export default function isMenuOpen(options, isFocused) {
    return isFocused && Array.isArray(options) && !!options.length;
}
