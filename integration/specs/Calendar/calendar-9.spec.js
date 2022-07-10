const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-9';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/9');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should change months when clicked on left and right arrows', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.getLeftSelectedMonth()).toBe('December');
        await expect(await calendar.getRightSelectedMonth()).toBe('January');
        await calendar.clickPrevMonthButton();
        await expect(await calendar.getLeftSelectedMonth()).toBe('November');
        await expect(await calendar.getRightSelectedMonth()).toBe('December');
        await calendar.clickNextMonthButton();
        await calendar.clickNextMonthButton();
        await expect(await calendar.getLeftSelectedMonth()).toBe('January');
        await expect(await calendar.getRightSelectedMonth()).toBe('February');
    });
    it('should select the right day button element', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.getLeftMonthSelectedDay()).toBe('11');
        await expect(await calendar.getRightMonthSelectedDay()).toBe(undefined);
        await calendar.clickLeftMonthDay(5);
        await expect(await calendar.getLeftMonthSelectedDay()).toBe('5');
        await expect(await calendar.getRightMonthSelectedDay()).toBe(undefined);
        await calendar.clickRightMonthDay(6);
        await expect(await calendar.getLeftMonthSelectedDay()).toBe(undefined);
        await expect(await calendar.getRightMonthSelectedDay()).toBe('6');
    });
    it('should focus the correct day in left month when an arrow key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
        await browser.keys('ArrowUp');
        await expect(await calendar.isLeftMonthDayFocused(4)).toBe(true);
        await browser.keys('ArrowDown');
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
        await browser.keys('ArrowLeft');
        await expect(await calendar.isLeftMonthDayFocused(10)).toBe(true);
        await browser.keys('ArrowRight');
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
    });
    it('should focus the correct day in right month when an arrow key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickRightMonthDay(11);
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
        await browser.keys('ArrowUp');
        await expect(await calendar.isRightMonthDayFocused(4)).toBe(true);
        await browser.keys('ArrowDown');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
        await browser.keys('ArrowLeft');
        await expect(await calendar.isRightMonthDayFocused(10)).toBe(true);
        await browser.keys('ArrowRight');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should focus the first day of the week in left month when HOME key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await browser.keys('Home');
        await expect(await calendar.isLeftMonthDayFocused(8)).toBe(true);
    });
    it('should focus the first day of the week in right month when HOME key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickRightMonthDay(11);
        await browser.keys('Home');
        await expect(await calendar.isRightMonthDayFocused(5)).toBe(true);
    });
    it('should focus the last day of the week in left month when END key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await browser.keys('End');
        await expect(await calendar.isLeftMonthDayFocused(14)).toBe(true);
    });
    it('should focus the last day of the week in right month when END key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickRightMonthDay(8);
        await browser.keys('End');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to the previous month when is in the first day of a month and press LEFT OR UP arrow keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(1);
        await browser.keys('ArrowLeft');
        await expect(await calendar.getLeftSelectedMonth()).toBe('November');
        await expect(await calendar.isLeftMonthDayFocused(30)).toBe(true);
        await calendar.clickRightMonthDay(1);
        await expect(await calendar.isLeftMonthDayFocused(30)).toBe(true);
    });
    it('should change to next month when is in the last day of a month and press RIGHT OR DOWN arrow keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(31);
        await browser.keys('ArrowRight');
        await expect(await calendar.isRightMonthDayFocused(1)).toBe(true);
        await calendar.clickRightMonthDay(31);
        await browser.keys('ArrowRight');
        await expect(await calendar.getLeftSelectedMonth()).toBe('January');
        await expect(await calendar.getRightSelectedMonth()).toBe('February');
        await expect(await calendar.isRightMonthDayFocused(1)).toBe(true);
    });
    it('should change to the previous month when PAGEUP key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickRightMonthDay(11);
        await browser.keys('PageUp');
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
        await browser.keys('PageUp');
        await expect(await calendar.getLeftSelectedMonth()).toBe('November');
        await expect(await calendar.getRightSelectedMonth()).toBe('December');
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
    });
    it('should change to next month when PAGEDOWN key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await browser.keys('PageDown');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
        await browser.keys('PageDown');
        await expect(await calendar.getLeftSelectedMonth()).toBe('January');
        await expect(await calendar.getRightSelectedMonth()).toBe('February');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to the previous year when ALT + PAGEUP keys are pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await browser.keys(['Alt', 'PageUp']);
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
        await expect(await calendar.getLeftSelectedMonth()).toBe('December');
        await expect(await calendar.getLeftMonthSelectedYear()).toBe('2018');
        await expect(await calendar.getRightSelectedMonth()).toBe('January');
        await expect(await calendar.getRightMonthSelectedYear()).toBe('2019');
    });
    it('should select a day when press ENTER key while is focused', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(11);
        await browser.keys('ArrowLeft');
        await browser.keys('Enter');
        await expect(await calendar.isLeftMonthDaySelected(10)).toBe(true);
        await calendar.clickRightMonthDay(11);
        await browser.keys('ArrowLeft');
        await browser.keys('Enter');
        await expect(await calendar.isRightMonthDaySelected(10)).toBe(true);
    });
    it('should focus the selected day when tab reach days table', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthSelectYear();
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(false);
        await browser.keys('Escape');
        await browser.keys('Tab');
        await expect(await calendar.isLeftMonthDayFocused(11)).toBe(true);
        await calendar.clickRightMonthDay(11);
        await calendar.clickRightMonthSelectYear();
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(false);
        await browser.keys('Escape');
        await browser.keys('Tab');
        await expect(await calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to next year when ALT + PAGEDOWN keys are pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickLeftMonthDay(10);
        await browser.keys(['Alt', 'PageDown']);
        await expect(await calendar.isLeftMonthDayFocused(10)).toBe(true);
        await expect(await calendar.getLeftSelectedMonth()).toBe('December');
        await expect(await calendar.getLeftMonthSelectedYear()).toBe('2020');
        await expect(await calendar.getRightSelectedMonth()).toBe('January');
        await expect(await calendar.getRightMonthSelectedYear()).toBe('2021');
    });
    it('should navigate on the header when using arrow keys', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(true);
        await expect(await calendar.isLeftYearSelectFocused()).toBe(false);
        await expect(await calendar.isRightYearSelectFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await browser.keys('ArrowLeft');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(true);
        await expect(await calendar.isLeftYearSelectFocused()).toBe(false);
        await expect(await calendar.isRightYearSelectFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isLeftYearSelectFocused()).toBe(true);
        await expect(await calendar.isRightYearSelectFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isLeftYearSelectFocused()).toBe(false);
        await expect(await calendar.isRightYearSelectFocused()).toBe(true);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(false);
        await browser.keys('ArrowRight');
        await expect(await calendar.isPrevMonthButtonFocused()).toBe(false);
        await expect(await calendar.isLeftYearSelectFocused()).toBe(false);
        await expect(await calendar.isRightYearSelectFocused()).toBe(false);
        await expect(await calendar.isNextMonthButtonFocused()).toBe(true);
    });
    it('should move from calendar controls to days when TAB key is pressed', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await calendar.clickPrevMonthButton();
        await expect(await calendar.isLeftMonthDayFocused(1)).toBe(false);
        await browser.keys('Tab');
        await expect(await calendar.isLeftMonthDayFocused(1)).toBe(true);
        await browser.keys('Tab');
        await expect(await calendar.isLeftMonthDayFocused(1)).toBe(false);
    });
});
