
export default function getFormattedMonth(value) {
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
}
