const PageCalendar = require('../../../src/components/Calendar/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
    PAGEUP_KEY,
    PAGEDOWN_KEY,
    HOME_KEY,
    END_KEY,
    ALT_KEY,
    TAB_KEY,
    ENTER_KEY,
} = require('../../constants');

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
    it('should select the right day button element', () => {
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
    it('should focus the right day in current month when an arrow key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        expect(calendar.isDayFocused(11)).toBe(true);
        browser.keys(ARROW_UP_KEY);
        expect(calendar.isDayFocused(4)).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(calendar.isDayFocused(11)).toBe(true);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.isDayFocused(10)).toBe(true);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isDayFocused(11)).toBe(true);
    });
    it('should focus the first day of the week when HOME key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(HOME_KEY);
        expect(calendar.isDayFocused(8)).toBe(true);
    });
    it('should focus the last day of the week when END key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(END_KEY);
        expect(calendar.isDayFocused(14)).toBe(true);
    });
    it('should change to the previous month when is in the first day of a month and press LEFT OR UP arrow keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(1);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.getSelectedMonth()).toBe('November');
        expect(calendar.isDayFocused(30)).toBe(true);
    });
    it('should change to next month when is in the last day of a month and press RIGHT OR DOWN arrow keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(31);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.isDayFocused(1)).toBe(true);
    });
    it('should change month when is in the first week of a month, the first day of the month is not the first day of the week and press HOME key', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickDay(4);
        browser.keys(HOME_KEY);
        expect(calendar.getSelectedMonth()).toBe('September');
        expect(calendar.isDayFocused(29)).toBe(true);
    });
    it('should change month when is in the last week of a month, the last day of the month is not the last day of the week and press END key', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        calendar.clickPrevMonthButton();
        calendar.clickDay(29);
        browser.keys(END_KEY);
        expect(calendar.getSelectedMonth()).toBe('November');
        expect(calendar.isDayFocused(2)).toBe(true);
    });
    it('should change year when is in the first week of January and the day 1 is not the fisrt day of the week and press HOME key', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.setYear('2019');
        calendar.clickDay(2);
        browser.keys(HOME_KEY);
        expect(calendar.getSelectedYear()).toBe('2018');
    });
    it('should change year when is in the last week of December and the 31 is not the last day of the week and press END key', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(31);
        browser.keys(END_KEY);
        expect(calendar.getSelectedYear()).toBe('2020');
    });
    it('should change to the previous month when PAGEUP key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(PAGEUP_KEY);
        expect(calendar.getSelectedMonth()).toBe('November');
        expect(calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to next month when PAGEDOWN key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(PAGEDOWN_KEY);
        expect(calendar.getSelectedMonth()).toBe('January');
        expect(calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to the previous year when is in January and PAGEUP key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickNextMonthButton();
        calendar.setYear('2019');
        calendar.clickDay(11);
        browser.keys(PAGEUP_KEY);
        expect(calendar.getSelectedYear()).toBe('2018');
    });
    it('should change to next year when is in the December and PAGEDOWN key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(PAGEDOWN_KEY);
        expect(calendar.getSelectedYear()).toBe('2020');
    });
    it('should change to the previous year when ALT + PAGEUP keys are pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys([ALT_KEY, PAGEUP_KEY]);
        expect(calendar.getSelectedMonth()).toBe('December');
        expect(calendar.getSelectedYear()).toBe('2018');
        expect(calendar.isDayFocused(11)).toBe(true);
    });
    it('should change to next year when ALT + PAGEDOWN keys are pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys([ALT_KEY, PAGEDOWN_KEY]);
        expect(calendar.getSelectedMonth()).toBe('December');
        expect(calendar.getSelectedYear()).toBe('2020');
        expect(calendar.isDayFocused(11)).toBe(true);
    });
    it('should select a day when press ENTER key while is focused', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickDay(11);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ENTER_KEY);
        expect(calendar.getSelectedDay()).toBe('10');
    });
    it('should focus the selected day when tab reach days table', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickSelectYear();
        calendar.clickSelectYear();
        expect(calendar.isDayFocused(6)).toBe(false);
        browser.keys(TAB_KEY);
        expect(calendar.isDayFocused(6)).toBe(true);
    });
    it('should focus the first day of the month when tab reach days table and there is not a selected day', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        calendar.clickSelectYear();
        calendar.clickSelectYear();
        expect(calendar.isDayFocused(1)).toBe(false);
        browser.keys(TAB_KEY);
        expect(calendar.isDayFocused(1)).toBe(true);
    });
    it('should navigate on the header when using ARROW keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        expect(calendar.isPrevMonthButtonFocused()).toBe(true);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        expect(calendar.isYearSelectFocused()).toBe(false);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(true);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        expect(calendar.isYearSelectFocused()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(true);
        expect(calendar.isYearSelectFocused()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        expect(calendar.isYearSelectFocused()).toBe(true);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        expect(calendar.isYearSelectFocused()).toBe(true);
    });
    it('should move from calendar controls to days when TAB key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        expect(calendar.isDayFocused(1)).toBe(false);
        browser.keys(TAB_KEY);
        expect(calendar.isDayFocused(1)).toBe(true);
        browser.keys(TAB_KEY);
        expect(calendar.isDayFocused(1)).toBe(false);
    });
});
