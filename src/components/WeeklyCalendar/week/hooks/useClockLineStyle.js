import { useMemo } from 'react';
import { getHeightOfDate } from '../../helpers';

export default function useClockLineStyle(clock) {
    return useMemo(() => ({ top: `${getHeightOfDate(clock)}px` }), [clock]);
}
