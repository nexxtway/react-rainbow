import { useMemo } from 'react';

export default function useOptions(props) {
    const {
        minimumIntegerDigits,
        minimumFractionDigits,
        maximumFractionDigits,
        minimumSignificantDigits,
        maximumSignificantDigits,
    } = props;
    return useMemo(
        () => ({
            style: 'percent',
            minimumIntegerDigits,
            minimumFractionDigits,
            maximumFractionDigits,
            minimumSignificantDigits,
            maximumSignificantDigits,
        }),
        [
            maximumFractionDigits,
            maximumSignificantDigits,
            minimumFractionDigits,
            minimumIntegerDigits,
            minimumSignificantDigits,
        ],
    );
}
