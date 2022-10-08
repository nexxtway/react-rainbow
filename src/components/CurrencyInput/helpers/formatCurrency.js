export default function formatCurrency(value, locale, options) {
    if (value === '-' || value === '' || value === null) {
        return value;
    }
    const number = Number(value);

    if (!Number.isNaN(number)) {
        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            ...options,
        });
        return formatter.format(number);
    }

    return '';
}
