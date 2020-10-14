export default function isValidDate(date) {
    // eslint-disable-next-line no-restricted-globals
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getHours());
}
