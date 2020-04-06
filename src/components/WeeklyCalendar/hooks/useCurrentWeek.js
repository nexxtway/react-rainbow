import { useMemo } from 'react';
import { normalizeDate } from '../../Calendar/helpers';
import { getFirstDayOfWeek } from '../helpers';

export default function useCurrentWeek(currentWeek) {
    return useMemo(() => getFirstDayOfWeek(normalizeDate(currentWeek)), [currentWeek]);
}
