const PageCalendar = require('../../../src/components/Calendar/pageObject');
const {
    ARROW_UP_KEY,
    ARROW_DOWN_KEY,
    PAGEDOWN_KEY,
    TAB_KEY,
    ESCAPE_KEY,
    ENTER_KEY,
} = require('../../constants');

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
        browser.keys(ESCAPE_KEY);
        browser.keys(TAB_KEY);
        browser.keys(ARROW_UP_KEY);
        browser.keys(ENTER_KEY);
        browser.keys(PAGEDOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(calendar.isLeftMonthDaySelected(16)).toBe(true);
        expect(calendar.isRightMonthDaySelected(23)).toBe(true);
    });
});
