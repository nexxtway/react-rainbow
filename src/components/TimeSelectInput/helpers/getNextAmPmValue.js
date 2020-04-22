export default function getNextAmPmValue(value) {
    if (value === 'AM' || value === undefined) {
        return 'PM';
    }
    return 'AM';
}
