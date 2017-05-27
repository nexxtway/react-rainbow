import moment from 'moment';

function assertIsDate(date) {
    if (!Object.prototype.toString.call(date) === '[Object Date]') {
        throw new TypeError('The value passed must be a Date.');
    }
}

function assertValidDateRange(date1, date2) {
    assertIsDate(date1);
    assertIsDate(date2);
    if (date1 > date2) {
        throw new RangeError('date1 must be before or equal that date2.');
    }
}

export function getFirstDayOfTheMonth (date) {
    assertIsDate(date);
    return moment(date).startOf('month').toDate();
}

export function getLastDayOfTheMonth (date) {
    assertIsDate(date);
    return moment(date).endOf('month').toDate();
}

export function getDayOfWeek(date) {
    assertIsDate(date);
    return moment(date).weekday();
}

export function getFirstDayOfCalendar(month) {
    assertIsDate(month);
    let firstDayOfMonth = getFirstDayOfTheMonth(month);
    return moment(firstDayOfMonth).subtract(getDayOfWeek(firstDayOfMonth), 'days').toDate();
}

export function getLastDayOfCalendar(month) {
    assertIsDate(month);
    let lastDayOfMonth = getLastDayOfTheMonth(month);
    return moment(lastDayOfMonth).add(6 - getDayOfWeek(lastDayOfMonth), 'days').toDate();
}

export function getDaysInBetween(date1, date2) {
    assertValidDateRange(date1, date2);
    let firstDay = moment(date1);
    let lastDay = moment(date2);
    let count = 0;
    while (firstDay.isBefore(lastDay)) {
        firstDay.add(1, 'days');
        count += 1;    
    }
    return count;
}

export function getCalendarRows(month) {
    assertIsDate(month);
    let firstDayOfCalendar = getFirstDayOfCalendar(month);
    let lastDayOfCalendar = getLastDayOfCalendar(month);
    return getDaysInBetween(firstDayOfCalendar, lastDayOfCalendar) / 7;
}

export function getCalendarDays(month) {
    assertIsDate(month);
    let firstDayOfCalendar = moment(getFirstDayOfCalendar(month));
    let lastDayOfCalendar = moment(getLastDayOfCalendar(month));
    
    let days = [];
    while (firstDayOfCalendar.isBefore(lastDayOfCalendar)) {
        days.push(firstDayOfCalendar.toDate());
        firstDayOfCalendar.add(1, 'days');
    }
    return days;
}

