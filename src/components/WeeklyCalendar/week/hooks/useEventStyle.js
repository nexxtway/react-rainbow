import { useMemo } from 'react';
import { getHeightOfMinutes, getHeightOfDate } from '../../helpers';

export default function useEventStyle(startDate, duration) {
    return useMemo(
        () => ({
            height: `${getHeightOfMinutes(duration)}px`,
            top: `${getHeightOfDate(startDate)}px`,
        }),
        [startDate, duration],
    );
}
