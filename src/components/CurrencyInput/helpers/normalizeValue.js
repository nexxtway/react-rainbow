import formatInteger from './formatInteger';
import isValidCurrencyValue from './isValidCurrencyValue';

export default function normalizeValue({ value, locale, decimalSeparator, options }) {
    const stringValue = String(value);
    if (value === '-') {
        return value;
    }

    if (isValidCurrencyValue(value)) {
        const [integer, fraction] = stringValue.split('.');
        const formattedInteger = formatInteger({ integer, locale, options });

        return stringValue.indexOf('.') !== -1
            ? `${formattedInteger}${decimalSeparator}${fraction || ''}`
            : formattedInteger;
    }

    return '';
}
