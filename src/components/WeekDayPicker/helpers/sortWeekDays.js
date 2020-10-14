import getWeekDays from './getWeekDays';

const weekDays = getWeekDays();

const sortDays = (itemA, itemB) => {
    const weekDayA = weekDays.indexOf(itemA);
    const weekDayB = weekDays.indexOf(itemB);

    if (weekDayA > weekDayB) return 1;

    if (weekDayA < weekDayB) return -1;

    return 0;
};

export default function sortWeekDays(values) {
    return values.sort(sortDays);
}
