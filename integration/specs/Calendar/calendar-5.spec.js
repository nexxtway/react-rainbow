const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-5';

describe('Calendar', () => {
    beforeAll(() => {
        browser.url('/#!/Calendar/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CALENDAR);
        component.waitForExist();
    });
    it('should set range initial date and end date button elements as selected', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(2);
        calendar.clickDay(16);
        expect(calendar.isDaySelected(2)).toBe(true);
        expect(calendar.isDaySelected(16)).toBe(true);
    });
    it('should set range initial and end dates when using keyboard navigation', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickSelectYear();
        browser.keys('Escape');
        browser.keys('Tab');
        browser.keys('ArrowLeft');
        browser.keys('Enter');
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        browser.keys('Enter');
        expect(calendar.isDaySelected(2)).toBe(true);
        expect(calendar.isDaySelected(16)).toBe(true);
    });
});
