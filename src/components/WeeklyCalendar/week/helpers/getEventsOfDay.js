import { addDays } from '../../../Calendar/helpers';

export default function getEventsOfDay(events, day) {
    const first = new Date(day);
    const last = addDays(first, 1);
    return events.filter(event => event.startDate >= first && event.endDate <= last);
}
