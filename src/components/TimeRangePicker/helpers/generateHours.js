export default function generateHours(step, hour24, locale = []) {
    const dateTime = new Date(1970, 0, 1);
    const hours = [];
    const options = {
        hour12: !hour24,
        hour: '2-digit',
        minute: '2-digit',
    };
    const stepNormalized = Number.isInteger(step) && Number(step) !== 0 ? step : 60;
    while (dateTime.getDate() === 1) {
        const time = dateTime.toLocaleTimeString(locale, options);
        hours.push(time.replace(/24:/, '00:'));
        dateTime.setMinutes(dateTime.getMinutes() + stepNormalized);
    }

    return hours;
}
