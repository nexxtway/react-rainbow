export default function getFormattedWeek(firstDay, locale) {
    try {
        const lastDay = new Date(firstDay);
        lastDay.setDate(firstDay.getDate() + 6);

        let formattedWeek = `${new Intl.DateTimeFormat(locale, {
            month: 'short',
        }).format(firstDay)} ${firstDay.getDate()}`;

        if (firstDay.getFullYear() !== lastDay.getFullYear()) {
            formattedWeek = formattedWeek.concat(`, ${firstDay.getFullYear()}`);
        }
        formattedWeek = formattedWeek.concat(` - `);

        if (firstDay.getMonth() !== lastDay.getMonth()) {
            formattedWeek = formattedWeek.concat(
                `${new Intl.DateTimeFormat(locale, { month: 'short' }).format(lastDay)} `,
            );
        }
        formattedWeek = formattedWeek.concat(`${lastDay.getDate()}, ${lastDay.getFullYear()}`);

        return formattedWeek;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return '';
    }
}
