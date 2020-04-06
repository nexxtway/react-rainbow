export default function isToday(day) {
    try {
        const today = new Date();
        return !!(
            day &&
            today &&
            day.getDate() === today.getDate() &&
            day.getMonth() === today.getMonth() &&
            day.getYear() === today.getYear()
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return false;
    }
}
