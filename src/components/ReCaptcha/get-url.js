export default function getUrl(lang) {
    if (lang) {
        return `https://www.google.com/recaptcha/api.js?render=explicit&hl=${lang}`;
    }
    return 'https://www.google.com/recaptcha/api.js?render=explicit';
}
