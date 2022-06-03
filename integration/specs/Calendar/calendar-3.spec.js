const PageCalendar = require('../../../src/components/Calendar/pageObject');

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
        expect(calendar.isNextMonthButtonDisabled()).toBe(false);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.isNextMonthButtonDisabled()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.isPrevMonthButtonDisabled()).toBe(false);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.setYear('2018');
        expect(calendar.isPrevMonthButtonDisabled()).toBe(true);
    });
    it('should not change to next month when PAGEDOWN key is pressed and max date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.clickDay(1);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        browser.keys('PageDown');
        browser.keys('PageDown');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
    });
    it('should not change to previous month when PAGEUP key is pressed and min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.setYear('2018');
        calendar.clickDay(25);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        browser.keys('PageUp');
        browser.keys('PageUp');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
    });
    it('should not change to next year when ALT + PAGEDOWN keys are pressed and max date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.clickDay(1);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        browser.keys(['Alt', 'PageDown']);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
    });
    it('should not change to the previous year when ALT + PAGEUP keys are pressed and min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.setYear('2018');
        calendar.clickDay(25);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        browser.keys(['Alt', 'PageUp']);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
    });
    it('should not move focus when press RIGHT OR DOWN arrow keys and max date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.clickDay(4);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
        browser.keys('ArrowRight');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
        browser.keys('ArrowDown');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(4)).toBe(true);
    });
    it('should not move focus when press LEFT OR UP arrow keys and min date is reached', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.setYear('2018');
        calendar.clickDay(4);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        expect(calendar.isDayFocused(4)).toBe(true);
        browser.keys('ArrowLeft');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        expect(calendar.isDayFocused(4)).toBe(true);
        browser.keys('ArrowUp');
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2018');
        expect(calendar.isDayFocused(4)).toBe(true);
    });
});
