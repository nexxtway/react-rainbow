const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-1';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should change selected month when clicked on left and right arrows', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.getSelectedMonth()).toBe('December');
        await calendar.clickPrevMonthButton();
        await expect(await calendar.getSelectedMonth()).toBe('November');
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await expect(await calendar.getSelectedMonth()).toBe('January');
    });
    it('should select the right day button element', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.getSelectedDay()).toBe('6');
        await calendar.clickDay(4);
        await expect(await calendar.getSelectedDay()).toBe('4');
    });
    it('should change year when month is December and click next month button', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.getSelectedMonth()).toBe('December');
        await expect(await calendar.getSelectedYear()).toBe('2019');
        await calendar.clickNextMonthButton();
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.getSelectedYear()).toBe('2020');
    });
    it('should focus the right day in current month when an arrow key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await expect(await calendar.isDayFocused(11)).toBe(true);
        await browser.keys('ArrowUp');
        await expect(await calendar.isDayFocused(4)).toBe(true);
        await browser.keys('ArrowDown');
        await expect(await calendar.isDayFocused(11)).toBe(true);
        await browser.keys('ArrowLeft');
        await expect(await calendar.isDayFocused(10)).toBe(true);
        await browser.keys('ArrowRight');
        await expect(await calendar.isDayFocused(11)).toBe(true);
    });
    it('should focus the first day of the week when HOME key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('Home');
        await expect(await calendar.isDayFocused(8)).toBe(true);
    });
    it('should focus the last day of the week when END key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('End');
        await expect(await calendar.isDayFocused(14)).toBe(true);
    });
    it('should change to the previous month when is in the first day of a month and press LEFT OR UP arrow keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(1);
        await browser.keys('ArrowLeft');
        await expect(await calendar.getSelectedMonth()).toBe('November');
        await expect(await calendar.isDayFocused(30)).toBe(true);
    });
    it('should change to next month when is in the last day of a month and press RIGHT OR DOWN arrow keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(31);
        await browser.keys('ArrowRight');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.isDayFocused(1)).toBe(true);
    });
    it('should change month when is in the first week of a month, the first day of the month is not the first day of the week and press HOME key', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await calendar.clickPrevMonthButton();
        await calendar.clickDay(4);
        await browser.keys('Home');
        await expect(await calendar.getSelectedMonth()).toBe('September');
        await expect(await calendar.isDayFocused(29)).toBe(true);
    });
    it('should change month when is in the last week of a month, the last day of the month is not the last day of the week and press END key', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await calendar.clickPrevMonthButton();
        await calendar.clickDay(29);
        await browser.keys('End');
        await expect(await calendar.getSelectedMonth()).toBe('November');
        await expect(await calendar.isDayFocused(2)).toBe(true);
    });
    it('should change year when is in the first week of January and the day 1 is not the fisrt day of the week and press HOME key', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        calendar.setYear('2019');
        await calendar.clickDay(2);
        await browser.keys('Home');
        await expect(await calendar.getSelectedYear()).toBe('2018');
    });
    it('should change year when is in the last week of December and the 31 is not the last day of the week and press END key', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(31);
        await browser.keys('End');
        await expect(await calendar.getSelectedYear()).toBe('2020');
    });
    it('should change to the previous month when PAGEUP key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('PageUp');
        await expect(await calendar.getSelectedMonth()).toBe('November');
        await expect(await calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to next month when PAGEDOWN key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('PageDown');
        await expect(await calendar.getSelectedMonth()).toBe('January');
        await expect(await calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to the previous year when is in January and PAGEUP key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickNextMonthButton();
        calendar.setYear('2019');
        await calendar.clickDay(11);
        await browser.keys('PageUp');
        await expect(await calendar.getSelectedYear()).toBe('2018');
    });
    it('should change to next year when is in the December and PAGEDOWN key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('PageDown');
        await expect(await calendar.getSelectedYear()).toBe('2020');
    });
    it('should change to the previous year when ALT + PAGEUP keys are pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys(['Alt', 'PageUp']);
        await expect(await calendar.getSelectedMonth()).toBe('December');
        await expect(await calendar.getSelectedYear()).toBe('2018');
        await expect(await calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to next year when ALT + PAGEDOWN keys are pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys(['Alt', 'PageDown']);
        await expect(await calendar.getSelectedMonth()).toBe('December');
        await expect(await calendar.getSelectedYear()).toBe('2020');
        await expect(await calendar.isDayFocused(11)).toBe(true);
    });
    it('should select a day when press ENTER key while is focused', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickDay(11);
        await browser.keys('ArrowLeft');
        await browser.keys('Enter');
        await expect(await calendar.getSelectedDay()).toBe('10');
    });
    it('should focus the selected day when tab reach days table', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickSelectYear();
        await calendar.clickSelectYear();
        await expect(await calendar.isDayFocused(6)).toBe(false);
        await browser.keys('Tab');
        await expect(await calendar.isDayFocused(6)).toBe(true);
    });
    it('should focus the first day of the month when tab reach days table and there is not a selected day', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await calendar.clickSelectYear();
        await calendar.clickSelectYear();
        await expect(await calendar.isDayFocused(1)).toBe(false);
        await browser.keys('Tab');
        await expect(await calendar.isDayFocused(1)).toBe(true);
    });
    it('should navigate on the header when using ARROW keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(true);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await expect(await calendar.isYearSelectFocused()).toBe(false);
        await browser.keys('ArrowLeft');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(true);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await expect(await calendar.isYearSelectFocused()).toBe(false);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(true);
        await expect(await calendar.isYearSelectFocused()).toBe(false);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await expect(await calendar.isYearSelectFocused()).toBe(true);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await expect(await calendar.isYearSelectFocused()).toBe(true);
    });
    it('should move from calendar controls to days when TAB key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await expect(await calendar.isDayFocused(1)).toBe(false);
        await browser.keys('Tab');
        await expect(await calendar.isDayFocused(1)).toBe(true);
        await browser.keys('Tab');
        await expect(await calendar.isDayFocused(1)).toBe(false);
    });
});
