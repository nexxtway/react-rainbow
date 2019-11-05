export default function getBrowserLocale() {
    return (
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage ||
        'en-US'
    );
}
