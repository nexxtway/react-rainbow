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
        expect(weekDayPicker.getSelectedDays()).toEqual(['tuesday']);
        weekDayPicker.clickOn('saturday');
        expect(weekDayPicker.getSelectedDays()).toEqual(['tuesday']);
    });
});
