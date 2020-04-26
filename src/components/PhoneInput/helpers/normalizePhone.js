export default function normalizePhone(value) {
    if (value) {
        if (!isNaN(value)) {
            return value;
        }
        if (typeof value === 'object' && !isNaN(value.phone)) {
            return value.phone;
        }
    }
    return '';
}
