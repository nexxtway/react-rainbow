import isValidCurrencyValue from '../../CurrencyInput/helpers/isValidCurrencyValue';

export default function formatPercent({ value, locale, options }) {
    if (value === '-') {
        return value;
    }
    if (isValidCurrencyValue(value)) {
        return new Intl.NumberFormat(locale, options).format(Number(value) / 100);
    }

    return '';
}
