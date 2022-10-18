import { isBoolean, isEmpty, isNumber } from '@rainbow-modules/validation';

export default function isValidCurrencyValue(value) {
    const number = Number(value);
    return !isBoolean(value) && !isEmpty(value) && isNumber(number) && Number.isFinite(number);
}
