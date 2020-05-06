import getFormattedEventTime from './getFormattedEventTime';

const formatter = locale =>
    new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

export default function getFormattedEventTimeRange(startDate, endDate, locale) {
    const startDateParts = formatter(locale).formatToParts(startDate);
    const endDateParts = formatter(locale).formatToParts(endDate);

    const formattedStartDate = getFormattedEventTime(
        startDateParts.filter(({ type, value }, index, arr) => {
            if (type.toLowerCase() === 'dayperiod' && value === endDateParts[index].value) {
                return false;
            }
            const next = arr[index + 1];
            if (
                next &&
                next.type.toLowerCase() === 'dayperiod' &&
                next.value === endDateParts[index + 1].value
            ) {
                return false;
            }
            return true;
        }),
    );
    const formattedEndDate = getFormattedEventTime(endDateParts);

    return `${formattedStartDate} - ${formattedEndDate}`;
}
