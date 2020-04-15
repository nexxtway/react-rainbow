import { useMemo } from 'react';
import { getEventsOfDay } from '../helpers';

export default function useEventsOfDay(events, day) {
    return useMemo(() => getEventsOfDay(events, day), [day, events]);
}
