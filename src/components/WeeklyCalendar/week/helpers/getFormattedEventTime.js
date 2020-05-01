export default function getFormattedEventTime(parts) {
    return parts
        .filter(({ type, value }, index, arr) => {
            if (type === 'minute' && value === '00') {
                return false;
            }
            const next = arr[index + 1];
            if (next && next.type === 'minute' && next.value === '00') {
                return false;
            }
            return true;
        })
        .map(({ value }) => value)
        .reduce((string, part) => string + part);
}
