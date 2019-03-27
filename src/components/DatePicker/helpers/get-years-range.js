
export default function getYearsRange({ minDate, maxDate }) {
    const todayYear = new Date().getFullYear();
    let from;
    let to;
    if (minDate) {
        from = new Date(minDate).getFullYear();
    } else {
        from = new Date(todayYear - 100, 0, 1).getFullYear();
    }
    if (maxDate && maxDate > from) {
        to = new Date(maxDate).getFullYear();
    } else {
        to = new Date(todayYear + 100, 0, 1).getFullYear();
    }
    const range = [];
    for (let i = from; i <= to; i += 1) {
        range.push({
            value: i,
            label: i,
        });
    }
    return range;
}
