import formatInteger from './formatInteger';

export default function normalizeValue({ value, locale, decimalSeparator, options }) {
    const stringValue = String(value);
    if (value === '-' || value === '' || value === null) {
        return value;
    }

    if (!Number.isNaN(Number(value))) {
        const [integer, fraction] = stringValue.split('.');
        const formattedInteger = formatInteger({ integer, locale, options });

        return stringValue.indexOf('.') !== -1
            ? `${formattedInteger}${decimalSeparator}${fraction || ''}`
            : formattedInteger;
    }

    return '';
}
