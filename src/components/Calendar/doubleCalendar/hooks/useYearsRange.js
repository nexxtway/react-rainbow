import { useMemo } from 'react';
import { getYearsRange } from '../../helpers';

export default function useYearsRange(minDate, maxDate, currentMonth) {
    return useMemo(
        () =>
            getYearsRange({
                minDate,
                maxDate,
                currentMonth: currentMonth.getMonth(),
            }),
        [minDate, maxDate, currentMonth],
    );
}
