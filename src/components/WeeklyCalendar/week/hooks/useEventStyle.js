import { useMemo } from 'react';
import { getHeightOfMinutes, getHeightOfDate } from '../../helpers';

export default function useEventStyle(duration, startDate) {
    return useMemo(() => {
        return {
            height: `${getHeightOfMinutes(duration)}px`,
            top: `${getHeightOfDate(startDate)}px`,
        };
    }, [duration, startDate]);
}
