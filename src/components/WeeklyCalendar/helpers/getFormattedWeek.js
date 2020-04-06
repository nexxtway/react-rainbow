export default function getFormattedWeek(firstDay, locale) {
    try {
        const lastDay = new Date(firstDay);
        lastDay.setDate(firstDay.getDate() + 6);
        const year = lastDay.getFullYear();
        const first =
            firstDay.getFullYear() === lastDay.getFullYear()
                ? `${new Intl.DateTimeFormat(locale, {
                      month: 'short',
                  }).format(firstDay)} ${firstDay.getDate()}`
                : `${new Intl.DateTimeFormat(locale, {
                      month: 'short',
                  }).format(firstDay)} ${firstDay.getDate()}, ${new Intl.DateTimeFormat(locale, {
                      year: 'numeric',
                  }).format(firstDay)}`;

        const last =
            firstDay.getMonth() === lastDay.getMonth()
                ? lastDay.getDate()
                : `${new Intl.DateTimeFormat(locale, { month: 'short' }).format(
                      lastDay,
                  )} ${lastDay.getDate()}`;

        return `${first} - ${last}, ${year}`;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
