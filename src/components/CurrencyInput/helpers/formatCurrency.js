import isValidCurrencyValue from './isValidCurrencyValue';

export default function formatCurrency({ value, locale, options }) {
    if (value === '-') {
        return value;
    }

    if (isValidCurrencyValue(value)) {
        return new Intl.NumberFormat(locale, options).format(Number(value));
    }

    return '';
}
