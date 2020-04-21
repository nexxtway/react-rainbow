import { useMemo } from 'react';
import { getCurrentWeek } from '../helpers';

export default function useCurrentWeek(currentWeek) {
    return useMemo(() => getCurrentWeek(currentWeek), [currentWeek]);
}
