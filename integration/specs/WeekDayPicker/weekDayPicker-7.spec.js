const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-7';

describe('WeekDayPicker readOnly', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should keep checkbox status when WeekDayPicker is readOnly', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        const initiallySelected = weekDayPicker.getSelectedDays();
        expect(initiallySelected.includes('tuesday')).toBe(true);
        weekDayPicker.clickOn('saturday');
        const selected = weekDayPicker.getSelectedDays();
        expect(selected.includes('saturday')).toBe(false);
    });
});
