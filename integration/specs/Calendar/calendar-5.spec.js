const PageCalendar = require('../../../src/components/Calendar/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_LEFT_KEY,
    TAB_KEY,
    ESCAPE_KEY,
    ENTER_KEY,
} = require('../../constants');

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
        browser.keys(ESCAPE_KEY);
        browser.keys(TAB_KEY);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ENTER_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(calendar.isDaySelected(2)).toBe(true);
        expect(calendar.isDaySelected(16)).toBe(true);
    });
});
