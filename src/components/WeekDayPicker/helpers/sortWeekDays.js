import getWeekDays from './getWeekDays';

const weekDays = getWeekDays();

const sortDays = (a, b) => {
    const weekDayA = weekDays.indexOf(a);
    const weekDayB = weekDays.indexOf(b);

    if (weekDayA > weekDayB) return 1;

    if (weekDayA < weekDayB) return -1;

    return 0;
};

export default function sortWeekDays(values) {
    return values.sort(sortDays);
}
