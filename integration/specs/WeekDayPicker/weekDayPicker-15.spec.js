const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-15';

describe('WeekDayPicker localization', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/15');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should have label localized', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        expect(weekDayPicker.getInputLabel('monday')).toBe('L');
    });
});
