import { useMemo } from 'react';

export default function useOptions(props) {
    const {
        currency,
        currencyDisplay,
        currencySign,
        minimumIntegerDigits,
        minimumFractionDigits,
        maximumFractionDigits,
        minimumSignificantDigits,
        maximumSignificantDigits,
    } = props;
    return useMemo(
        () => ({
            currency,
            currencyDisplay,
            currencySign,
            minimumIntegerDigits,
            minimumFractionDigits,
            maximumFractionDigits,
            minimumSignificantDigits,
            maximumSignificantDigits,
        }),
        [
            currency,
            currencyDisplay,
            currencySign,
            maximumFractionDigits,
            maximumSignificantDigits,
            minimumFractionDigits,
            minimumIntegerDigits,
            minimumSignificantDigits,
        ],
    );
}
