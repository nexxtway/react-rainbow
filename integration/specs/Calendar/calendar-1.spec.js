const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-1';

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
        expect(calendar.getSelectedMonth()).toBe('December');
        calendar.clickPrevMonthButton();
        expect(calendar.getSelectedMonth()).toBe('November');
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.getSelectedMonth()).toBe('January');
    });
    it('should select the rigth day button element', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.getSelectedDay()).toBe('6');
        calendar.clickDay(4);
        expect(calendar.getSelectedDay()).toBe('4');
    });
    it('should change year when month is December and click next month button', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.getSelectedMonth()).toBe('December');
        expect(calendar.getSelectedYear()).toBe('2019');
        calendar.clickNextMonthButton();
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.getSelectedYear()).toBe('2020');
    });
});
