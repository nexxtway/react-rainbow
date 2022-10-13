export default function formatPercent({ value, locale, options }) {
    if (value === '-' || value === '' || value === null) {
        return value;
    }
    const number = Number(value);

    if (!Number.isNaN(number)) {
        return new Intl.NumberFormat(locale, options).format(number / 100);
    }

    return '';
}
