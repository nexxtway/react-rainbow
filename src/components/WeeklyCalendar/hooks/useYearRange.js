import { useMemo } from 'react';
import { getYearsRange } from '../../Calendar/helpers';

export default function useYearRange(minDate, maxDate, date) {
    return useMemo(
        () =>
            getYearsRange({
                minDate,
                maxDate,
                currentMonth: date.getMonth(),
            }),
        [minDate, maxDate, date],
    );
}
