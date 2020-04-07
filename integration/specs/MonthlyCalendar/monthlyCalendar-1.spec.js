const PageMonthlyCalendar = require('../../../src/components/MonthlyCalendar/pageObject');

const MONTHLY_CALENDAR = '#monthly-calendar-1';

describe('MonthlyCalendar', () => {
    beforeAll(() => {
        browser.url('/#!/MonthlyCalendar/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(MONTHLY_CALENDAR);
        component.waitForExist();
    });
    it('should change selected month when clicked on left and right arrows', () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        expect(monthlyCalendar.getSelectedMonth()).toBe('December');
        monthlyCalendar.clickPrevMonthButton();
        expect(monthlyCalendar.getSelectedMonth()).toBe('November');
        monthlyCalendar.clickNextMonthButton();
        monthlyCalendar.clickNextMonthButton();
        expect(monthlyCalendar.getSelectedMonth()).toBe('January');
    });
    it('should change year when month is December and click next month button', () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        expect(monthlyCalendar.getSelectedMonth()).toBe('December');
        expect(monthlyCalendar.getSelectedYear()).toBe('2019');
        monthlyCalendar.clickNextMonthButton();
        expect(monthlyCalendar.getSelectedMonth()).toBe('January');
        expect(monthlyCalendar.getSelectedYear()).toBe('2020');
    });
    it('should disable next month button when max date is reached', () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        expect(monthlyCalendar.isNextMonthButtonDisabled()).toBe(false);
        monthlyCalendar.clickNextMonthButton();
        monthlyCalendar.clickNextMonthButton();
        expect(monthlyCalendar.isNextMonthButtonDisabled()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        expect(monthlyCalendar.isPrevMonthButtonDisabled()).toBe(false);
        monthlyCalendar.clickNextMonthButton();
        monthlyCalendar.clickNextMonthButton();
        monthlyCalendar.setYear('2018');
        expect(monthlyCalendar.isPrevMonthButtonDisabled()).toBe(true);
    });
});
