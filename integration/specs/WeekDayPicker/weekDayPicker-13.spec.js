const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-13';

describe('WeekDayPicker disabled', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/13');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should keep checkbox status when input is disabled', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        const selected = weekDayPicker.getSelectedDays();
        expect(selected.includes('monday')).toBe(false);
    });
});
