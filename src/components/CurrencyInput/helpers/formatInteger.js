const TYPE = ['group', 'integer', 'minusSign'];

export default function formatInteger(value, locale, options) {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        ...options,
    });
    const parts = formatter.formatToParts(Number(value));
    return parts.reduce((acc, part) => {
        if (TYPE.includes(part.type)) {
            return acc + part.value;
        }
        return acc;
    }, '');
}
