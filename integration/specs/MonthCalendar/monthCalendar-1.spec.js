const PageMonthCalendar = require('../../../src/components/MonthCalendar/pageObject');

const MONTH_CALENDAR = '#month-calendar-1';

describe('MonthCalendar', () => {
    beforeAll(() => {
        browser.url('/#!/MonthCalendar/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(MONTH_CALENDAR);
        component.waitForExist();
    });
    it('should change selected month when clicked on left and right arrows', () => {
        const Monthcalendar = new PageMonthCalendar(MONTH_CALENDAR);
        expect(Monthcalendar.getSelectedMonth()).toBe('December');
        Monthcalendar.clickPrevMonthButton();
        expect(Monthcalendar.getSelectedMonth()).toBe('November');
        Monthcalendar.clickNextMonthButton();
        Monthcalendar.clickNextMonthButton();
        expect(Monthcalendar.getSelectedMonth()).toBe('January');
    });
    it('should change year when month is December and click next month button', () => {
        const Monthcalendar = new PageMonthCalendar(MONTH_CALENDAR);
        expect(Monthcalendar.getSelectedMonth()).toBe('December');
        expect(Monthcalendar.getSelectedYear()).toBe('2019');
        Monthcalendar.clickNextMonthButton();
        expect(Monthcalendar.getSelectedMonth()).toBe('January');
        expect(Monthcalendar.getSelectedYear()).toBe('2020');
    });
    it('should disable next month button when max date is reached', () => {
        const calendar = new PageMonthCalendar(MONTH_CALENDAR);
        expect(calendar.isNextMonthButtonDisabled()).toBe(false);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.isNextMonthButtonDisabled()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', () => {
        const calendar = new PageMonthCalendar(MONTH_CALENDAR);
        expect(calendar.isPrevMonthButtonDisabled()).toBe(false);
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        calendar.setYear('2018');
        expect(calendar.isPrevMonthButtonDisabled()).toBe(true);
    });
});
