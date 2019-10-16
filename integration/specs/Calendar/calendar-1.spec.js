const PageCalendar = require('../../../src/components/Calendar/pageObject');
// const {
//     ARROW_UP_KEY,
//     ARROW_DOWN_KEY,
//     ENTER_KEY,
//     ESCAPE_KEY,
// } = require('../../constants');

const CALENDAR = '.calendar-1';

const getMonth = monthIndex => {
    const indx = ((monthIndex % 12) + 12) % 12;
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return months[indx];
};

describe('Calendar', () => {
    beforeAll(() => {
        browser.url('/#!/Calendar/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CALENDAR);
        component.waitForExist();
    });
    it('should change selected month when clicked on left and right arrows', () => {
        const calendar = new PageCalendar(CALENDAR);
        const prevMonth = getMonth(new Date().getMonth() - 1);
        const currentMonth = getMonth(new Date().getMonth());
        const nextMonth = getMonth(new Date().getMonth() + 1);
        expect(calendar.getSelectedMonth()).toBe(currentMonth);
        calendar.clickPrevMonthButton();
        expect(calendar.getSelectedMonth()).toBe(prevMonth);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.getSelectedMonth()).toBe(nextMonth);
    });
});
