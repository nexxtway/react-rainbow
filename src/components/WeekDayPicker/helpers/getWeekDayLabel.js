import getWeekDays from './getWeekDays';

const weekDays = getWeekDays();

export default function getWeekDayLabel(weekDay, locale) {
    if (weekDay && weekDays.includes(weekDay)) {
        try {
            const dayIndex = weekDays.findIndex(v => v === weekDay);
            const dayString = `January ${dayIndex + 2}, 2000 00:00:00`;
            const date = new Date(dayString);

            const config = { weekday: 'narrow' };
            return new Intl.DateTimeFormat(locale, config).format(date);
        } catch (error) {
            return '';
        }
    }
    return '';
}
