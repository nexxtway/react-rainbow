import { useMemo } from 'react';
import { getHeightOfMinutes, getHeightOfDate } from '../../helpers';
import { getDiffMinutes } from '../helpers';

export default function useEventStyle(startDate, endDate) {
    return useMemo(() => {
        const duration = getDiffMinutes(startDate, endDate);
        return {
            height: `${getHeightOfMinutes(duration)}px`,
            top: `${getHeightOfDate(startDate)}px`,
        };
    }, [endDate, startDate]);
}
