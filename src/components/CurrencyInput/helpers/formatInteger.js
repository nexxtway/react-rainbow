const TYPE = ['group', 'integer', 'minusSign'];

export default function formatInteger({ integer, locale, options }) {
    const formatter = new Intl.NumberFormat(locale, {
        ...options,
        minimumIntegerDigits: undefined,
    });
    const parts = formatter.formatToParts(Number(integer));
    return parts.reduce((acc, { type, value }) => {
        if (TYPE.includes(type)) {
            return acc + value;
        }
        return acc;
    }, '');
}
