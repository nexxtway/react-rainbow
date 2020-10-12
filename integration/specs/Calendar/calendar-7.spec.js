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
    ESCAPE_KEY,
    ENTER_KEY,
} = require('../../constants');

const CALENDAR = '#calendar-7';

describe('Calendar', () => {
    beforeAll(() => {
        browser.url('/#!/Calendar/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CALENDAR);
        component.waitForExist();
    });
    it('should change months when clicked on left and right arrows', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.getLeftSelectedMonth()).toBe('December');
        expect(calendar.getRightSelectedMonth()).toBe('January');
        calendar.clickPrevMonthButton();
        expect(calendar.getLeftSelectedMonth()).toBe('November');
        expect(calendar.getRightSelectedMonth()).toBe('December');
        calendar.clickNextMonthButton();
        calendar.clickNextMonthButton();
        expect(calendar.getLeftSelectedMonth()).toBe('January');
        expect(calendar.getRightSelectedMonth()).toBe('February');
    });
    it('should select the right day button element', () => {
        const calendar = new PageCalendar(CALENDAR);
        expect(calendar.getLeftMonthSelectedDay()).toBe('11');
        expect(calendar.getRightMonthSelectedDay()).toBe(undefined);
        calendar.clickLeftMonthDay(5);
        expect(calendar.getLeftMonthSelectedDay()).toBe('5');
        expect(calendar.getRightMonthSelectedDay()).toBe(undefined);
        calendar.clickRightMonthDay(6);
        expect(calendar.getLeftMonthSelectedDay()).toBe(undefined);
        expect(calendar.getRightMonthSelectedDay()).toBe('6');
    });
    it('should focus the correct day in left month when an arrow key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
        browser.keys(ARROW_UP_KEY);
        expect(calendar.isLeftMonthDayFocused(4)).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.isLeftMonthDayFocused(10)).toBe(true);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
    });
    it('should focus the correct day in right month when an arrow key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickRightMonthDay(11);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
        browser.keys(ARROW_UP_KEY);
        expect(calendar.isRightMonthDayFocused(4)).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.isRightMonthDayFocused(10)).toBe(true);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should focus the first day of the week in left month when HOME key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        browser.keys(HOME_KEY);
        expect(calendar.isLeftMonthDayFocused(8)).toBe(true);
    });
    it('should focus the first day of the week in right month when HOME key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickRightMonthDay(11);
        browser.keys(HOME_KEY);
        expect(calendar.isRightMonthDayFocused(5)).toBe(true);
    });
    it('should focus the last day of the week in left month when END key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        browser.keys(END_KEY);
        expect(calendar.isLeftMonthDayFocused(14)).toBe(true);
    });
    it('should focus the last day of the week in right month when END key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickRightMonthDay(8);
        browser.keys(END_KEY);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to the previous month when is in the first day of a month and press LEFT OR UP arrow keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(1);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.getLeftSelectedMonth()).toBe('November');
        expect(calendar.isLeftMonthDayFocused(30)).toBe(true);
        calendar.clickRightMonthDay(1);
        expect(calendar.isLeftMonthDayFocused(30)).toBe(true);
    });
    it('should change to next month when is in the last day of a month and press RIGHT OR DOWN arrow keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(31);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isRightMonthDayFocused(1)).toBe(true);
        calendar.clickRightMonthDay(31);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.getLeftSelectedMonth()).toBe('January');
        expect(calendar.getRightSelectedMonth()).toBe('February');
        expect(calendar.isRightMonthDayFocused(1)).toBe(true);
    });
    it('should change to the previous month when PAGEUP key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickRightMonthDay(11);
        browser.keys(PAGEUP_KEY);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
        browser.keys(PAGEUP_KEY);
        expect(calendar.getLeftSelectedMonth()).toBe('November');
        expect(calendar.getRightSelectedMonth()).toBe('December');
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
    });
    it('should change to next month when PAGEDOWN key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        browser.keys(PAGEDOWN_KEY);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
        browser.keys(PAGEDOWN_KEY);
        expect(calendar.getLeftSelectedMonth()).toBe('January');
        expect(calendar.getRightSelectedMonth()).toBe('February');
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to the previous year when ALT + PAGEUP keys are pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        browser.keys([ALT_KEY, PAGEUP_KEY]);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
        expect(calendar.getLeftSelectedMonth()).toBe('December');
        expect(calendar.getLeftMonthSelectedYear()).toBe('2018');
        expect(calendar.getRightSelectedMonth()).toBe('January');
        expect(calendar.getRightMonthSelectedYear()).toBe('2019');
    });
    it('should select a day when press ENTER key while is focused', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(11);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ENTER_KEY);
        expect(calendar.isLeftMonthDaySelected(10)).toBe(true);
        calendar.clickRightMonthDay(11);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ENTER_KEY);
        expect(calendar.isRightMonthDaySelected(10)).toBe(true);
    });
    it('should focus the selected day when tab reach days table', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthSelectYear();
        expect(calendar.isLeftMonthDayFocused(11)).toBe(false);
        browser.keys(ESCAPE_KEY);
        browser.keys(TAB_KEY);
        expect(calendar.isLeftMonthDayFocused(11)).toBe(true);
        calendar.clickRightMonthDay(11);
        calendar.clickRightMonthSelectYear();
        expect(calendar.isRightMonthDayFocused(11)).toBe(false);
        browser.keys(ESCAPE_KEY);
        browser.keys(TAB_KEY);
        expect(calendar.isRightMonthDayFocused(11)).toBe(true);
    });
    it('should change to next year when ALT + PAGEDOWN keys are pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickLeftMonthDay(10);
        browser.keys([ALT_KEY, PAGEDOWN_KEY]);
        expect(calendar.isLeftMonthDayFocused(10)).toBe(true);
        expect(calendar.getLeftSelectedMonth()).toBe('December');
        expect(calendar.getLeftMonthSelectedYear()).toBe('2020');
        expect(calendar.getRightSelectedMonth()).toBe('January');
        expect(calendar.getRightMonthSelectedYear()).toBe('2021');
    });
    it('should navigate on the header when using arrow keys', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        expect(calendar.isPrevMonthButtonFocused()).toBe(true);
        expect(calendar.isLeftYearSelectFocused()).toBe(false);
        expect(calendar.isRightYearSelectFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        browser.keys(ARROW_LEFT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(true);
        expect(calendar.isLeftYearSelectFocused()).toBe(false);
        expect(calendar.isRightYearSelectFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isLeftYearSelectFocused()).toBe(true);
        expect(calendar.isRightYearSelectFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isLeftYearSelectFocused()).toBe(false);
        expect(calendar.isRightYearSelectFocused()).toBe(true);
        expect(calendar.isNextMonthButtonFocused()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(calendar.isPrevMonthButtonFocused()).toBe(false);
        expect(calendar.isLeftYearSelectFocused()).toBe(false);
        expect(calendar.isRightYearSelectFocused()).toBe(false);
        expect(calendar.isNextMonthButtonFocused()).toBe(true);
    });
    it('should move from calendar controls to days when TAB key is pressed', () => {
        const calendar = new PageCalendar(CALENDAR);
        calendar.clickPrevMonthButton();
        expect(calendar.isLeftMonthDayFocused(1)).toBe(false);
        browser.keys(TAB_KEY);
        expect(calendar.isLeftMonthDayFocused(1)).toBe(true);
        browser.keys(TAB_KEY);
        expect(calendar.isLeftMonthDayFocused(1)).toBe(false);
    });
});
