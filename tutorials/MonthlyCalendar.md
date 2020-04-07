Here is an overview about how to use the MonthlyCalendar page object:

    const PageMonthlyCalendar = require('react-rainbow-components/components/MonthlyCalendar/pageObject');
    const MONTHLY_CALENDAR = '#monthly-calendar-1';

    describe('Calendar', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(MONTHLY_CALENDAR);
            component.waitForExist();
        });
        it('should change selected month when clicked on left and right arrows', () => {
            const calendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
            expect(calendar.getSelectedMonth()).toBe('December');
            calendar.clickPrevMonthButton();
            expect(calendar.getSelectedMonth()).toBe('November');
            calendar.clickNextMonthButton();
            calendar.clickNextMonthButton();
            expect(calendar.getSelectedMonth()).toBe('January');
        });
        it('should change year when month is December and click next month button', () => {
            const calendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
            expect(calendar.getSelectedMonth()).toBe('December');
            expect(calendar.getSelectedYear()).toBe('2019');
            calendar.clickNextMonthButton();
            expect(calendar.getSelectedMonth()).toBe('January');
            expect(calendar.getSelectedYear()).toBe('2020');
        });
    });
