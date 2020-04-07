import { useMemo } from 'react';
import { getYearsRange } from '../../Calendar/helpers';

export default function useYearsChange(minDate, maxDate, month) {
    return useMemo(
        () =>
            getYearsRange({
                minDate,
                maxDate,
                currentMonth: month.getMonth(),
            }),
        [minDate, maxDate, month],
    );
}
