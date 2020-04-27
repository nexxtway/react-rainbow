const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-3';

describe('WeekDayPicker days available', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should keep uncheck status for unavailable days', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('friday');
        expect(weekDayPicker.isInputChecked('friday')).toBe(true);
        weekDayPicker.clickOn('saturday');
        expect(weekDayPicker.isInputChecked('saturday')).toBe(false);
    });
});
