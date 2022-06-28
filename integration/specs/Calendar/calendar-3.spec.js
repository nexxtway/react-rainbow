const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-3';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should disable next month button when max date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.isNextMonthButtonDisabled()).toBe(false);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await expect(await calendar.isNextMonthButtonDisabled()).toBe(true);
    });
    it('should disable the previous month button when min date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.isPrevMonthButtonDisabled()).toBe(false);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await calendar.setYear('2018');
        await expect(await calendar.isPrevMonthButtonDisabled()).toBe(true);
    });
    it('should not change to next month when PAGEDOWN key is pressed and max date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await calendar.clickDay(1);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await browser.keys('PageDown');
        await browser.keys('PageDown');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(4)).toBe(true);
    });
    it('should not change to previous month when PAGEUP key is pressed and min date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        calendar.setYear('2018');
        await calendar.clickDay(25);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await browser.keys('PageUp');
        await browser.keys('PageUp');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
    });
    it('should not change to next year when ALT + PAGEDOWN keys are pressed and max date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await calendar.clickDay(1);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await browser.keys(['Alt', 'PageDown']);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(4)).toBe(true);
    });
    it('should not change to the previous year when ALT + PAGEUP keys are pressed and min date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        calendar.setYear('2018');
        await calendar.clickDay(25);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await browser.keys(['Alt', 'PageUp']);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
    });
    it('should not move focus when press RIGHT OR DOWN arrow keys and max date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await calendar.clickDay(4);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(4)).toBe(true);
        await browser.keys('ArrowRight');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(4)).toBe(true);
        await browser.keys('ArrowDown');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(4)).toBe(true);
    });
    it('should not move focus when press LEFT OR UP arrow keys and min date is reached', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        calendar.setYear('2018');
        await calendar.clickDay(4);
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await expect(await calendar.isDayFocused(4)).toBe(true);
        await browser.keys('ArrowLeft');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await expect(await calendar.isDayFocused(4)).toBe(true);
        await browser.keys('ArrowUp');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await expect(await calendar.isDayFocused(4)).toBe(true);
    });
});
