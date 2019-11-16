const PageCalendar = require('../../../src/components/Calendar/pageObject');
const { PAGEUP_KEY, PAGEDN_KEY } = require('../../constants');

const CALENDAR = '#calendar-3';

describe('Calendar', () => {
    beforeAll(() => {
        browser.url('/#!/Calendar/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CALENDAR);
        component.waitForExist();
    });
    it('should disable next month button when max date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.isDisabledNextMonthButton()).toBe(false);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.isDisabledNextMonthButton()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.isDisabledPrevMonthButton()).toBe(false);
        calendar.setYear('2018');
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        expect(calendar.isDisabledPrevMonthButton()).toBe(true);
    });
    it('should not change to next month when PAGEDOWN key is pressed and max date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.clickDay(1);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        browser.keys(PAGEDN_KEY);
        browser.keys(PAGEDN_KEY);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
    });
    it('should not change to previous month when PAGEUP key is pressed and min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.setYear('2018');
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickDay(25);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        browser.keys(PAGEUP_KEY);
        browser.keys(PAGEUP_KEY);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
    });
});
