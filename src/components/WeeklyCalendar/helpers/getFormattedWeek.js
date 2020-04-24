import getLastDayOfWeek from './getLastDayOfWeek';

const formattedMonth = (day, locale) =>
    new Intl.DateTimeFormat(locale, {
        month: 'short',
    }).format(day);

export default function getFormattedWeek(firstDay, locale) {
    const lastDay = getLastDayOfWeek(firstDay);

    let formattedWeek = `${formattedMonth(firstDay, locale)} ${firstDay.getDate()}`;

    if (firstDay.getFullYear() !== lastDay.getFullYear()) {
        formattedWeek = formattedWeek.concat(`, ${firstDay.getFullYear()}`);
    }
    formattedWeek = formattedWeek.concat(` - `);

    if (firstDay.getMonth() !== lastDay.getMonth()) {
        formattedWeek = formattedWeek.concat(`${formattedMonth(lastDay, locale)} `);
    }
    formattedWeek = formattedWeek.concat(`${lastDay.getDate()}, ${lastDay.getFullYear()}`);

    return formattedWeek;
}
