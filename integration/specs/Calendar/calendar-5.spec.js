const PageCalendar = require('../../../src/components/Calendar/pageObject');

const CALENDAR = '#calendar-5';

describe('Calendar', () => {
    beforeAll(async () => {
        await browser.url('/#!/Calendar/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CALENDAR);
        await component.waitForExist();
    });
    it('should disable the dates passed in `disabledDays`', async () => {
        const calendar = await PageCalendar(CALENDAR);
        await expect(await calendar.isDayEnabled(20)).toBe(false);
        await expect(await calendar.isDayEnabled(21)).toBe(true);
    });
});
