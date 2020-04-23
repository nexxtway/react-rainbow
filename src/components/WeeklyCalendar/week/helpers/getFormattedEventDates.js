const formatter = locale =>
    new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

const partsToString = parts => {
    return parts.map(({ value }) => value).reduce((string, part) => string + part);
};

export default function getFormattedEventDates(startDate, endDate, locale) {
    const startDateParts = formatter(locale).formatToParts(startDate);
    const endDateParts = formatter(locale).formatToParts(endDate);

    const formattedStartDate = partsToString(
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
    const formattedEndDate = partsToString(endDateParts);

    return `${formattedStartDate} - ${formattedEndDate}`;
}
