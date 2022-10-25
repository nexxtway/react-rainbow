import { isValidNumberValue } from '../../CurrencyInput/helpers';

export default function formatPercent({ value, locale, options }) {
    if (value === '-') {
        return value;
    }
    if (isValidNumberValue(value)) {
        return new Intl.NumberFormat(locale, options).format(Number(value) / 100);
    }

    return '';
}
