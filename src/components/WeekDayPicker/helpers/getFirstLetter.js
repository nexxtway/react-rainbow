export default function getFirstLetter(text) {
    if (text) {
        return text.charAt(0).toUpperCase();
    }
    return '';
}
