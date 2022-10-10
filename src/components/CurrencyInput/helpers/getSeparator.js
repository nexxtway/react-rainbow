const NUMBER = 100000.99;

export default function getSeparator(locale, type, options) {
    const formatter = new Intl.NumberFormat(locale, options);
    const parts = formatter.formatToParts(NUMBER);
    return parts.find(part => part.type === type).value;
}
