function isDisabled(params) {
    const { minDate, maxDate, currentMonth, year } = params;
    if (maxDate && maxDate.getFullYear() === year && maxDate.getMonth() < currentMonth) {
        return true;
    }
    if (minDate && minDate.getFullYear() === year && minDate.getMonth() > currentMonth) {
        return true;
    }
    return false;
}

export default function getYearsRange({ minDate, maxDate, currentMonth }) {
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
            disabled: isDisabled({
                minDate,
                maxDate,
                currentMonth,
                year: i,
            }),
        });
    }
    return range;
}
