import formatInteger from './formatInteger';
import isValidNumberValue from './isValidNumberValue';

export default function normalizeValue({ value, locale, decimalSeparator, options }) {
    const stringValue = String(value);
    if (value === '-') {
        return value;
    }

    if (isValidNumberValue(value)) {
        const [integer, fraction] = stringValue.split('.');
        const formattedInteger = formatInteger({ integer, locale, options });

        return stringValue.indexOf('.') !== -1
            ? `${formattedInteger}${decimalSeparator}${fraction || ''}`
            : formattedInteger;
    }

    return '';
}
