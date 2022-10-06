import formatInteger from './formatInteger';

export default function normalizeValue(value, locale, decimalSeparator, options) {
    const stringValue = String(value);
    if (value === '-' || value === '' || value === null) {
        return value;
    }

    if (!Number.isNaN(Number(value))) {
        const [stringInteger, stringDecimal] = stringValue.split('.');
        const formattedInteger = formatInteger(stringInteger, locale, options);

        return stringValue.indexOf('.') !== -1
            ? `${formattedInteger}${decimalSeparator}${stringDecimal || ''}`
            : formattedInteger;
    }

    return '';
}
