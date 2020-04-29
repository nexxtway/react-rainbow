const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');
const { TAB_KEY, SPACE_KEY } = require('../../constants');

const WEEKDAY_PICKER = '#weekday-picker-5';

describe('WeekDayPicker multiple selection', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should check and uncheck multiple days', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        weekDayPicker.clickOn('friday');
        weekDayPicker.clickOn('saturday');
        const initiallySelected = weekDayPicker.getSelectedDays();
        expect(initiallySelected.includes('monday')).toBe(true);
        expect(initiallySelected.includes('friday')).toBe(true);
        expect(initiallySelected.includes('saturday')).toBe(true);
        weekDayPicker.clickOn('monday');
        weekDayPicker.clickOn('friday');
        weekDayPicker.clickOn('saturday');
        const selected = weekDayPicker.getSelectedDays();
        expect(selected.includes('monday')).toBe(false);
        expect(selected.includes('friday')).toBe(false);
        expect(selected.includes('saturday')).toBe(false);
    });
    it('should change focus and selection when tab key is pressed', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        browser.keys(TAB_KEY);
        expect(weekDayPicker.getFocusedDay()).toBe('tuesday');
    });
    it('should check input when input is focused and space key is pressed', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        browser.keys(TAB_KEY);
        browser.keys(SPACE_KEY);
        const selected = weekDayPicker.getSelectedDays();
        expect(selected.includes('tuesday')).toBe(true);
    });
});
