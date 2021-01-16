export default function getBrowserLocale() {
    if (typeof window !== 'undefined') {
        if (navigator.languages && navigator.languages.length > 0) return navigator.languages[0];
        if (navigator.language) return navigator.language;
    }
    return 'en-US';
}
