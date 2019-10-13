export default function isValidDate(date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getHours());
}
