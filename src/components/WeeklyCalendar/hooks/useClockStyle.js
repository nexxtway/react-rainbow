import { useMemo } from 'react';
import { getHeightOfDate } from '../helpers';

export default function useClockStyle(clock) {
    return useMemo(() => ({ top: `${getHeightOfDate(clock) - 8}px` }), [clock]);
}
