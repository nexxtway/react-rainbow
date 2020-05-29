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
});
