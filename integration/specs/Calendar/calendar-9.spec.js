const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-9';

describe('Calendar', () => {
    beforeAll(() => {
        browser.url('/#!/Calendar/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CALENDAR);
        component.waitForExist();
    });
    it('should set range initial date and end date button elements as selected', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(2);
        calendar.clickRightMonthDay(16);
        expect(calendar.isLeftMonthDaySelected(2)).toBe(true);
        expect(calendar.isRightMonthDaySelected(16)).toBe(true);
    });
    it('should set range initial and end dates when using keyboard navigation', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthSelectYear();
        browser.keys('Escape');
        browser.keys('Tab');
        browser.keys('ArrowUp');
        browser.keys('Enter');
        browser.keys('PageDown');
        browser.keys('ArrowDown');
        browser.keys('Enter');
        expect(calendar.isLeftMonthDaySelected(16)).toBe(true);
        expect(calendar.isRightMonthDaySelected(23)).toBe(true);
    });
});
