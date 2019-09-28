/* eslint-disable no-console */
import get12HourTime from '../../TimePicker/helpers/get12HourTime';

export default function extractTime(date) {
    const time = get12HourTime(date);
    return time || '';
}
