const PageMonthlyCalendar = require('../../../src/components/MonthlyCalendar/pageObject');

const MONTHLY_CALENDAR = '#monthly-calendar-1';

describe('MonthlyCalendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/MonthlyCalendar/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(MONTHLY_CALENDAR);
        await component.waitForExist();
    });
    it('should change selected month when clicked on left and right arrows', async () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        await expect(await monthlyCalendar.getSelectedMonth()).toBe('December');
        await monthlyCalendar.clickPrevMonthButton();
        await expect(await monthlyCalendar.getSelectedMonth()).toBe('November');
        await monthlyCalendar.clickNextMonthButton();
        await monthlyCalendar.clickNextMonthButton();
        await expect(await monthlyCalendar.getSelectedMonth()).toBe('January');
    });
    it('should change year when month is December and click next month button', async () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        await expect(await monthlyCalendar.getSelectedMonth()).toBe('December');
        await expect(await monthlyCalendar.getSelectedYear()).toBe('2019');
        await monthlyCalendar.clickNextMonthButton();
        await expect(await monthlyCalendar.getSelectedMonth()).toBe('January');
        await expect(await monthlyCalendar.getSelectedYear()).toBe('2020');
    });
    it('should disable next month button when max date is reached', async () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        await expect(await monthlyCalendar.isNextMonthButtonDisabled()).toBe(false);
        await monthlyCalendar.clickNextMonthButton();
        await monthlyCalendar.clickNextMonthButton();
        await expect(await monthlyCalendar.isNextMonthButtonDisabled()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', async () => {
        const monthlyCalendar = new PageMonthlyCalendar(MONTHLY_CALENDAR);
        await expect(await monthlyCalendar.isPrevMonthButtonDisabled()).toBe(false);
        await monthlyCalendar.clickNextMonthButton();
        await monthlyCalendar.clickNextMonthButton();
        await monthlyCalendar.setYear('2018');
        await expect(await monthlyCalendar.isPrevMonthButtonDisabled()).toBe(true);
    });
});
