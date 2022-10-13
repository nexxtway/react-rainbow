const NUMBER = 100000.99;

export default function getSeparator({ locale, type, style, currency }) {
    const formatter = new Intl.NumberFormat(locale, {
        style,
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const parts = formatter.formatToParts(NUMBER);
    return parts.find(part => part.type === type).value;
}
