import getSign from './getSign';

export default function compareDates(value1, value2) {
    const date1 = new Date(value1).setHours(0, 0, 0, 0);
    const date2 = new Date(value2).setHours(0, 0, 0, 0);
    return getSign(date1 - date2);
}
