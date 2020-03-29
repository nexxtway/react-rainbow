export default function getHourHeight(date) {
    const minute = date.getHours() * 60 + date.getMinutes();
    return (minute * 960) / 1440;
}
