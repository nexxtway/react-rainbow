import isValidNumberValue from './isValidNumberValue';

export default function formatCurrency({ value, locale, options }) {
    if (value === '-') {
        return value;
    }

    if (isValidNumberValue(value)) {
        return new Intl.NumberFormat(locale, options).format(Number(value));
    }

    return '';
}
