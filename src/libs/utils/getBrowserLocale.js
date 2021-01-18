import isServer from './isServer';

export default function getBrowserLocale() {
    if (isServer) return 'en-US';
    if (navigator.languages && navigator.languages.length > 0) return navigator.languages[0];
    if (navigator.language) return navigator.language;
    return 'en-US';
}
